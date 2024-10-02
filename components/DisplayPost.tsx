import React from 'react'
import {Post} from '../app/utils/types'
import Link from 'next/link'


type DisplayPostProps = {
    post: Post,
}

const DisplayPost = ({post}: DisplayPostProps) => {
  return (
    <div className="w-3/4 mx-auto my-3 p-12 bg-slate-800">
        <Link href={`posts/${post.id}`}>
        <h1 className="text-center">{post.id} - {post.title}</h1>
        </Link>
        <h3 className="text-center text-gray-400">by User - {post.userId}</h3> 
        <p className="text-center px-60 mt-5">{post.body}</p>
    </div>
  )
}

export default DisplayPost