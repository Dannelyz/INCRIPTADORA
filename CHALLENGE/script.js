var bttn_encriptar = document.querySelector(".bttn_ncp");//encriptar
var bttn_desencriptar = document.querySelector(".bttn_dncp");//desencriptar
var muheco = document.querySelector(".contenedor_muheco"); //muheco inicio
var H3 = document.querySelector(".contenedor_H3"); //enunciado
var parrafo = document.querySelector (".contenedor_parrafo"); // segundo texto
var resultado = document.querySelector (".txt_resultado"); //encriptado
var copy = document.querySelector (".bttn_copy")
bttn_encriptar.onclick = encriptar;
bttn_desencriptar.onclick = desencriptar;
copy.onclick = copiar



function encriptar(){
    ocultar_Adelante();
    var area = recuperar_Texto()
    resultado.value =  encriptar_texto(area)
}

function desencriptar(){
    ocultar_Adelante();

    var area = recuperar_Texto()
    resultado.value =  desencriptar_texto(area)
}

function copiar(){
    resultado.select()
    document.execCommand("copy")
}

function recuperar_Texto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultar_Adelante(){
    muheco.classList.add("ocultar");
    H3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptar_texto(mensaje){
    var texto = mensaje;
    var texto_Final = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            texto_Final = texto_Final + "ai"
        }
        else if(texto[i] == "e"){
            texto_Final = texto_Final + "enter"
        }
        else if(texto[i] == "i"){
            texto_Final = texto_Final + "imes"
        }
        else if(texto[i] == "o"){
            texto_Final = texto_Final + "over"
        }
        else if(texto[i] == "u"){
            texto_Final = texto_Final + "ufat"
        }
        else{
            texto_Final = texto_Final + texto[i];
        }
    }
    return texto_Final;
    
}

function desencriptar_texto(mensaje){
    var texto = mensaje;
    var texto_Final = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            texto_Final = texto_Final + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            texto_Final = texto_Final + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            texto_Final = texto_Final + "i"
            i=i+3;
        }
        else if(texto[i] == "o"){
            texto_Final = texto_Final + "o"
            i=i+3;
        }
        else if(texto[i] == "u"){
            texto_Final = texto_Final + "u"
            i=i+3;
        }
        else{
            texto_Final = texto_Final + texto[i];
        }
    }
    return texto_Final;
    
}
