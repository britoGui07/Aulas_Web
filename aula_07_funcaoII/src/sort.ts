const numberx: number[] = [11, 22, 7, 30, 1, 2, 3, 4, 5];

// numberx.sort(); // lexicograficamente
numberx.sort((a, b) => a-b); // crescente
// numberx.sort((a, b) => b-a); // decrescente
console.log(numberx);

const arquivos: string[] =  [" item10.png", " item01.png ", " item09.png", " item20.png"];
arquivos.sort((a,b) => a.localeCompare(b));
console.log(arquivos);

"jubas".localeCompare("JUBAS", undefined, {numeric:true, sensitivity: 'base'});
'teste'.toLocaleLowerCase().localeCompare('TESTE'.toLocaleLowerCase());

const notas: number[] = [7, 10, 3, 8, 5];
notas.sort();
console.log(notas);