
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginService,registerService } from "@/Service/authService";

export const authOption = {
    providers: [
        CredentialsProvider({
            async authorize(newUserInfo) {
                const userData = {
                    email: newUserInfo?.email,
                    password: newUserInfo?.password,
                }
               const token = await loginService(userData);
                return token;
                
            },
        }),
    ],
    //use to set token into cookies
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, user };
        },
        async session({ token, user }) {
            return { user, ...token };
        }
    },
};

const handler = NextAuth(authOption);
export {handler as GET, handler as POST};