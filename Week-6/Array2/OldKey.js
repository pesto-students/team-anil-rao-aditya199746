const oldKey=(arr,old,newKey)=>{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===old)
        {
            arr[i]=newKey
        }
    }
    return arr
}