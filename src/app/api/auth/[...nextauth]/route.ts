import NextAuth from "next-auth";

const options = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
  ],
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
