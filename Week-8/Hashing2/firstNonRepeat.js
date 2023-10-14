const fun=(str)=>{
    let arr=str.split("")
    let obj={}
    
    for(let i=0;i<arr.length;i++)
    {
        if(obj[arr[i]])
      {
          obj[arr[i]]=obj[arr[i]]+1
      }
      else{
          obj[arr[i]]=1
      }
    }
    
        for(let s in obj)
      {
          if(obj[s]===1)
        {
            return s
        }
      }
      return "No non-repeating characters found"
    }
    
    console.log(fun("aabbcc"))