let btn = window.document.getElementById('btnestilo');
btn.addEventListener('mouseenter', estilobotao)

function tabuada(){

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length==0){
        alert('Por favor, digite um número ')
    }else{

        let n = Number(num.value)
        let c = 1
        tab.innerHTML=''

        while(c<= 10){
            let item = document.createElement('option')
            item.innerHTML = `${n} *${c} = <b>${n*c}</b>`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

function estilobotao(){

    btn.style.cursor='pointer'
}
