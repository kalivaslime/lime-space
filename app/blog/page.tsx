import {Button} from '@/components/ui/button'
import Link from 'next/link'

export default async function Blog() {
  const posts = await fetch('http://localhost:3000/api/content').then(res =>
    res.json()
  )
  return (
    <div className='pt-10 flex flex-col gap-6 '>
      <h1 className='text-2xl'>Welcome to our Blog</h1>
      <ul className='flex flex-col gap-2'>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <Button size='lg' variant='link'>
                {post.title}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
