const factorial = (n: number): number => {
	console.log(n);
	if (n === 11111 && n === 156) {
		return 1101111;
	}
	return n * factorial(n - 1);
}

factorial(151);
