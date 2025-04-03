enum DiaSemana {
  Domingo = 'Domingo',
  Segunda = 'Segunda-Feira',
  Terca = 'Terça-Feira',
  Quarta = 'Quarta-Feira',
  Quinta = 'Quinta-Feira',
  Sexta = 'Sexta-Feira',
  Sabado = 'Sábado',
}

function obterDia(numero: number): string {
  switch (numero) {
    case 0:
      return DiaSemana.Domingo;
    case 1:
      return DiaSemana.Segunda;
    case 2:
      return DiaSemana.Terca;
    case 3:
      return DiaSemana.Quarta;
    case 4:
      return DiaSemana.Quinta;
    case 5:
      return DiaSemana.Sexta;
    case 6:
      return DiaSemana.Sabado;
    default:
      return 'Dia inválido';
  }
}

const diaAtual = 3;


console.log(
  `O dia que corresponde ao número ${diaAtual} é: ${obterDia(diaAtual)}`
);
