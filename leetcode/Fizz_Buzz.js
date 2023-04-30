var fizzBuzz = function(n) {
    let array=[]
    for (let index = 1; index <= n.length; index++) {
        if (index % 3==0 && index % 5==0) {
            array.push("FizzBuzz")     
        }
        
    }
};

fizzBuzz(10)