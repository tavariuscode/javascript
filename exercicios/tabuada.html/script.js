var tab = document.getElementById('seltab')
var num = document.getElementById('seltab2')

function tabuada(){
    let num = document.getElementById('txtn')
    
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=''
        while (c <=10){

            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

    }
}

function limpar(){
    tab.innerHTML = `<option></option>`
}

function limpar2(){
    tab.innerHTML = `<option></option>`
}

