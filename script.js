function rolDado() {
    document.getElementById("img").style = `display: none;`
    let numDado = Number.parseInt(Math.random()*7)
    document.getElementById("resultDado").innerHTML = `JOGANDO DADOS.`

    setTimeout(()=>{
        document.getElementById("resultDado").innerHTML = `JOGANDO DADOS..`
    }, 500)

    setTimeout(()=>{
        document.getElementById("resultDado").innerHTML = `JOGANDO DADOS...`
    }, 1000)
    
    setTimeout(()=>{
        document.getElementById("resultDado").innerHTML = `O dado caiu no lado ${numDado}`
        document.getElementById("img").src = `images/dado${numDado}.png`
        document.getElementById("img").style = `display: block;`
    }, 1500)
};

    

