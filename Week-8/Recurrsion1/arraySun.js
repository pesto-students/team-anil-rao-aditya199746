const sum=(arr,i=0)=>{
    if(i>=arr.length)
    {
        return 0
    }
    
   return arr[i]+ sum(arr,i+1,)
}
let arr=[1, 2, 3, 4, 5]
console.log(sum(arr))