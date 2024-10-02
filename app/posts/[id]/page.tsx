import React from 'react'
import { getPost, getComments } from '@/app/utils/utils'
import { Comment, Post } from '../../utils/types'
import DisplayComment from '@/components/DisplayComment'

type PostIDProps = {
    params: {
        id: string
    }
}



const PostID = async ({params}: PostIDProps) => {

    const post: Post = await getPost(params.id);
    const comments: Comment[] = await getComments(params.id)

  return (
    <div>
        <div className="w-4/5 mx-auto mt-2 bg-slate-600 text-center">
        <div className="text-white text-2xl">User ID: {post.userId}</div>
        <div>id: {post.id}</div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        </div>
        <div>
        {comments.map((comment, i) => {
                return <DisplayComment key={i} comment={comment}/>
            })}
        </div>
    </div>
  )
}

export default PostID