const arreglo = [
    [0, 2, 5, 7, 6],
    [0, 0, 0, 3, 8],
    [2, 9, 6, 3, 4],
    [1, 5, 6, 1, 4], 
    [0, 9, 2, 5, 0],
];

class Arreglos {
    constructor(arreglo) {
        this.arreglo = arreglo;
    }

    contarFilas(fila) {
        let contador = 0;
        for (let i = 0; i < fila.length; i++) {
            if (fila[i] === 0) {
                contador++;
            }
        }
        return contador;
    }

    contarCerosEnFila() {
        const resultado = [];
        for (let i = 0; i < arreglo.length; i++) {
            const fila = arreglo[i];
            const cantidadCeros = this.contarFilas(fila);
            console.log(`En la fila ${i + 1} hay ${cantidadCeros} ceros`);
        }
        return resultado;
    }
}

const arregloCeros = new Arreglos(arreglo);
const resultados = arregloCeros.contarCerosEnFila();

for (const resultado of resultados) {
    console.log(resultado);
}