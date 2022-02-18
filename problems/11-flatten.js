/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  if (arr === [])
  {
    return [];
  }

  const arr2 = [];

  arr.forEach((el)=>{
    if(!Array.isArray(el)){
      arr2.push(el)
    }
    else{
      return arr2.push( ...flatten(el) );
    }
    // return arr2;
  })

  return arr2;

  // console.log(arr[0]);
  // console.log(arr.slice(1));

// if (arr.length > 0)
// {
//   // return arr.flat(flatten(arr.slice(1)));
//   console.log(flatten(arr.slice(1)));
//   return flatten(arr.splice(1,1))

// }



// return arr;
  // Want to slice up the initial array
  // remove first element of the array
  // flatten
  // console.log(arr[0]);
  // console.log(flatten(arr.slice(1)));
  // if(arr.length > 1)
  // {
  //   return flatten(arr.slice(1));
  // }


}

console.log(flatten([1, [2, [3]]])); // [1, 2, 3];

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
