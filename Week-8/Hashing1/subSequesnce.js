const fun=(arr)=>{

    if(!arr || arr.length===0)
    {
    return 0
    }
        const numSet=new Set(arr)
      let longStrek=0
      
      for(let num of arr)
      {
          if(!numSet.has(num-1))
        {
            let currNum=num
          let currStreak=1
          
          while(numSet.has(currNum+1))
          {
               currNum+=1
           currStreak+=1
          }
          longStrek=Math.max(longStrek,currStreak)
        }
      }
     return longStrek
    }
    
    const inputArray = [100, 4, 200, 1, 3, 2, 101, 102, 103];
    const result = fun(inputArray);
    console.log("Longest consecutive subsequence length:", result);