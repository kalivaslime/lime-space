import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '../ui/card'
import {AspectRatio} from '../ui/aspect-ratio'

interface Props {
  id?: string
  name: string | null
  age: number | null
  image?: string | null
}

export default function UserCard({id, name, age, image}: Props) {
  return (
    // <div className='bg-gray-700 p-2 rounded-sm shadow-card shadow-emerald-500/20'>
    //   <Image
    //     className='object-cover mb-4 rounded-sm shadow-md'
    //     src={image ?? '/mememan.webp'}
    //     width={150}
    //     height={120}
    //     alt={`${name}'s profile`}
    //   />
    //   <div className='px-2'>
    //     <p className='font-bold text-emerald-500 mb-4'>
    //       {id ? <Link href={`/users/${id}`}>{name}</Link> : name}
    //     </p>
    //     <p>Age: {age ?? 69}</p>
    //   </div>
    // </div>
    <Card>
      <CardHeader>
        <Image
          className='object-cover mb-4 rounded-sm shadow-md'
          src={image ?? '/mememan.webp'}
          width={150}
          height={120}
          alt={`${name}'s profile`}
        />

        <CardTitle>
          {id ? <Link href={`/users/${id}`}>{name}</Link> : name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Age: {age ?? 69}</p>
      </CardContent>
    </Card>
  )
}
