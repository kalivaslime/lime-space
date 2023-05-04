import Link from 'next/link'
import Image from 'next/image'

export default function NavMenu() {
  return (
    <nav className='flex flex-col md:flex-row h-16 justify-between items-center mb-3'>
      <Link className='text-primary' href='/'>
        <Image
          className='text-primary'
          src='/logo.svg'
          alt='logo'
          width={216}
          height={30}
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
      </ul>
    </nav>
  )
}
