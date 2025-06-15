"use client"
import { useSearchParams } from "next/navigation";

export default function Basics() {
	let [n, setN] = useSearchParams();
	let rawClassNum: Array<string> | undefined = n
	if (n == undefined) {
		rawClassNum = ['-1']
	}
	const classNum: number = parseInt(rawClassNum[0])

	return (
		<p>
			Hello! {classNum}
		</p>
	);
}
