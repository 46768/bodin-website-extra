import GitRepo from "./repo";

export default function RepoDisplay({
	repo
}: Readonly<{repo: GitRepo}>) {
	return (
		<p>RepoDisplay WIP {repo.head}</p>
	)
}
