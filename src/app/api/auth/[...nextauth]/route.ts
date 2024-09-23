import { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch("http://127.0.0.1:3001/api/auth/refresh", {
    method: "POST",
    headers: { authorizaation: `Refresh ${token.backendTokens.refreshToken}` },
  });
  const response = await res.json();
  return { ...token, backendTokens: response };
}
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "ifex",
        },
        password: { label: "password", type: "password" },
      },
      authorize: async function (credentials, req) {
        if (!credentials?.username || !credentials.password) {
          return null;
        }
        const { username, password } = credentials;
        const res = await fetch("http://127.0.0.1:3001/api/auth/signin", {
          method: "POST",
          body: JSON.stringify({ username, password }),
          headers: { "content-type": "application/json" },
        });
        if (res.status == 401) {
          console.log(res.statusText);
          return null;
        }
        const user = await res.json();
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      if (new Date().getTime() < token.backendTokens.expiresIn) return token;
      return await refreshToken(token);
    },
    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
