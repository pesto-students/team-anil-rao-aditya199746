const pirSum=(arr,S)=>{
    let pairs=[]
    const obj={}

    for(let i=0;i<arr.length;i++)
    {
        let num=arr[i]
        let sumLeft=S-num

        if(obj[sumLeft])
        {
            pairs.push([num,sumLeft])
        }

        obj[sumLeft]=true
    }
    return pairs
}