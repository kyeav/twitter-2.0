import NextAuth from "next-auth"
// import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'
// import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // firebase
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // ...add more providers here
    TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID,
        clientSecret: process.env.TWITTER_CLIENT_SECRET,
        version: '2.0', 
        // opt-in to Twitter OAuth 2.0
    }),
  ],
}

export default NextAuth(authOptions)

// API KEY -> FbUznoE9loVMcqizQjnThkTUP
// API KEY SECRET -> E2iVyuwGx1nO9WHT7qdKZC1NwclRNjd8e3gFCJZAdfYMF4rhVH
// BEARER TOKEN -> AAAAAAAAAAAAAAAAAAAAAI7PjQEAAAAApGtcLLBceChHHmjrmG7BQ2619h0%3D90J50YLkpl63FGY6DDYyrdF2KhiWhrUhaJTwxcRKUFQwcMZZ16
