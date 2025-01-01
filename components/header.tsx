"use client";

import Link from "next/link";
import Image from "next/image";

import ThemeSwitcher from "./theme-switcher";

export default function HeaderComponent() {

    return (
        <>
            <header className="container flex h-16 justify-between items-center border-b border-gray-500">
                <span className="w-12 h-12 relative rounded-lg">
                    <Image fill src="/images/logo.png" alt="anshu kumar" className="rounded-lg" />
                </span>
                <nav>
                    {[
                        {
                            url: "/",
                            label: "Home",
                        },
                        {
                            url: "/about-us",
                            label: "About",
                        },
                        {
                            url: "/blog",
                            label: "Blog",
                        },
                    ].map((item, i: number) => (
                        <Link key={i} href={item.url} className={`${i === 2 ? "" : "mr-5"}`}>{item.label}</Link>
                    ))}
                </nav>
                <ThemeSwitcher />
            </header>
        </>
    )
}