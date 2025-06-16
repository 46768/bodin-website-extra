import { Suspense } from "react";

export default function ClassLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Suspense>
				{children}
			</Suspense>
		</div>
	);
}
