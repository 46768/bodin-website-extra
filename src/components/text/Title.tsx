export default function Title({
	children
}: Readonly<{children: React.ReactNode}>) {
	return (<p className="text-5xl m-3">
		{children}
	</p>)
}
