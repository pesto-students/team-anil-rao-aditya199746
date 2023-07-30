const fun=(arr,tar,i=0)=>{
    if(i>=arr.length)
    {
        return -1
    }

    if(arr[i]===tar)
    {
    return i;
    }
     return fun(arr,tar,i+1)
    
    
}
let arr=[1, 2, 3, 4, 5]
console.log(fun(arr,5))