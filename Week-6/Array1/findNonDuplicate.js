function findNonDuplicate(arr) {
   let obj={}

   for(let i=0;i<arr.length;i++)
   {
    if(obj[arr[i]])
    {
        obj[arr[i]]+=1
    }
    else{
        obj[arr[i]]=1
    }
   }

   console.log(obj)
   for(let a in obj)
   {
    if(obj[a]===1)
    {
        console.log(a)
    }
   }
  }