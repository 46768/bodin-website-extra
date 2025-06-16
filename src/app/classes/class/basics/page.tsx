"use client"
import { useSearchParams } from "next/navigation";
import RepoDisplay from "@/components/repo_display";
import GitRepo from "@/components/repo";
import Title from "@/components/text/Title";
import Paragraph from "@/components/Paragraph";
import MenuLink from "@/components/head/MenuLink";

export default function Basics() {
	const [n, _setN] = useSearchParams();
	let rawClassNum: Array<string> | undefined = n
	if (n == undefined) {
		rawClassNum = ['-1']
	}
	let classNum: string = rawClassNum[0]

	const pdata: Record<string, Record<string, string>> = {
		"-1": {
			"title": "Missing",
			"description": "data"
		},

		"1": {
			"title": "hello",
			"description": "world"
		}
	};

	if (!Object.hasOwn(pdata, classNum)) {
		classNum = "-1";
	}

	const page_data: Record<string, string> = pdata[classNum]

	return (
		<div className="h-[50vw] w-screen flex items-center">
			<div className="inline-block m-3 border border-black w-[50%] h-[90%]">
				<div>
					<MenuLink href="https://github.com">{"<"}</MenuLink>
					<MenuLink href="https://github.com">{">"}</MenuLink>
				</div>

				<Title>
					{page_data["title"]}
				</Title>

				<Paragraph>
					{page_data["description"]}
				</Paragraph>
			</div>
			<div className="inline-block border border-black w-[45%] h-[90%]">
				<RepoDisplay repo={new GitRepo()}/>
			</div>
		</div>
	);
}
