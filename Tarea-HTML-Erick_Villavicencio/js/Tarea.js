document.addEventListener("DOMContentLoaded",function(){
    let boton1 = document.querySelector("#boton1")
    let boton2 = document.querySelector("#boton2")
    let boton3 = document.querySelector("#boton3")
    let enlace1 = document.querySelector("#a1")
    let enlace2 = document.querySelector("#a2")
    let enlace3 = document.querySelector("#a3")

    function nodosDom(){
        alert("El boton ha sido presionado")
    }
    boton1.addEventListener("click",nodosDom)
    function one_action(){
        alert("No se puede volver a utilizar este boton")
        boton2.removeEventListener("click",one_action)
    }
    boton2.addEventListener("click",one_action)
    function identificar_click(event){
        if(event.button == 0){
            alert("Es botón izquierdo")
        }else if(event.button == 1){
            alert("Es botón central")
        }else if(event.button == 2){
            alert("Es botón derecho")
        }
    }
    boton3.addEventListener("mousedown",identificar_click)
    function abrir_enlace1(evento){
        evento.preventDefault()
        alert("No se pudo entrar al link")
    }
    enlace1.addEventListener("click",abrir_enlace1)
    function abrir_enlace2(evento){
        evento.preventDefault()
        alert("No se pudo entrar al link")
    }
    enlace2.addEventListener("click",abrir_enlace2)
    function abrir_enlace3(evento){
        evento.preventDefault()
        alert("No se pudo entrar al link")
    }
    enlace3.addEventListener("click",abrir_enlace3)
})