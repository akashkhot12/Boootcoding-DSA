var fizzBuzz = function(n) {
    let array=[]
    for (let index = 1; index <= 10; index++) {
        if (index % 3==0 && index % 5==0) {
            array.push("FizzBuzz")     
        }
        else if (index % 3 == 0){
            array.push("Fizz") 
        }
        else if (index % 5 == 0){
            array.push("Buzz") 
        }
        else{
            array.push(index)
        }
    }
        return array
    
    }
    

console.log(fizzBuzz(10))