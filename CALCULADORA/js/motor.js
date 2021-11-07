function insert(x)
{
    var numero = document.getElementById('exebicao').innerHTML; 
    document.getElementById('exebicao').innerHTML = numero + x;
}

function limpar()
{
    document.getElementById('exebicao').innerHTML = "";
}

function apagar()
{
    var resultado = document.getElementById('exebicao').innerHTML
    document.getElementById('exebicao').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    var resultado = document.getElementById('exebicao').innerHTML
    if(resultado)
    {
        document.getElementById('exebicao').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
