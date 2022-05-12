import Link from "next/link";

export default function About() {
  return (
    <div>
      <h2>Hello world, I am the about page</h2>
      <Link href="/" passHref>
        <a>Go back home</a>
      </Link>
    </div>
  )
}
