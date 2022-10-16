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
    function EnviarMensagem(){
        const PratoEscolhido = (document.querySelector(".prato-escolhido>h1")).innerHTML;
        const BebidaEscolhida = (document.querySelector(".bebida-escolhida>h1")).innerHTML;
        const SobremesaEscolhida = (document.querySelector(".sobremesa-escolhida>h1")).innerHTML;
        let total=0;
        let valor = (document.querySelector(".prato-escolhido>h3")).innerHTML.replace("R$ ", "");
        valor = valor.replace(",", ".")
    
        valor = Number(valor);
        total += valor;
    
            valor = (document.querySelector(".bebida-escolhida>h3")).innerHTML.replace("R$ ", "");
            valor = valor.replace(",", ".")
            valor = Number(valor);
            total += valor;
    
                valor = (document.querySelector(".sobremesa-escolhida>h3")).innerHTML.replace("R$ ", "");
                valor = valor.replace(",", ".")
                valor = Number(valor);
                total += valor;
    
    
                    let str= `Olá, gostaria de fazer o pedido:\n- Prato: ${PratoEscolhido}\n- Bebida: ${BebidaEscolhida}\n- Sobremesa: ${SobremesaEscolhida}\nTotal: R$ ${total.toFixed(2)}`;
                    str = encodeURIComponent(str);
                    window.open("https://wa.me/5521994329050?text=" + str);
    
    }

