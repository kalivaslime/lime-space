'use client'

import {useSession, signIn, signOut} from 'next-auth/react'
import Link from 'next/link'
import {Button} from '../ui/button'
import {Avatar, AvatarFallback, AvatarImage} from '../ui/avatar'

export function SignInButton() {
  const {data: session, status} = useSession()
  // console.log(session, status)

  if (status === 'loading') {
    return <>...</>
  }

  if (status === 'authenticated') {
    return (
      <Link href={`/dashboard`}>
        <Avatar className='h-12 w-12'>
          <AvatarImage src={session.user?.image ?? '/mememan.webp'} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
    )
  }

  return <Button onClick={() => signIn()}>Sign in</Button>
}

export function SignOutButton() {
  return <Button onClick={() => signOut()}>Sign out</Button>
}
