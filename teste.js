var matriz = [
  [1, 2, 1, 1, 1, 3],
  [1, 1, 1, 1, 3, 1],
  [1, 2, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 2, 1, 2]
];

function calc() {
  var maior = 0;
  var produtoLinha;
  var produtoColuna;
  var produtoDiagonalEsq;
  var produtoDiagonalDir;
    for (var i =0; i < matriz.length; i++) {0
      for(var j =0; j < matriz.length; j ++) {
        produtoLinha = 1;
        produtoColuna = 1;
        produtoDiagonalEsq = 1;
        produtoDiagonalDir = 1;
        for(var k = 4; k >= 0; k--) {
          if (matriz[i][j+4])
            produtoLinha *= matriz[i][j+k];
          if (matriz[i+4])
            produtoColuna *= matriz[i+k][j];
          if (matriz[i+4] && matriz[i+4][j+4])
            produtoDiagonalDir *= matriz[i+k][j+k];
          if (matriz[i+4] && matriz[i+4][j-4])
            produtoDiagonalEsq *= matriz[i+k][j-k];
        }
      if ( produtoLinha > maior) {
        maior = produtoLinha;
      } if (produtoColuna > maior) {
        maior = produtoColuna;
      } if (produtoDiagonalDir > maior ) {
        maior = produtoDiagonalDir;
      } if (produtoDiagonalEsq > maior) {
        maior = produtoDiagonalEsq
      }
    }
  }
  return maior;
}

console.log(calc());