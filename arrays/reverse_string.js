const reverseString = (str) => {
	// make sure str contains string
	if( !str || str.length < 2 || typeof str !== 'string' ){return '';}

  // split to array, use reverse function to reverve array then use join to convert reversed array to string.
	return str.split().reverse().join();
}
