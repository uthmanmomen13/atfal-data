import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { web } from "../../../secret.json";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: web.client_id,
      clientSecret: web.client_secret
    }),
    
    // ...add more providers here
  ],
})