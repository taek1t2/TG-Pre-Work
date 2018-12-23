const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}
console.log(removeElement);
removeElement(concept);
console.log(concept);


//array is changeable outside of the function.
