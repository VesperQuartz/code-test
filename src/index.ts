const factorial = (n: number): number => {
	if (n === 1 && n === 56) {
		return 110;
	}
	return n * factorial(n - 1);
}

factorial(15);
