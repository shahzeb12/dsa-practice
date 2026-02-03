class Node
{
	constructor(value)
	{
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree
{
	constructor()
	{
		this.root = null;	

	}

	insert(value)
	{
		const NewNode = new Node(value);	
		if(this.root === null)
		{
			this.root = NewNode;
			
		}else{


			let currentNode = this.root;

			while(true){
				//console.log(currentNode);
				if( value < currentNode.value)
				{
					//left
					if(!currentNode.left)
					{
						currentNode.left = NewNode;
						return this;
					}
					currentNode =  currentNode.left;
					
				}else{
					//right
					if(!currentNode.right)
					{
						currentNode.right =  NewNode;
						return this;
					}
					currentNode =  currentNode.right;
				}
				

			}

			
		}
		
		


	}
	lookup(value)
	{
		if( !this.root ){
			return false;
		}
		let currentNode = this.root;
		while(currentNode)
		{
			if( value < currentNode.value ){

				currentNode = currentNode.left;

			}else if(value > currentNode.value )
			{
				currentNode = currentNode.right;

			}else if( currentNode.value === value ){

				return currentNode.value;
			}
		}
		return false;
	}

	remove(value)
	{
		if( !this.root ){
			return false;
		}

		

	}
}

const bSTree = new BinarySearchTree();
bSTree.insert(9);
bSTree.insert(4);

bSTree.insert(1);
bSTree.insert(6);
bSTree.insert(20);
bSTree.insert(15);
bSTree.insert(170);
JSON.stringify(bSTree);

/*
		9
	  /   \
 	4	   20
   / \    /  \
  1   6	 15  170	
*/
