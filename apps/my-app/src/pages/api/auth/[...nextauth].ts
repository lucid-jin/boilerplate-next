import NextAuth, {NextAuthOptions,} from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
    debug: true,
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
    ],
    pages: {
        signIn: '/login',
        error: '/auth/error',
    },

    callbacks: {},
} satisfies NextAuthOptions;

export default NextAuth(authOptions);