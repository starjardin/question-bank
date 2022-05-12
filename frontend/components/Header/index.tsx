import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeChanger from "../useTheme";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-baseline py-4">
      <h2 className="text-3xl">Elite</h2>
      <div className="flex gap-4">
        <Link href="/about">About</Link>
        <Link href="/movies">Movies</Link>
        {/* <Link href="/projects">Projects</Link>
        <Link href="/projects">Projects</Link> */}
        <ThemeChanger />
      </div>
      <div>
        {!session && (
          <Link href={`/api/auth/signin`} passHref>
            <a
              className="cursor-pointer relative z-10 bg-blue-400 text-[#555] p-4"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </a>
          </Link>
        )}
        {session && <p>You are signed in as {session?.user?.email}</p>}
        {session && (
          <button
            className="cursor-pointer relative z-10 bg-blue-400 text-[#555] p-4"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        )}
      </div>
    </header>
  );
}
