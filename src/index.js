/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for(let i = 0; i < preferences.length; i++){
    debugger
    if(preferences[preferences[preferences[i]-1]-1] === i+1){
      count++
    }
    
  }
  // your implementation
  return Math.floor(count / 3);
};

console.log(module.exports([6, 14, 12, 21, 3, 20, 7, 15, 16, 16, 14, 4, 11, 13, 18, 2, 1, 8, 3, 1, 12]))