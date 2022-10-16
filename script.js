let PratoSelecionado, BebidaSelecionda, SobremesaSelecionada;
let BotaoAtivado = document.querySelector("button");
    BotaoAtivado.disabled = true;

function SelecionarPrato(PratoPrincipal){
    const anterior = document.querySelector(".prato-escolhido")

    if (anterior !== null){
        anterior.classList.remove("prato-escolhido")
    }
    PratoPrincipal.classList.add("prato-escolhido");
    PratoSelecionado = PratoPrincipal.innerHTML;
    AtivarBotao();


    
    
}
function SelecionarBebida(BebidaPrincipal){
    const anterior2 = document.querySelector(".bebida-escolhida")

    if (anterior2 !== null){
        anterior2.classList.remove("bebida-escolhida")
}
    BebidaPrincipal.classList.add("bebida-escolhida")
    BebidaSelecionda = BebidaPrincipal.innerHTML;
    AtivarBotao()
}
function SelecionarSobremesa(SobremesaPrincipal){
    const anterior3 = document.querySelector(".sobremesa-escolhida")

    if (anterior3 !== null){
        anterior3.classList.remove("sobremesa-escolhida")
    }

    SobremesaPrincipal.classList.add("sobremesa-escolhida")
    SobremesaSelecionada = SobremesaPrincipal.innerHTML;
    AtivarBotao()
}

function AtivarBotao(){
    if (PratoSelecionado !== undefined){
    if (BebidaSelecionda !== undefined){
    if (SobremesaSelecionada !== undefined){
        const FinalizarPedidoTexto = document.querySelector("button")
        FinalizarPedidoTexto.innerHTML ="Fechar pedido"
        FinalizarPedidoTexto.classList.add("botao-ativo")
        BotaoAtivado.disabled = false;
    }
    }
    }
}
    

