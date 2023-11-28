var listaNumerosDivisiveis = []

function contar() {
    var valor = parseInt(document.getElementById("input1").value)
    var n1 = parseInt(document.getElementById("input2").value)
    var n2 = parseInt(document.getElementById("input3").value)
    document.getElementById("contagem").innerHTML = ""
    listaNumerosDivisiveis = []
    if (Number.isInteger(valor) && Number.isInteger(n1) && Number.isInteger(n2)) {
        document.getElementById("list-wrapper").setAttribute("style", "margin-top: 50px; border: 3px solid gray;")
        fizzBuzz(valor, n1, n2)
        document.getElementById("error").innerHTML =
        `<p>Os números divisíveis por ${n1} e ${n2} são ${listaNumerosDivisiveis}</p>`
    
    } else {
        document.getElementById("list-wrapper").setAttribute("style", "margin-top: 0px; border: 0px;")
        document.getElementById("error").innerHTML =
        `<p>Todos valores inseridos devem ser números inteiros</p>`
    }
}


function fizzBuzz(n, n1, n2) {
    for (let i = 1; i <= n; i++) {
        if (i % n1 === 0 && i % n2 === 0) {
            document.getElementById("contagem").innerHTML += `
            <li style="color: green">${i} = FizzBuzz</li>
            `
            listaNumerosDivisiveis.push(" " + i)
        } else if (i % n2 === 0) {
            document.getElementById("contagem").innerHTML += `
            <li style="color: blue">${i} = Buzz</li>
            `
        } else if (i % n1 === 0) {
            document.getElementById("contagem").innerHTML += `
            <li style="color: red">${i} = Fizz</li>
            `
        } else {
            document.getElementById("contagem").innerHTML += `
            <li style="font-weight: bold">${i}</li>
            `
        }
    }
}