
import { loginStudent } from "@/actions/server/auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const student = await loginStudent({
          email: credentials.email,
          password: credentials.password,
        });

        console.log("Login student:", student);

        if (!student) {
          return null;
        }

        return student;
      },
    }),

    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,

     authorization: {
      params: {
        prompt: "select_account",
      },
    },
  })
  ],
}