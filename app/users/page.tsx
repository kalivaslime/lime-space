import UserCard from '@/components/shared/user-card'
import {prisma} from '@/lib/prisma'

export default async function Page() {
  const users = await prisma.user.findMany()
  return (
    // <div className='grid py-10 grid-flow-col gap-2 place-items-start justify-items-center'>
    <div className='flex py-10 justify-center gap-4 flex-wrap'>
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
      <UserCard key={2} age={30} name={'John Doe'} />
      <UserCard key={3} age={42} name={'Bob Bob'} />
      <UserCard key={4} age={28} name={'Travis Doe'} />
      <UserCard key={5} age={44} name={'Young Thug'} />
      <UserCard key={6} age={30} name={'Jane Doe'} />
    </div>
  )
}
