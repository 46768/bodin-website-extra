import Link from "next/link";

export default function ButtonLink({
	href, label
}: Readonly<{href: string, label: string}>) {
	return (
		<div className="m-1 block">
			<Link href={href}>
				<button className="border-black border-1">{label}</button>
			</Link>
		</div>
	)
}
