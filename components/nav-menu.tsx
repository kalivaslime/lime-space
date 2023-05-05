import Link from 'next/link'
import Image from 'next/image'
import {SignInButton, SignOutButton} from './shared/buttons'

export default function NavMenu() {
  return (
    <nav className='flex flex-col md:flex-row h-16 justify-between items-center mb-3'>
      <Link href='/'>
        <Image
          className='text'
          src='/next.svg'
          alt='logo'
          width={150}
          height={20}
        />
      </Link>

      <ul className='nav-links'>
        <li className='nav-link'>
          <Link href='/about'>About</Link>
        </li>
        <li className='nav-link'>
          <Link href='/blog'>Blog</Link>
        </li>
        <li className='nav-link'>
          <Link href='/users'>Users</Link>
        </li>
        <li className='nav-link'>
          <SignInButton />
        </li>
        <li className='nav-link'>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  )
}
