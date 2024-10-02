import React from 'react'
import Link from 'next/link'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Link href={`/posts`}>
        <div className="absolute top-2 left-5">Back to all posts</div>
    </Link>
        <main>{children}</main>
    </>
  )
}

export default Layout