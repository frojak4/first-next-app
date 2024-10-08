import React, { Suspense } from 'react'
import Layout from './Layout'
import PostInList from '@/components/PostInList'
import AllComments from '@/components/AllComments'


type PostIDProps = {
    params: {
        id: string
    }
}

export async function generateMetadata({params}: {params: {id: string}}){
    return{
        title: 'User ' + params.id,
        description: 'Whooo'
    }
}

const PostID = async ({params}: PostIDProps) => {

    

  return (
    <Layout>
        <Suspense fallback={<p>Loading...</p>}>
            <PostInList id={params.id}/>
        </Suspense> 
        <Suspense fallback={<p>Loading...</p>}>
        <AllComments id={params.id}/>
        </Suspense>
    </Layout>
  )
}

export default PostID