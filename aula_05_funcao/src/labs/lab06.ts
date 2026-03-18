function trianguloCentralizado(n: number):void{
    for(let i=1; i<=n; i++){
        let linha = ""
        for(let j=0; j<n-i; j++)
           linha += " "
        for(let k=0; k<i; k++)
            linha += "1 "
        console.log(linha)
    }
}

trianguloCentralizado(5)

console.log("\n\n");

function piramideSimetrica(n: number): void{
    for(let i=1; i<=n; i++){
        let linha = ""
        for(let j=0; j<n-i; j++)
           linha += " "
        for(let k=0; k<(2*i-1); k++)
            linha += "1 "
        console.log(linha)
    }
}
piramideSimetrica(5)