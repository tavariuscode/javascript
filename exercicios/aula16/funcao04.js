function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *=c
    }return fat
}

console.log(fatorial(5))


// 5! = 5 x 4 x 3 x 2 x 1 = 120    fatorial vai receber um número e retornar um fatorial desse número, criando uma variavel fat, O contator vai começando em n e vai perdendo 1 até chegar em 1. fatorial vai receber vezes o c
