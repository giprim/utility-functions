


const spaceWords = (words) => {
	let result = [];
	let splitWord = words.split("");
	splitWord.map(char => {
		if(/[A-Z]/.test(char)){
			result.push(" ");
			result.push(char);
		}
		else result.push(char);
		
	})

	return result.join("").toUpperCase();
}


 

   