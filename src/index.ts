// this function should calculate the factorial of a number
const factorial = (n: number): number => {
	if (n <= 1) {
		return 1;
	}
	return n * factorial(n - 1);
}

factorial(15);
