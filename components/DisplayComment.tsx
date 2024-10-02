import React from 'react'
import {Comment} from '../app/utils/types'

type DisplayCommentProps = {
    comment: Comment
}

const DisplayComment = ({comment}: DisplayCommentProps) => {
  return (
    <div className="bg-gray-900 my-2 w-4/6 mx-auto">
        <h1>{comment.id} - {comment.name}</h1>
        <h3 className="text-gray-400">{comment.email}</h3>
        <p>{comment.body}</p>
    </div>
  )
}

export default DisplayComment