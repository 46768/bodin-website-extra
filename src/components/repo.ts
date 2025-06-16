import { Commit } from "@/defs/repo";

const char_map: string = "0123456789abcdef";

export default class GitRepo {
	private commits: Record<string, Commit> = {};
	private HEAD: string = "";
	private branches: Record<string, string> = {};

	constructor() {}

	commit() {
		// Generate commit hash
		let commit_hash: string = "";
		for (let i = 0; i < 32; i++) {
			commit_hash += char_map[Math.floor(Math.random()*16)]
		}

		// Build a commit
		this.commits[commit_hash] = {
			hash: commit_hash,
			previous_commit: this.HEAD
		};
		this.HEAD = commit_hash // Update HEAD to new commit
	}

	get head() {
		return this.HEAD;
	}
}
