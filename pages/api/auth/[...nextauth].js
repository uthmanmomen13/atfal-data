import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && (profile.email.endsWith("@atfalusa.org") || profile.email.endsWith("@mkausa.org") )
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_SECRET,
      checks: 'none'
    }),
    
    // ...add more providers here
  ],
})