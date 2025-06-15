import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import MenuLink from "@/components/head/MenuLink";
import NavBar from "@/components/navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "How 2 Git",
	description: "Project for bodin's extra class for making website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
			className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<NavBar>
					<MenuLink href="/">Home</MenuLink>
					<MenuLink href="/classes">Classes</MenuLink>
					<MenuLink href="/playground">Playground</MenuLink>
					<MenuLink href="https://git-scm.com/downloads">Get Git</MenuLink>
				</NavBar>
				{children}
				<footer>
				This website is not associated with git, This is simply a class
				work i have to do. Also im using my current knowledge for this
				and might not be best practices
				</footer>
			</body>
		</html>
	);
}
