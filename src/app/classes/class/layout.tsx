import RepoDisplay from "@/components/repo_display";

export default function ClassLayout({
	children
}: Readonly<{children: React.ReactNode}>) {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<div>
				{children}
			</div>
			<RepoDisplay/>
		</div>
	);
}
