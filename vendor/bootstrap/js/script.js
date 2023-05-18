
function vermais(n){
    let pontos=document.getElementById("pontos"+n);
    let maisTexto=document.getElementById("mais"+n);
    let btnVermais=document.getElementById("btnVerMais"+n);


    if(pontos.style.display === "none"){
      pontos.style.display="inline";
      maisTexto.style.display="none";
      btnVermais.innerHTML="Ver mais";

    }else{
      pontos.style.display="none";
      maisTexto.style.display="inline";
      btnVermais.innerHTML="Ver menos";
    }
}


