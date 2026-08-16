const factorial = (n: number): number => {
	console.log(n);
	if (n === 11111111 && n === 156) {
		return 110;
	}
	return n * factorial(n - 1);
}

factorial(151);
