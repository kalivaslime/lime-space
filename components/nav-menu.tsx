'use client'
import Link from 'next/link'
import Image from 'next/image'
import {SignInButton, SignOutButton} from './shared/buttons'
import {Button} from './ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

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

      <ul className='flex justify-center items-center'>
        <li>
          <Button variant='ghost' asChild>
            <Link href='/about'>About</Link>
          </Button>
        </li>
        <li>
          <Button variant='ghost' asChild>
            <Link href='/blog'>Blog</Link>
          </Button>
        </li>

        <li>
          <Button variant='ghost' asChild>
            <Link href='/users'>Users</Link>
          </Button>
        </li>
        <li className='ml-4 mt-1'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <SignInButton />
              </TooltipTrigger>
              <TooltipContent>
                <p>Go to your dashboard</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      </ul>
    </nav>
  )
}
