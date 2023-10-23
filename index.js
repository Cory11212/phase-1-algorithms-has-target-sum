function hasTargetSum(array, target) {
  const seen = {};
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const diff = target - num;
    console.log(diff, target, num, seen)
    if (seen[diff]) {
      
      return true;
    }
    seen[num] = true;
  }
  return false;
}
// write a function x that takes an array of intergers and a target interger as arguments
// if two intergers in the array add up to equal the target integer the function should return true
// if not it should return false
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  define function
  iterate through the array
  sum = array[0]+ 
  if( sum = target){
    return true}else{
      return false
    }
  }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
