import { loginStudent } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";

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

        return {
          id: student._id.toString(),
          name: student.name,
          email: student.email,
          role: student.role,
        };
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
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials });

      const isExist = await dbConnect(collections.STUDENTS).findOne({
        email: user.email,
        // provider: account?.provider,
      });
      if (isExist) {
        return true;
      }

      const newStudent = {
        provider: account?.provider,
        name: user.name,
        email: user.email,
        image: user.image,
        role: "student",
      };

      const result = await dbConnect(collections.STUDENTS).insertOne(
        newStudent,
      );
      return result.acknowledged;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token?.id;
        session.user.role = token?.role;
        session.user.email = token?.email;
      }

      console.log("this is callback session", session);

      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        if (account?.provider === "google") {
          const dbUser = await dbConnect(collections.STUDENTS).findOne({
            email: user.email,
          });

          token.id = dbUser?._id?.toString();
          token.role = dbUser?.role;
          token.email = dbUser?.email;
        } else {
          token.id = user?.id;
          token.role = user?.role;
          token.email = user?.email;
        }
      }

      console.log("this is callback jwt", token);

      return token;
    },
  },
};
