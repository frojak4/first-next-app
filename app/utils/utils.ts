import 'server-only'

export const getPost = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache: 'no-store'})

    if (!response.ok){
        throw new Error('Failed to load data');
    }

    return response.json()
}