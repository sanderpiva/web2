let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
let btn = window.document.getElementById('btnestilo');
btn.addEventListener('mouseenter', estilobotao)
let btn2 = window.document.getElementById('btnestilo2');
btn2.addEventListener('mouseenter', estilobotao2)


function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inLista(n, lista){
    if(lista.indexOf(Number(n)) !=-1){
        return true
    }else{
        return false
    }
}

function adicionar(){


     if(isNumero(num.value) && !inLista(num.value, valores)){

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.innerHTML = `<i>Valor ${num.value} adicionado</i>`
        lista.appendChild(item) 
        res.innerHTML=''

     }else{
        alert('valor inválido ou já encontrado na lista')

     }

     num.value='' 
     num.focus()

}

function finalizar(){

    if(valores.length==0){
        alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length

        let maiorValor = valores[0]
        let menorValor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma+=valores[pos]
            if(valores[pos]>maiorValor){
                maiorValor=valores[pos]
            }

            if(valores[pos]<menorValor){

                menorValor=valores[pos]
            }
        }
        media = soma/total
        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo, temos ${total} números registrados</p>`
        res.innerHTML+=`<p>O maior valor da lista: ${maiorValor} </p>`
        res.innerHTML+=`<p>O menor valor da lista: ${menorValor} </p>`
        res.innerHTML+=`<p>A soma da lista: ${soma} </p>`
        res.innerHTML+=`<p>A média da lista: ${media} </p>`

    }

}

function estilobotao(){

    btn.style.cursor='pointer'
    
}

function estilobotao2(){

    btn2.style.cursor='pointer'
    
}
