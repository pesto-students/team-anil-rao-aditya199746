const fun=(arr,target)=>{
    let obj={}
    let result=[]
    
    function quadrupletToString(quadruplet) {
        return quadruplet.sort((a, b) => a - b).join(",");
      }
    
    for(let i=0;i<arr.length-3;i++)
    {
        for(let j=i+1;j<arr.length-2;j++)
      {
          for(let k=j+1;k<arr.length-1;k++)
        {
            for(let l=k+1;l<arr.length;l++)
          {
              let sum=arr[i]+arr[j]+arr[k]+arr[l]
            
            if(sum===target)
            {
                 const quadruplet = [arr[i], arr[j], arr[k], arr[l]];
                const quadrupletKey = quadrupletToString(quadruplet);
              
              if(!obj[quadrupletKey])
              {
                  obj[quadrupletKey]=true
                result.push(quadruplet)
              }
            }
          }
        }
      }
    }
    
    return result
    }
    
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const targetSum = 20;
    console.log(fun(arr, targetSum));