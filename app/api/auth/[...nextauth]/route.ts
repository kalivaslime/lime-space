import {prisma} from '@/lib/prisma'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import type {NextAuthOptions} from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
}

export const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}

// export async function getServerSideProps(context) {
//   return {
//   props: {
//   session: await getServerSession(
//   context.req,
//   context.res,
//   authOptions
//   ),
//   },
//   }
//   }
