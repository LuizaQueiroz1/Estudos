// // progarama para dar desconto conforme valor da compra

function compras() {

    console.log("BEM VINDO A LOJA DA LULU!");
    const valor = prompt("Entre com o valor do produto");
    const quantidade = prompt("Entre com a quantidade de produto");
    const porcentagem = [[0.03], [0.05], [0.08]];
    let desconto
    let descontoAplicado

    const valorTotal = valor * quantidade

    if (valorTotal <= 1000) {

        console.log(`Valor do produto foi ${valor} reais e quantidade ${quantidade}`);
        console.log(`O valor da sua compra  é ${valorTotal}`);
        console.log("Esse valor não tem desconto");

    } else if ((valorTotal == 1000) || (valorTotal > 1000) && valorTotal < 3000) {

        console.log(`Valor do produto foi ${valor} reais e quantidade ${quantidade}`);
        console.log(`O valor da sua compra sem desconto é ${valorTotal}`);
        desconto = valorTotal * porcentagem[0];
        descontoAplicado = valorTotal - desconto
        console.log(`O valor com desconto é de ${descontoAplicado}`);

    } else if ((valorTotal == 3000) || (valorTotal > 3000) && valorTotal < 5000) {

        console.log(`Valor do produto foi ${valor} reais e quantidade ${quantidade}`);
        console.log(`O valor total da sua compra foi ${valorTotal}`);
        desconto = valorTotal * porcentagem[1];
        descontoAplicado = valorTotal - desconto
        console.log(`O valor com desconto é de ${descontoAplicado}`);

    } else if ((valorTotal == 5000) || valorTotal > 5000) {

        console.log(`Valor do produto foi ${valor} reais e quantidade ${quantidade}`);
        console.log(`O valor sem desconto é${valorTotal}`);
        desconto = valorTotal * porcentagem[2];
        descontoAplicado = valorTotal - desconto
        console.log(`O valor com desconto é de ${descontoAplicado}`);

    }
}







function geladosDaLu() {

    console.log("Bem vindos a lojas de gelados da Lulu")
    console.log("--------------------Cardápio--------------------");
    console.log("-----| Tamanho | Cupuaçu (CP) | Açaí (AC) |-----")
    console.log("-----|    P    |   R$ 10,00   |  R$ 12,00 |-----")
    console.log("-----|    M    |   R$ 15,00   |  R$ 17,00 |-----")
    console.log("-----|    G    |   R$ 19,00   |  R$ 21,00 |-----")
    console.log("------------------------------------------------")


    let repetir = true
    let sabor1 = "CP"
    let sabor2 = "AC"
    let valorTotal = 0
    const tamanho1 = "P"
    const tamanho2 = "M"
    const tamanho3 = "G"

    let extra


    while (repetir === true) {
        repetir = false

        let saborDesejado = prompt("Entre com o sabor desejado. CP/AC")

        let tamanhoDesejado = prompt("Entre com o tamanho desejado. P/M/G")




        if (saborDesejado == sabor1 && tamanhoDesejado == tamanho1) {
            sabor1 = "CUPUAÇU"
            valorTotal = 10
            console.log(`Você escolheu o sabor ${sabor1} no tamanho ${tamanho1}: ${valorTotal}`)

        } else if (saborDesejado == sabor2 && tamanhoDesejado == tamanho1) {
            sabor2 = "AÇAI"
            valorTotal = 12
            console.log(`Você escolheu o sabor ${sabor1} no tamanho ${tamanho1}: ${valorTotal}`)

        } else if (saborDesejado == sabor1 && tamanhoDesejado == tamanho2) {
            sabor1 = "CUPUAÇU"
            valorTotal = 15
            console.log(`Você escolheu o sabor ${sabor1} no tamanho ${tamanho2}: ${valorTotal} `)

        } else if (saborDesejado == sabor2 && tamanhoDesejado == tamanho2) {
            sabor2 = "AÇAI"
            valorTotal = 17
            console.log(`Você escolheu o sabor ${sabor2} no tamanho ${tamanho2}: ${valorTotal}`)

        } else if (saborDesejado == sabor1 && tamanhoDesejado == tamanho3) {
            sabor1 = "CUPUAÇU"
            valorTotal = 19
            console.log(`Você esconlheu o sabor ${sabor1} no tamanho ${tamanho3}: ${valorTotal}`)

        } else if (saborDesejado == sabor2 && tamanhoDesejado == tamanho3) {
            sabor2 = "AÇAI"
            valorTotal = 21
            console.log(`Você escolheu o sabor ${sabor2} no tamanho ${tamanho3}: ${valorTotal}`)

        } else {
            repetir = true
            console.log("Opção errada. Tente novamente")
        }

        // repetir = true

        //  extra = prompt("Deseja pedir mais alguma coisa?(s/digite outra tecla)")

        //  if(extra === "s"){
        //     console.log(`${saborDesejado}, ${tamanhoDesejado}: ${total}`)
        //     //  total = saborDesejado + tamanhoDesejado

        // } else {
        //     break
        // }

    }

}


console.log("\n\n\n")




// servivo eescolhido
// numero de paginas

// let valorServico = 0;
// servicos()
// num_paginas()
// servico_extra()
// console.log('Orçamento total = '  + valorServico.toFixed(2))




function servicos() {

    console.log("Bem vindo a papelaria da Lu")

    console.log("DIG - digitalização")
    console.log("ICO - Impressão colorida")
    console.log("IPB - Impressão preto e branco")
    console.log("FOT - Fotocópia")


    let repetir = true

    const servicos1 = "DIG"
    const servicos2 = "ICO"
    const servicos3 = "IPB"
    const servicos4 = "FOT"


    while (repetir === true) {
        repetir = false

        let entradaServico = prompt("Entre com o seviço desejado. DIG/ICO/IPB/FOT")

        if (entradaServico == servicos1) {
            valorServico = 1.10
            console.log(`Você escolheu ${entradaServico}, que custa: ${valorServico}`)
        }

        else if (entradaServico == servicos2) {
            valorServico = 1
            console.log(`voce escolheu ${entradaServico}, que custa ${valorServico} real`)
        }

        else if (entradaServico == servicos3) {
            valorServico = 0.40
            console.log(`Você escolheu ${entradaServico}, que custa ${valorServico} centavos`)
        }

        else if (entradaServico == servicos4) {
            valorServico = 0.20
            console.log(`Você escolheu ${entradaServico}, que custa ${valorServico} centavos`)
        } else {
            repetir = true
            console.log("Opção errada. Escolha uma opção válida")
        }
    }
}

function num_paginas(descontoAplicado) {
    let repetir = true

    let desconto = 0
    const porcentagem = [0.10, 0.15, 0.20] // PARSE TO UNIQUE ARRAY

    const paginas = parseFloat(prompt("Entre com o numero de páginas"))

    while (repetir === true) {
        repetir = false

        if ((paginas > 10000) || (paginas == 10000)) {
            console.log("Não aceitamos tantas paginas de uma vez. Por favor, entre com o número de paginas novamente")
        }
        else if (paginas < 10) {
            console.log(paginas)
        }
        else if ((paginas == 10) || (paginas > 10) && (paginas < 100)) {
            desconto = valorServico * porcentagem[0][0]
            descontoAplicado = (valorServico - desconto) * paginas
            console.log(`O valor das páginas com o deconto é: ${descontoAplicado}`)

        } else if ((paginas == 100) || (paginas > 100) && (paginas < 1000)) {
            desconto = valorServico * porcentagem[1]
            descontoAplicado = (valorServico - desconto) * paginas
            console.log(`O valor das págimas com desconto é: ${descontoAplicado} `)

        } else if ((paginas == 1000) || (paginas > 1000) && (paginas < 10000)) {
            desconto = valorServico * porcentagem[2]
            descontoAplicado = (valorServico - desconto) * paginas
            console.log(`O valor das páginBas com desconto é: ${descontoAplicado}`)
        } else {
            repetir = true
            console.log("Opção errada")
        }

        //     if(isNaN(paginas)){
        //         console.log("O valor não é númerico. Tente novamente")
        //    } 
    }

    valorServico = descontoAplicado
}

function servico_extra() {
    let repetir = true
    console.log("1 - Encadernação simples - R$ 10,00")
    console.log("2 - Encadernação Capa Dura - R$ 25,00")
    console.log("0 - Não desejo mais nada")

    adicional = prompt("Deseja adicionar mais algum serviço?")

    while (repetir === true) {
        repetir = false

        if (adicional == 1) {
            valorServico = valorServico + 10
        } else if (adicional == 2) {
            valorServico = valorServico + 25
        } else if (adicional == 0) {
            return valorServico
        } else {

            console.log("Opção errada")
        }
    }
}

// O parânetro é um valor externo que a função precisa para ser executada



// execução aqui em baixo
//variáveis globais
let removedorDeLivro = 0
let opcao_escolhida = 0
let lista_de_livros = [
    { id: 1, nome: "Harry Potter", autor: "JK Rowlling", editora: "Rocco" },
    { id: 2, nome: "Harry Potter", autor: "JK Rowlling", editora: "Rocco" },
    { id: 3, nome: "Harry Potter", autor: "JK Rowllinha", editora: "Rocco" },
]

//criando um loop para a execução do programa
while (opcao_escolhida != 4) {

    opcao_escolhida = menuPrincipal()

    if (opcao_escolhida == 1) {

        lista_de_livros = cadastrar_livro(lista_de_livros)
        console.log("Livro cadastrado")
        console.log(lista_de_livros)

    } else if (opcao_escolhida == 2) {
        const resultadoDaConsulta = consulta_livros(lista_de_livros)
        if (resultadoDaConsulta != 4) {
            console.log(...resultadoDaConsulta)
        }
    }   else if(opcao_escolhida == 3){
        const remocao = remover_livro(removedorDeLivro)
        for(j = 0; j <= removedorDeLivro.length; j++){
            if(j == remocao.id){
                removedorDeLivro.splice(remocao)
                console.log("Id removido")
            }
        }  

        }  else{
            console.log("id inexistente")
         
        
    }   
    


       

        // if (removedor == lista_de_livros.id){
        //     lista_de_livros.splice(removedor, 1)
            
        // }
        // console.log("Item removido")

}


//  funções aqui em baixo
function menuPrincipal() {

    console.log("Bem vindo aao controle de de livros da Luiza")
    console.log("--------------MENU PRINCIPAL----------------")
    console.log("Escolha a opção desejada")
    console.log("1 - Cadastrar livro")
    console.log("2 - Consultar livro(s)")
    console.log("3 - Remover livro")
    console.log("4 - Sair")

    const menu_escolhido = prompt("Escolha a opção desejada")

    return menu_escolhido
}

function cadastrar_livro(lista) {

    const livro = {
        id: null,
        nome: null,
        autor: null,
        editora: null
    }

    livro.id = prompt("Digite o id do livro")
    livro.nome = prompt("Digite o nome do livro")
    livro.autor = prompt("Digite o nome do autor")
    livro.editora = prompt("DIgite o nome do editora")

    lista.push(livro)
    return lista

}

function consulta_livros(listaDeConsulta) {
    const consulta = prompt(`
    "1 - Consultar todos"
    "2 - Consultar por id"
    "3 - Consultar por autor"
    "4 - Retornar ao menu"
    
    Digite a opção desejada: `)

    if (consulta == 1) {
        return listaDeConsulta

    } else if (consulta == 2) {
        const id = prompt("Digite o id do livro")

        for (i = 0; i <= listaDeConsulta.length; i++) {
            const item_atual = listaDeConsulta[i]

            if (item_atual.id == id) {
                return item_atual
            }
        }
        return livroConsultado;

    } else if (consulta == 3) {
        const autor = prompt("Digite o nome do autor")

        let livros_encontrados = []

        for (i = 0; i <= listaDeConsulta.length; i++) {
            const livro_atual = listaDeConsulta[i]

            if (livro_atual) {
                if (livro_atual.autor == autor) {
                    livros_encontrados.push(livro_atual)
                }
            }
        }

        return livros_encontrados

    } else if (consulta >= 4) {
        return consulta

    }

}


// function remover_livro(){
//    const remover =  parseInt(prompt("Digite o id do livro a ser removido"))
//    return remover
// }
