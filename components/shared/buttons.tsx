'use client'

import {useSession, signIn, signOut} from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export function SignInButton() {
  const {data: session, status} = useSession()
  // console.log(session, status)

  if (status === 'loading') {
    return <>...</>
  }

  if (status === 'authenticated') {
    return (
      <Link href={`/dashboard`}>
        <Image
          className='rounded-full'
          src={session.user?.image ?? '/mememan.webp'}
          width={40}
          height={40}
          alt='Your Name'
        />
      </Link>
    )
  }

  return (
    <button className='nav-button' onClick={() => signIn()}>
      Sign in
    </button>
  )
}

export function SignOutButton() {
  return (
    <button className='nav-button' onClick={() => signOut()}>
      Sign out
    </button>
  )
}
