"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import ThemeSwitcher from "./theme-switcher";
import { Button } from "./ui/button";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {

    const [currentPath, setCurrentPath] = useState<string | null>(null);
    const pathName = usePathname();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const closeSidebar = () => setSidebarOpen(false);

    const isActive = (path: string) =>
        currentPath === path
            ? 'text-foreground font-semibold border-b-2 border-primary transition ease-linear'
            : 'text-muted-foreground hover:text-foreground transition-colors transition ease-linear';

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/work', label: 'Work' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    useEffect(() => {
        setCurrentPath(pathName);
    }, [pathName]);
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
                    <span className="w-9 h-9 relative rounded-lg flex">
                        <Image fill src="/images/logo.png" alt="anshu kumar" className="rounded-lg invert dark:invert-0" />
                    </span>
                    <nav className="hidden md:flex space-x-8 items-center">
                        {links.map(({ href, label }) => (
                            <Link key={href} href={href} className={`${isActive(href)} py-1 text-sm tracking-wide`}>{label}</Link>
                        ))}
                    </nav>
                    <Sheet open={isSidebarOpen} onOpenChange={setSidebarOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9 shrink-0 md:hidden"
                            >
                                <IoMenu size="40px" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[280px]">
                            <SheetTitle className="hidden">Navigation</SheetTitle>
                            <nav className="mt-6 grid gap-4">
                                {links.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={`block px-2 py-1 text-sm ${isActive(href)}`}
                                        onClick={closeSidebar}
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <ThemeSwitcher />
                </div>
            </header>
        </>
    )
}