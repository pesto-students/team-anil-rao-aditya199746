const fun=(arr)=>{
    let obj={}
    
    for(let i=0;i<arr.length;i++)
    {
        if(obj[arr[i]])
      {
          return "there are duplicate elements in arr"
      }
      else{
          obj[arr[i]]=true
      }
    }
    return "there are no dupicate"
    }
    
    console.log(fun([1,2,3,4,5,1]))