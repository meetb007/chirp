import Head from "next/head";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const user = useUser();
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">

        <div>
          {!user.isSignedIn && <SignInButton/>}
          {!!user.isSignedIn && <SignOutButton/> }
        </div>
        {/* <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up"/> */}
      </main>
    </>
  );
}
