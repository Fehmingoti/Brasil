const sim = window.document.getElementById("opcyes")
const nao = window.document.getElementById("opcNo")
const fundo = window.document.getElementById("area")
const resp = window.document.getElementById("textinho")

nao.addEventListener("click", entrar)
let estado = -1

function entrar(){
    estado++
    if (estado == 0){
        sim.style.transform="translate(+85px)"
        nao.style.transform="translate(+77px)"
        resp.innerHTML = "Erro no sistema, favor tentar novamente!!!";
        resp.style.opacity= 1;

        setTimeout(function(){
            resp.style.opacity = 0;
          }, 3000 )
    }
    if (estado == 1){
        nao.style.transform = "translate(-235px)";
        resp.innerHTML = "Erro no sistema, favor tentar novamente!!!";
        resp.style.opacity= 1;

        setTimeout(function(){
            resp.style.opacity = 0;
          }, 3000 )
    }
    if (estado == 2){
        nao.style.transform="translate(+77px)"
        resp.innerHTML = "Erro no sistema, favor tentar novamente!!!";
        resp.style.opacity= 1;

        setTimeout(function(){
            resp.style.opacity = 0;
          }, 3000 )
    }
    if (estado == 3){
        nao.style.transform="translate(-235px)"
        resp.innerHTML = "Erro no sistema, favor tentar novamente!!!";
        estado = -1
        resp.style.opacity= 1;

        setTimeout(function(){
            resp.style.opacity = 0;
          }, 3000 )
    }

}

sim.addEventListener("click", clicar)

function clicar(){
    resp.innerHTML ="Então venha para matarmos a Saudade Lu❤️!"
    sim.style.transform="translate(0px)"
    nao.style.transform="translate(0px, 0px)"
    estado = -1
    resp.style.opacity= 1;

    setTimeout(function(){
        resp.style.opacity = 0;
      }, 8000 )
    
}