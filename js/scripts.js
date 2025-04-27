function calcular(){
    //recupera o valor da ação social digitado
    let soma = 0
    // declaração variavel sem tipo
    let acaoSocial = document.getElementById("acaosocial"). value
    soma = soma + Number(acaoSocial)
    // recupera o valor de homenagem digitado
    let Homenagem = document.getElementById("homenagem"). value
    soma = soma + Number(Homenagem)
    // recupera a quantidade de litros de leite
    let leite = document.getElementById("leite").value
    soma = soma + Number(leite)
    // vamos somar os valores
    let kit = Number(document.getElementById("kit").value)
    soma = soma + (kit)
    let suplemento = Number(document.getElementById("suplemento").value)
    soma = soma + Number(suplemento)
    //recuperar a cor da equipe
    let equipe = document.getElementById("equipe").value
    let sangue = Number(document.getElementById("sangue").value)
    let pontoskit // guarda pontuação do kit
    let pontosSangue
    if (equipe == "laranja"){
        // a aequipe é laranja
        if ((kit >= 97 && suplemento >= 49)){
            pontoskit = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
    }
    else if ((kit >= 78 && suplemento >= 39)){
            pontoskit = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
    }
    
    else if ((kit >= 49 && suplemento >= 25)){
        pontoskit = 2500 + ((kit - 49) * 30) + ((suplemento - 25)* 15)
    }
    
    else if ((kit >= 19 && suplemento >= 10)){
            pontoskit = 1000 + ((kit - 19)* 30) + ((suplemento - 10)* 15)
    }
    }
    
    else if (equipe == "preta"){
        //a equipe é preta
        if ((kit >= 103 && suplemento >= 52)){
            pontoskit = 5000 + ((kit - 103)* 30) + ((suplemento - 52)* 15)
        }
        else if ((kit >= 82 && suplemento >= 42)){
            pontoskit = 4000 + ((kit - 82)* 30)+ ((suplemento - 42)* 15)
        }
        else if ((kit >= 52 && suplemento >= 26)){
            pontoskit = 2500 + ((kit - 52)* 30) + ((suplemento - 26)*15)
        }
        else if ((kit >= 21 && suplemento >= 10)){
            pontoskit = 1000 + ((kit - 21 )*30) + ((suplemento - 10)*15)
        }
    }
    else if (equipe == "roxa"){
        //a equipe é roxa
        if((kit >= 102 && suplemento >= 51)){
            pontoskit = 5000 + ((kit - 102)* 30) + ((suplemento - 51)* 15)
        }
        else if((kit >= 82 && suplemento >= 41)){
            pontoskit = 4000 + ((kit - 82)* 30) + ((suplemento - 41)*15)
        }
        else if ((kit >= 51 && suplemento >= 26)){
        pontoskit = 2500 + ((kit - 51)* 30) + ((suplemento - 26)* 15)
        }
        else if ((kit >= 20 && suplemento >= 10)){
            pontoskit = 1000 + ((kit - 20)*30) + ((suplemento - 10)*15)
        }
    }
    else if (equipe == "verde"){
        //a equipe é verde
        if ((kit >= 88 && suplemento >= 44)){
            pontoskit = 5000 + ((kit - 88)*30) + ((suplemento - 44)* 15)
        }
        else if ((kit >= 70 && suplemento >=35)){
            pontoskit = 4000 + ((kit - 70)*30) + ((suplemento - 35)*15)
        }
        else if ((kit >= 44 && suplemento >= 22)){
            pontoskit = 2500 + ((kit - 44)*30) + ((suplemento - 22)* 15)
        }
        else if (( kit >= 18 && suplemento - 9)){
            pontoskit = 1000 + ((kit - 18)*30) + ((kit - 9)*15)
        }
    }
    else if (equipe == "vermelha"){
        //a equipe é vermelha
        if ((kit >= 93 && suplemento >= 47)){
            pontoskit = 5000 + ((kit - 93)*30) + ((suplemento - 47)*15)
        }
        else if ((kit >= 74 && suplemento >= 38)){
            pontoskit = 4000 + ((kit - 74)*30) + ((suplemento - 38)*15)
        }
        else if ((kit >= 47 && suplemento >= 24)){
            pontoskit = 2500 + ((kit - 47)*30) + ((suplemento - 24)*15)
        }
        else if ((kit >= 19 && suplemento >= 9)){
            pontoskit = 1000 + ((kit - 19)*30) + ((suplemento - 9)*15)
        }
    }
    alert(pontoskit)
  
    let pacotedearroz5kg = document.getElementById("pacotedearroz5kg").value
    soma = soma + Number(pacotedearroz5kg)
    let pacotederroz1kg = document.getElementById("pacotedearroz1kg").value
    soma = soma + Number(pacotederroz1kg)
    let pacotedefeijao2kg = document.getElementById("pacotedefeijao2kg").value
    soma = soma + Number(pacotedefeijao2kg)
    let pacotedefeijao1kg = document.getElementById("pacotedefeijao1kg").value
    soma = soma + Number(pacotedefeijao1kg)
    let pacotedemacarrao = document.getElementById("pacotedemacarrao").value
    soma = soma + Number(pacotedemacarrao)
    let oleo = document.getElementById("oleo").value
    soma = soma + Number(oleo) 
    // devolve o resultado para html 
    
    if (equipe == "Laranja"){
        if (sangue >= 49){
        pontosSangue = 2500 ((sangue - 49)*20)
        }
        else{
            pontosSangue = sangue * 20 
        }
    }
    if (equipe == "Preta"){
        if (sangue >= 52){
            pontosSangue = 2500 ((sangue - 52)*20)
        }
    }
    if (equipe == "Roxa"){
        if (sangue >= 51){
            pontosSangue = 2500 ((sangue - 52)*20)
        }
    }
    if (equipe == "Verde"){
        if (sangue >= 44){
            pontosSangue = 2500 ((sangue - 44)*20)
        }
    }
    if (equipe == "Vermelha"){
        if (sangue >= 47){
            pontosSangue = 2500 ((sangue - 47)*20)
        }        
    }
    alert(pontosSangue)
        document.getElementById("soma").innerHTML = soma.toFixed(2)
}   