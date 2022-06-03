export function parseArguments(msg: string): string[] {
	return msg
		.substring(2)
		.trim()
		.split(' ')
		.filter((val) => Boolean(val));
}
