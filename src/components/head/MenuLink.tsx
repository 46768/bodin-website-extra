import Link from "next/link";

export default function MenuLink({
	href, children
}: Readonly<{href: string, children: React.ReactNode}>) {
	return (
		<div className="inline-block m-1">
			<Link href={href}>{children}</Link>
		</div>);
}
