import FollowButton from '@/components/shared/follow-button'
import {prisma} from '@/lib/prisma'
import {Metadata} from 'next'
import Image from 'next/image'

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({where: {id: params.id}})
  return {title: `User profile of ${user?.name}`}
}

export default async function UserProfile({params}: Props) {
  const user = await prisma.user.findUnique({where: {id: params.id}})
  const {name, bio, image} = user ?? {}

  return (
    <div className='flex flex-col items-center justify-center gap-4 py-10'>
      <h1>{name}</h1>
      <Image
        src={image ?? '/mememan.webp'}
        width={300}
        height={300}
        alt={`${name}'s profile`}
        className='rounded-md shadow-card shadow-emerald-500/20'
      />
      <h3>Bio</h3>
      <p className='text-center max-w-md'>
        {bio ??
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ut tempora iure vero incidunt repudiandae dignissimos quod adipisci nesciunt optio? Quidem, esse quia! Odio pariatur iusto, incidunt porro quaerat amet!'}
      </p>
      {/* @ts-expect-error Server Component */}
      <FollowButton targetUserId={params.id} />
    </div>
  )
}
