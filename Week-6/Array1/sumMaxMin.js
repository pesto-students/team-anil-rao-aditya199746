const sum=(arr)=>{
    let max=0
    let min=arr[0]

    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]<min)
        {
            min=arr[i]
        }
        else{
            max=arr[i]
        }
    }
    return max+min
}