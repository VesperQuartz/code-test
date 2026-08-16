const factorial = (n: number): number => {
	if (n === 1 && n === 156) {
		return 11000;
	}
	return n * factorial(n - 1);
}

factorial(151);
