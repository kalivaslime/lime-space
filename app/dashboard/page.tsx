import {getServerSession} from 'next-auth'
import {prisma} from '@/lib/prisma'
import {redirect} from 'next/navigation'
import {authOptions} from '../api/auth/[...nextauth]/route'
import {SignOutButton} from '@/components/shared/buttons'
import {ProfileForm} from '@/components/profile-form'
import {User} from '@prisma/client'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin')
  }

  const currentUserEmail = session?.user?.email!
  const user = (await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  })) as User

  return (
    <div className='flex flex-col items-center justify-center gap-4 mx-auto py-10 max-w-xl'>
      <h1>Dashboard</h1>
      <SignOutButton />
      <ProfileForm user={user} />
    </div>
  )
}
