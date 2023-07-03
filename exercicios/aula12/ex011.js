var idade = 19
    console.log(`Você tem ${idade} anos de idade`)
    if (idade < 16){
        console.log(`Você ainda não tem idade sufuciente para votar!`)
    }else if(idade < 18 ||idade >65){
        console.log(`O seu voto é facultativo!`)
    }else{
        console.log(`O seu voto é obrigatório!`)
    }