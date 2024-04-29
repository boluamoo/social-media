import { yupResolver } from '@hookform/resolvers/yup'
import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { auth, db } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

const CreateForm = () => {
  const navigate = useNavigate()

  const schema = yup.object().shape({
    title: yup.string().required('You must add a title.'),
    description: yup.string().required('You must add a description.'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const postsRef = collection(db, 'posts')

  const [user] = useAuthState(auth)
  const onCreatePost = async (data) => {
    navigate('/')
    console.log(data)
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    })
  }

  return (
    <form
      onSubmit={handleSubmit(onCreatePost)}
      className="bg-slate-500 p-14 rounded-2xl flex flex-col items-center gap-4"
    >
      <input
        placeholder="Title..."
        {...register('title')}
        className="w-full p-4 rounded-md"
      />
      <p className="text-red-500">{errors.title?.message}</p>
      <textarea
        placeholder="Description..."
        {...register('description')}
        className="w-full p-4 rounded-md"
      />
      <p className="text-red-500">{errors.description?.message}</p>
      <input type="submit" className="hover:cursor-pointer" />
    </form>
  )
}

export default CreateForm
