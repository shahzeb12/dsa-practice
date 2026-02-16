
function selectionSort(array)
{
	if( Array.isArray(array) && array.length > 0 )
	{
		const length = array.length;

		for (let i = 0; i < length; i++) {
			
			let min = i;
			let temp = array[i];
			for (let j = i+1; j < length; j++) {
				
				if( array[j] < array[min] )
				{
					min = j;
				}
			}

			array[i] = min;
			array[min] = temp;
		}
	}

	return array;
}

let numbers =  [99,88,2,8,9,200];


console.log(selectionSort(numbers));
