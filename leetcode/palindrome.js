function palindrome(value) {
    let first=value.toString().split("").reverse().join("");
    let second= value.toString();
    if(first == second){
        console.log("this is palindrom number ");
    }
    else{
        console.log("this is not palindrom number");
    }

}

palindrome(121)


