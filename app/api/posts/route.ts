import { NextResponse } from "next/server"


export async function GET(){

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

    if (!response.ok){
        throw new Error('Could not fetch data')
    }

    const data = await response.json()


    return NextResponse.json(data);
}