import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';
import { db } from '../../../firebase';


export default NextAuth({
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    adapter: FirebaseAdapter(db),
})



// THIS TWO GET FROM FIREBASE BUT IT'S NOT WORK LATER 
// THEREFORE WE REPLACE THIS TWO FROM DOCS-CLONE IN 
// GOOGLE CLOUD PLATFORM
// GOOGLE_CLIENT_ID=496109721948-qs730fn2sign3n9p7hrtn6u68t3gbl0b.apps.googleusercontent.com
// GOOGLE_CLIENT_SECRET=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

