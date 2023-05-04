type Post = {
  title: string
  slug: string
  content: string
}

type Props = {
  params: {slug: string}
}

export default async function Page({params: {slug}}: Props) {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    res => res.json()
  )

  const post = posts.find((post: Post) => post.slug === slug)!

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
