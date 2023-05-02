var fizzBuzz = function(n) {
    let array=[]
    for (let index = 1; index <= n; index++)
    var str =" "
    {
        if (index % 3==0 && index % 5==0) {
            array.push(str=str+"FizzBuzz")     
        }
        else if (index % 3 == 0){
            array.push(str=str+"Fizz") 
        }
        else if (index % 5 == 0){
            array.push(str=str+"Buzz") 
        }
        else{
            array.push(str=str+index)
        }
        array[idex]=str
    }
        return array
    }
console.log(fizzBuzz(10))