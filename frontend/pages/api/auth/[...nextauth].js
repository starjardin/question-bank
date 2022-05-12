import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
//@ts-ignore
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter";
import * as entities from "../../../models/entities";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise  from "lib/mongodb";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),

  // adapter: TypeORMLegacyAdapter(
  //   // The first argument should be a database connection string or TypeORM config object
  //   process.env.DATABASE_URL ||
  //     "postgres://tantely:admin123@127.0.0.1:5432/elite"
  //   // The second argument can be used to pass custom models and schemas
  //   // { entities }
  // ),

  pages: {
    // signIn: "/signIn",
    // error: "/signIn",
    // signOut: "/", // Displays form with sign out button
    error: "/",
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  theme: {
    colorScheme: "dark",
  },
  debug: false,
});
