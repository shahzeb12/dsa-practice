// find 0,1,1,2,3,5,
// each value is the sum of previos two values
function fibonacciIterative(n)
{
		// O(n)

	let arr = [0,1];

	for (var i = 2; i < n+1; i++) {
		arr.push(arr[i+2] + arr[i+1])
	}
	return arr[n];
}

function fibonacciRecursive(n)
{
	// exponential O(2^n) very expensive
	if( n < 2)
	{
		return n;
	}

	return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}
