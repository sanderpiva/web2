
function verificar(){

    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(fano.value<1900 ||(fano.value.length==0 || Number(fano.value)>ano)){

        window.alert('[Erro] Verifique dados e tente de novo!')
        res.innerHTML=''
    }
    else{
    
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ' '
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.padding='10px'

        if(fsex[0].checked){
            
            genero = 'Homem'

            if(idade >= 0 && idade <= 4){

                img.setAttribute('src', 'foto-bebeMasc.png')

            }else if(idade < 12){

                img.setAttribute('src', 'foto-menino.png')

            }
                
            else if(idade <= 21){
                img.setAttribute('src', 'foto-jovemMasc.png')


            }else if(idade < 60){
                img.setAttribute('src', 'foto-adultoMasc.png')

            }
            else{
                img.setAttribute('src', 'foto-idosoMasc.png')
            }

        }else if(fsex[1].checked){
            
            genero='Mulher'

            
            if(idade >= 0 && idade <= 4){

                img.setAttribute('src', 'foto-bebeFem.png')

            }else if(idade < 12){

                img.setAttribute('src', 'foto-menina.png')

            }else if(idade <= 21){
                
                img.setAttribute('src', 'foto-jovemFem.png')

            }else if(idade < 60){
                
                img.setAttribute('src', 'foto-adultoFem.png')

            }
            else{                
                img.setAttribute('src', 'foto-idosoFem.png')
            }
        }
    
        res.style.textAlign="center"
        res.innerHTML = `Detectamos  ${genero} com ${idade} anos.`
        res.appendChild(img)
    }  
}

function estilobotao(){

    var btn = document.getElementById('btnestilo')
    btn.style.cursor='pointer'
}


