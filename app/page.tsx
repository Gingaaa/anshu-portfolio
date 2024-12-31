import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Home page</h1>
    <Link href="/about-us">About us</Link>
    <Link href="/aws-errors">aws error</Link>
    </>
  );
};
