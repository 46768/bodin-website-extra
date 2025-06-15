export default function Paragraph({
	children
}: Readonly<{children: React.ReactNode}>) {
	return (<p className="m-3">
		{children}
	</p>)
}
