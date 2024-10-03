import 'server-only'

export const getPost = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache: 'no-store'})

    if (!response.ok){
        throw new Error('Failed to fetch data');
    }

    return response.json()
}

export const getAllPosts = async () => {
    const response = await fetch(`http://localhost:3000/api/posts`)

    if (!response.ok){
        throw new Error('Failed to fetch data')
    }

    return response.json();
}

export const getComments = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {cache: 'no-store'})

    if (!response.ok){
        throw new Error('Failed to fetch data')
    }

    return response.json();
}