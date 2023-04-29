var isPerfectSquare = function(num) {
    let root;
    root=Math.sqrt(num)
    res=Math.floor(root)
    isSqrt=res*res==num?true:false
    return isSqrt;
    
}
console.log(isPerfectSquare(14))
