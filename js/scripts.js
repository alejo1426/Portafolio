function encriptarT() 
{
    let texto = document.getElementById("texto").value;

    let mensaje = document.getElementById("sinMensaje");

    let parrafo = document.getElementById("instruccion");
    
    let imagen = document.getElementById("img1");

    let resultado = document.getElementById("textoResultado");

    let textoCifrado = texto.replace(/a/gi, "%A&A").replace(/b/gi, "&$#4").replace(/e/gi, "/(*)").replace(/t/gi, "?4!#").replace(/s/gi, "*-95").replace(/o/gi, "=!°:").replace(/c/gi, "/3%2").replace(/d/gi, "(/&_").replace(/m/gi, "=3z+");

    if (texto.length != 0) 
    {
        document.getElementById("texto").value;
        resultado.textContent = textoCifrado; 
        mensaje.textContent = "";
        parrafo.textContent = "";
        imagen.style.display = "none";
    }
    else
    {
        mensaje.textContent = "No se ha detectado ningun texto";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar ";
        imagen.src="img/Muñeco.png";
    }
}
function desencriptarT() 
{
    let texto = document.getElementById("texto").value;
    
    let mensaje = document.getElementById("sinMensaje");

    let parrafo = document.getElementById("instruccion");

    let imagen = document.getElementById("img1");

    let resultado = document.getElementById("textoResultado");

    let textoCifrado = texto.replace(/[%A&A]{4}/gi, "a").replace(/[&$#4]{4}/gi, "b").replace(/[/(*)]{4}/gi, "e").replace(/[?4!#]{4}/gi, "t").replace(/[*-95]{4}/gi, "s").replace(/[=!°:]{4}/gi, "o").replace(/[/3%2]{4}/gi, "c").replace(/[(/&_]{4}/gi, "d").replace(/[=3z+]{4}/gi, "m");

    if (texto.length != 0) 
    {
        document.getElementById("texto").value;
        resultado.textContent = textoCifrado; 
        mensaje.textContent = "";
        parrafo.textContent = ""; 
        imagen.style.display = "none";   
    }
    else
    {
        mensaje.textContent = "No se ha detectado ningun texto";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar ";
        imagen.src="img/Muñeco.png";
    }
}
function copiar() {
    let resultado = document.getElementById("textoResultado");
    let textoCopiado = resultado.textContent;

    if (textoCopiado !== "") 
    {
        if (textoCopiado.length !== 0) 
        {
            navigator.clipboard.writeText(textoCopiado)
            alert("Texto copiado")
        } 
    } 
    else 
    {
        alert("No hay texto para copiar");
    }
}