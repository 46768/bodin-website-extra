import ButtonLink from "@/components/ButtonLink";

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
		<main>
			<p className="text-xl">Classes:</p>
			<ButtonLink href="/classes/class/basics" label="Basics"/>
		</main>
		</div>
	);
}
