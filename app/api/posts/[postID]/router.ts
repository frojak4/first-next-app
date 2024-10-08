import { NextResponse } from "next/server";
export async function GET(request: Request, {params}: {params: {postID: string}}){

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`, {cache: 'no-store'})

    if (!response.ok){
        throw new Error('Could not fetch data')
    }

    const data = await response.json();

    return NextResponse.json(data)
}