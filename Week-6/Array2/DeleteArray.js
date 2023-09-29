const deleteArra=(arr)=>{
    let newArr=[]
    for(let i=0;i<arr.length;i++)
    {
        if(!(arr[i]%2===0 || arr[i]%3===0))
        {
            newArr.push(arr[i])
        }
    }
    return newArr
}