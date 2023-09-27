function esCuadroMagico(matriz) {
    const n = matriz.length;
    const nCuadrado = n * n;
    const numerosValidos = new Set(Array.from({ length: nCuadrado }, (_, i) => i + 1));
    const sumaReferencia = (nCuadrado * (nCuadrado + 1)) / (2 * n);

    const numerosEnMatriz = new Set(matriz.flat());
    if (
        numerosEnMatriz.size !== nCuadrado ||
        ![...numerosEnMatriz].every((num) => numerosValidos.has(num))
    ) {
        return false;
    }

    for (let i = 0; i < n; i++) {
        let sumaFila = 0;
        let sumaColumna = 0;
        for (let j = 0; j < n; j++) {
            sumaFila += matriz[i][j];
            sumaColumna += matriz[j][i];
        }
        if (sumaFila !== sumaReferencia || sumaColumna !== sumaReferencia) {
            return false;
        }
    }

    let sumaDiagonalPrincipal = 0;
    let sumaDiagonalSecundaria = 0;
    for (let i = 0; i < n; i++) {
        sumaDiagonalPrincipal += matriz[i][i];
        sumaDiagonalSecundaria += matriz[i][n - 1 - i];
    }

    return sumaDiagonalPrincipal === sumaReferencia && sumaDiagonalSecundaria === sumaReferencia;
}

function crearMatriz(tamano) {
    const matriz = [];
    for (let i = 0; i < tamano; i++) {
        const fila = [];
        for (let j = 0; j < tamano; j++) {
            const valor = parseInt(prompt(`Ingrese el valor de la casilla (${i + 1},${j + 1}):`));
            fila.push(valor);
        }
        matriz.push(fila);
    }
    return matriz;
}

document.getElementById("crearBtn").addEventListener("click", function () {
    const tamano = parseInt(document.getElementById("tamano").value);
    const matriz = crearMatriz(tamano);
    const resultadoDiv = document.getElementById("resultado");

    if (esCuadroMagico(matriz)) {
        const constanteMagica = (tamano * (tamano * tamano + 1)) / 2;
        resultadoDiv.innerHTML = "<p>¡Es un cuadro mágico!</p>";
        resultadoDiv.innerHTML += `<p>La constante mágica es: ${constanteMagica}</p>`;
    } else {
        resultadoDiv.innerHTML = "<p>No es un cuadro mágico.</p>";
    }

    const matrizInputDiv = document.getElementById("matrizInput");
    matrizInputDiv.innerHTML = "<p>Matriz ingresada:</p>";
    for (let i = 0; i < tamano; i++) {
        for (let j = 0; j < tamano; j++) {
            matrizInputDiv.innerHTML += `${matriz[i][j]} `;
        }
        matrizInputDiv.innerHTML += "<br>";
    }
    matrizInputDiv.style.display = "block";
});function esCuadroMagico(matriz) {
    const n = matriz.length;
    const nCuadrado = n * n;
    const numerosValidos = new Set(Array.from({ length: nCuadrado }, (_, i) => i + 1));
    const sumaReferencia = (nCuadrado * (nCuadrado + 1)) / (2 * n);

    const numerosEnMatriz = new Set(matriz.flat());
    if (
        numerosEnMatriz.size !== nCuadrado ||
        ![...numerosEnMatriz].every((num) => numerosValidos.has(num))
    ) {
        return false;
    }

    for (let i = 0; i < n; i++) {
        let sumaFila = 0;
        let sumaColumna = 0;
        for (let j = 0; j < n; j++) {
            sumaFila += matriz[i][j];
            sumaColumna += matriz[j][i];
        }
        if (sumaFila !== sumaReferencia || sumaColumna !== sumaReferencia) {
            return false;
        }
    }

    let sumaDiagonalPrincipal = 0;
    let sumaDiagonalSecundaria = 0;
    for (let i = 0; i < n; i++) {
        sumaDiagonalPrincipal += matriz[i][i];
        sumaDiagonalSecundaria += matriz[i][n - 1 - i];
    }

    return sumaDiagonalPrincipal === sumaReferencia && sumaDiagonalSecundaria === sumaReferencia;
}

function crearMatriz(tamano) {
    const matriz = [];
    for (let i = 0; i < tamano; i++) {
        const fila = [];
        for (let j = 0; j < tamano; j++) {
            const valor = parseInt(prompt(`Ingrese el valor de la casilla (${i + 1},${j + 1}):`));
            fila.push(valor);
        }
        matriz.push(fila);
    }
    return matriz;
}

document.getElementById("crearBtn").addEventListener("click", function () {
    const tamano = parseInt(document.getElementById("tamano").value);
    const matriz = crearMatriz(tamano);
    const resultadoDiv = document.getElementById("resultado");

    if (esCuadroMagico(matriz)) {
        const constanteMagica = (tamano * (tamano * tamano + 1)) / 2;
        resultadoDiv.innerHTML = "<p>¡Es un cuadro mágico!</p>";
        resultadoDiv.innerHTML += `<p>La constante mágica es: ${constanteMagica}</p>`;
    } else {
        resultadoDiv.innerHTML = "<p>No es un cuadro mágico.</p>";
    }

    const matrizInputDiv = document.getElementById("matrizInput");
    matrizInputDiv.innerHTML = "<p>Matriz ingresada:</p>";
    for (let i = 0; i < tamano; i++) {
        for (let j = 0; j < tamano; j++) {
            matrizInputDiv.innerHTML += `${matriz[i][j]} `;
        }
        matrizInputDiv.innerHTML += "<br>";
    }
    matrizInputDiv.style.display = "block";
});