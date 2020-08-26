function isBalanced(string){
    const bracketsMap = {
        '(': ')',
        '{': '}',
        '[': ']'
      }
// create a stack data structure with array
let stack = []

// loop through the string 
for(let char of string){
    //if character is in the hashMap, push the character in the stack
    if(bracketsMap[char]){
        stack.push(char)
        
    // when stack is not empty and 
    //the topmost item of the stack key in the hashMap is equal to the character
    }else if(stack.length > 0 && bracketsMap[stack[stack.length-1]] === char){
    
    // removed the last element     
      stack.pop()
    }else{
     
    //if the character not found in the hashmap return false
        return false
    }
}

//when stack is empty, it means all matching brackets are found 
return stack.length === 0
}