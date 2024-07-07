import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={GeistSans.className}>
      <ClerkProvider>
        <Component {...pageProps} />
      </ClerkProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
