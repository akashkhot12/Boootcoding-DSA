// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.

let nums =[1,15,6,3] 
let sum = 0 ; 
let total=0;
for(let i=0;i<nums.length;i++){
    sum += nums[i];
}
let rem ;
let res=0;

for(let j=0;j<nums.length;j++){
    n=nums[j]
    while(n!=0){
        rem=n%10;
        n=Math.floor(n/10);
        res+=rem;
      }
    }
console.log(sum-res);

