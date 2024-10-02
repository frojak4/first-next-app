import React from 'react'
import { getPost } from '@/app/utils/utils'


type PostIDProps = {
    params: {
        id: string
    }
}

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const PostID = async ({params}: PostIDProps) => {

    const post: Post = await getPost(params.id);

  return (
    <div>
    <div className="text-white text-2xl">User ID: {post.userId}</div>
    <div>id: {post.id}</div>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    </div>
  )
}

export default PostID