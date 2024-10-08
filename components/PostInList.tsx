import React from 'react'

import { Post } from '@/app/utils/types';


type PostProps = {
    id: string
}

const PostInList = async ({id}: PostProps) => {

  async function getPost(id: string){
    'use server'
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache: 'no-store'})
    if (!response.ok){
        throw new Error('Failed to fetch data');
    }

    return response.json()
  }

    const post: Post = await getPost(id);

  return (
    <div className="w-4/5 mx-auto mt-2 bg-slate-600 text-center">
        <div className="text-white text-2xl">User ID: {post.userId}</div>
        <div>id: {post.id}</div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        </div>
  )
}

export default PostInList