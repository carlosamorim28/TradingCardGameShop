import { Tipo } from "./ConstantesProdutos"
import { Cores } from "./Cores"

export const filtros =({setTexto,setBgColors,all}) =>{
    
    var teste = []

    if(all){
        teste = [
            {
                nome:Tipo.todos,
                onPress:()=>{
                    setTexto(Tipo.todos)
                    setBgColors([Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao])
                }, 
            },
            {   
                nome:Tipo.carta,
                onPress:()=>{
                    setTexto(Tipo.carta)
                    setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao])
                }, 
            },
            {
                nome:Tipo.capa,
                onPress:()=>{
                    setTexto(Tipo.capa)
                    setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao])
        
                },
            },
            {
                nome:Tipo.deck,
                onPress:()=>{
                    setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao])
                    setTexto(Tipo.deck)
                },
            },
            {
                nome:Tipo.playmat,
                onPress:()=>{
                    setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao])
                    setTexto(Tipo.playmat)
                },
            },
            {
                nome:Tipo.box,
                onPress:()=>{
                    setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao])
                    setTexto(Tipo.box)
                },
            },
            {
                nome:Tipo.outro,
                onPress:()=>{
                    setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado])
                    setTexto(Tipo.outro)
                },
                
            }
            ]
    }else{
        teste = [
            {   
                nome:Tipo.carta,
                onPress:()=>{
                    setTexto(Tipo.carta)
                    setBgColors([Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao])
                }, 
            },
            {
                nome:Tipo.capa,
                onPress:()=>{
                    setTexto(Tipo.capa)
                    setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao])
        
                },
            },
            {
                nome:Tipo.deck,
                onPress:()=>{
                    setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao])
                    setTexto(Tipo.deck)
                },
            },
            {
                nome:Tipo.playmat,
                onPress:()=>{
                    setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao])
                    setTexto(Tipo.playmat)
                },
            },
            {
                nome:Tipo.box,
                onPress:()=>{
                    setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao])
                    setTexto(Tipo.box)
                },
            },
            {
                nome:Tipo.outro,
                onPress:()=>{
                    setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado])
                    setTexto(Tipo.outro)
                },
                
            }
            ]
    }
    
    return(teste)
}

    