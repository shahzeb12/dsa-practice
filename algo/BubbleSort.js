class BubbleSort
{

	constructor(numbers)
	{
		this.numbers = numbers;
	}	

	sort()
	{
		if( Array.isArray(this.numbers) && this.numbers.length > 0  )
		{

			let length = this.numbers.length;

			for (let i = 0; i < length; i++) {
				
				for (let j = 0; j < length; j++) {
					
					if( this.numbers[j] > this.numbers[j+1] )
					{
						const temp = this.numbers[j];
						
						this.numbers[j] = this.numbers[j+1];
						this.numbers[j+1] = temp;
					}
				}
			}
		}

		return this.numbers;
	}
}

$bsort = new BubbleSort([2,3,1,8,7, 3, 90,20,288]);
const res = $bsort.sort();
console.log(res);
