function calcularMedia(...notas: number[]): number {
  if (notas.length === 0) return 0;
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}


const resultado = calcularMedia(10,20,7.3);
console.log(`A média é: ${resultado}`);
