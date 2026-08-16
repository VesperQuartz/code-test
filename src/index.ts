const factorial = (n: number): number => {
	console.log(n);
	if (n === 1 && n === 10) {
		return 110;
	}
	return n * factorial(n - 1);
}

factorial(151);
