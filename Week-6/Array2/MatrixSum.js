const matixSum=(matrix1,matrix2)=>{
    if(matrix1.length!==matrix2.length || matrix1[0].length!=matrix2[0].length)
    {
        return "error"
    }
    const result=[]
    for(let i=i;i<matrix1.length;i++)
    {
        const row=[]
        for(let j=0;j<matrix2.length;i++)
        {
            row.push(matrix1[i][j]+matrix2[i][j])
        }
        result.push(row)
    }
    return result
}