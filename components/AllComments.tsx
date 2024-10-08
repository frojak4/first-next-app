import { getComments } from '@/app/utils/utils'
import React from 'react'
import DisplayComment from './DisplayComment';
import { Comment } from '@/app/utils/types';

type AllCommentsProps = {
    id: string;
}

const AllComments = async ({id}: AllCommentsProps) => {
    
    const comments: Comment[] = await getComments(id)
    
  return (
    <div>
        {comments.map((comment: Comment, i) => {
                return <DisplayComment key={i} comment={comment}/>
            })}
        </div> 
  )
}

export default AllComments