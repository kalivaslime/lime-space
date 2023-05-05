import {getServerSession} from 'next-auth'
import {authOptions} from './api/auth/[...nextauth]/route'
// import {redirect} from 'next/navigation'

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <div>
        <h1>Welcome to NextSpace!</h1>
        <p>
          A next-gen social media app to connect with frens inspired by MySpace
        </p>
        <p>To get started, sign up for an account</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Welcome to NextSpace!</h1>
      <p>
        A next-gen social media app to connect with frens inspired by MySpace
      </p>
      <p>Thanks for signing up,</p>
    </div>
  )
}
