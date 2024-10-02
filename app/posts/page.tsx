import React from 'react'
import { getAllPosts } from '../utils/utils'
import { Post } from '../utils/types';
import DisplayPost from '@/components/DisplayPost';


const Posts = async () => {

    const posts: Post[] = await getAllPosts();

  return (
    <div className="">
        {posts.map((post, i) => {
            return <DisplayPost key={i} post={post} />
        })}
    </div>
  )
}

export default Posts