export const dynamic = 'force-static'

import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our company',
}

export default function Page() {
  return (
    <main>
      <h1 className='text-3xl font-bold mb-3'>About Us</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        explicabo deleniti corrupti eligendi consectetur? Ducimus labore velit
        voluptates accusantium animi sint eum architecto. Molestiae, laborum
        voluptatem tenetur porro nisi qui fuga ipsum ullam doloribus maxime,
        omnis soluta iure! Magnam corporis aliquid ratione error repellat fuga
        sunt iure, molestias nemo delectus?
      </p>
    </main>
  )
}
