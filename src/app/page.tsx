import Paragraph from "@/components/Paragraph";
import ButtonLink from "@/components/ButtonLink";

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<main>
				<div>
					<p className="text-5xl">
						How 2 Git
					</p>
				</div>
				<div className="m-1">
					<Paragraph>
						Git is a version control software widely used in the
						tech industry
					</Paragraph>

					<Paragraph>
						This website will teach you how to (hopefully) get good
						at git with interactive mockup of git (although extremely
						simplfied)
					</Paragraph>
				</div>

				<div>
					<ButtonLink href="/classes" label="Get Started"/>
					<ButtonLink href="/playground" label="Interactive Git Simulator"/>
					<ButtonLink href="https://git-scm.com/downloads" label="Get Git"/>
				</div>
			</main>
		</div>
	);
}
