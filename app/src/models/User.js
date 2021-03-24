import React from 'react'
import {ToastAndroid} from 'react-native'
import {v4 as uudiv4}from 'uuid'
import firebase from 'firebase'
import { uploadImage } from '../constantes/FunctionsUploadImage'
import { Docs } from '../constantes/Docs'
import Venda from './Venda'
import { ProdutoModel } from './ProdutoModel'

export default  class User{
    constructor({nome,email,senha,produtosAvenda=[],fotoUri,avaliacaoCompra,avaliacaoVenda,vendas=[],compras=[],numeroConta,numeroAgencia}){
        this.nome = nome
        this.email = email
        this.senha = senha
        this.produtosAvenda = produtosAvenda
        this.id = email
        this.fotoUri = fotoUri
        this.avaliacaoCompra = avaliacaoCompra
        this.avaliacaoVenda = avaliacaoVenda
        this.vendas = vendas
        this.compras = compras
        this.numeroConta = numeroConta
        this.numeroAgencia = numeroAgencia
    }
    getAvaliacaoCompra(){
        if(this.avaliacaoCompra != undefined){
            var result = this.avaliacaoCompra.reduce((n1,n2)=>{return n1+n2 },0)/this.avaliacaoCompra.length
            return result
        }else{
            return undefined
        }
    }
    getAvaliacaoVenda(){
        if(this.avaliacaoVenda != undefined){
            console.log('soma: '+ (this.avaliacaoVenda.reduce((n1,n2)=>{return n1+n2 },0)))
            console.log('Quantidade: '+ this.avaliacaoVenda.length)
            return (this.avaliacaoVenda.reduce((n1,n2)=>{return n1+n2 },0)/this.avaliacaoVenda.length)
        }else{
            return undefined
        }
    }

    async colocarAVenda({produtoVendido,navigation}){
        var produto = JSON.parse(JSON.stringify(produtoVendido))
        uploadImage({uri:produtoVendido.imagemLink,categoria:Docs.produtos,imageId:produtoVendido.id}).then(()=>{
            firebase.storage().ref().child(`images/${Docs.produtos}/`+produto.id).getDownloadURL().then((value)=>{
                produto.imagemLink = value
                firebase.firestore().collection(Docs.produtos).doc(produtoVendido.id).set(produto).then(()=>{
                    ToastAndroid.show('Produto cadastrado com sucesso',ToastAndroid.LONG)
                    navigation.goBack()
                })
            })
            
           
        })
    }
    async comprar({produtoComprado,navigation}){
        var comprador = this
        firebase.firestore().collection(Docs.users).doc(produtoComprado.vendedor).get().then((doc)=>{
            var vendedor = doc.data()
            vendedor = new User(vendedor)
            if(vendedor.id == this.id){
                alert('Você não pode comprar um produto que você mesmo colocou a venda')
            }else{
                produtoComprado['vendido'] = true
                produtoComprado['comprador'] = this.id
                this.compras.push(produtoComprado)
                vendedor.vendas.push(produtoComprado)
                comprador = JSON.parse(JSON.stringify(this))
                firebase.firestore().collection(Docs.users).doc(comprador.id).set(comprador).then(()=>{
                    vendedor = JSON.parse(JSON.stringify(vendedor))
                    firebase.firestore().collection(Docs.users).doc(vendedor.id).set(vendedor).then(()=>{
                        var venda = new Venda({idComprador:comprador.id,idProduto:produtoComprado.id,idVendedor:vendedor.id,valor:produtoComprado.valor})
                        venda = JSON.parse(JSON.stringify(venda))
                        firebase.firestore().collection(Docs.vendas).doc(venda.idVenda).set(venda).then(()=>{
                            produtoComprado=new ProdutoModel(produtoComprado)
                            produtoComprado = JSON.parse(JSON.stringify(produtoComprado))
                            firebase.firestore().collection(Docs.produtos).doc(produtoComprado.id).set(produtoComprado).then(()=>{
                                ToastAndroid.show('Compra Realizada Com sucesso',ToastAndroid.LONG)
                                navigation.goBack()
                            })
                        })
                    })
                })
            }

        })
    }
    cadastrarProduto({nome,origem,valor,tipo,raridade,imagemLink,descricao,id,vendedor}){
        //código
    }
    
    static avaliarProdutosComprados({produto,onpress=()=>{},avaliacao}){
        console.log('produtos Comprados')
        firebase.firestore().collection(Docs.users).doc(produto.vendedor).get().then((doc)=>{
            var usuarioVendedor = doc.data()
            usuarioVendedor = new User(usuarioVendedor)
            if(usuarioVendedor.avaliacaoVenda == undefined){
                usuarioVendedor.avaliacaoVenda= []
            }
            usuarioVendedor.avaliacaoVenda.push(avaliacao)
            usuarioVendedor=JSON.parse(JSON.stringify(usuarioVendedor))
            firebase.firestore().collection(Docs.users).doc(produto.vendedor).set(usuarioVendedor).then(()=>{
            
                firebase.firestore().collection(Docs.users).doc(produto.comprador).get().then((doc)=>{
                    
                    var usuarioComprador = new User(doc.data())
                    usuarioComprador.compras = usuarioComprador.compras.map((elemento)=>{
                        if(elemento.id == produto.id){
                            elemento['avaliado'] = true
                        }
                        return elemento
                    })
                    usuarioComprador = JSON.parse(JSON.stringify(usuarioComprador))
                    firebase.firestore().collection(Docs.users).doc(produto.comprador).set(usuarioComprador).then(()=>{
                        onpress()
                    })
                })
                
                
            })
            
        })
    }

    static avaliarProdutosVendidos({produto,onpress=()=>{},avaliacao}){
        console.log('produtos Vendidos')

        firebase.firestore().collection(Docs.users).doc(produto.comprador).get().then((doc)=>{
            var usuarioComprador = new User(doc.data())
            if(usuarioComprador.avaliacaoCompra == undefined){
                usuarioComprador.avaliacaoCompra = []
            }
            usuarioComprador.avaliacaoCompra.push(avaliacao)
            usuarioComprador = JSON.parse(JSON.stringify(usuarioComprador))
            firebase.firestore().collection(Docs.users).doc(produto.comprador).set(usuarioComprador).then(()=>{
                firebase.firestore().collection(Docs.users).doc(produto.vendedor).get().then((doc)=>{
                    var usuarioVendedor = new User(doc.data())
                    usuarioVendedor.vendas = usuarioVendedor.vendas.map((elemento)=>{
                        if(elemento.id == produto.id){
                            elemento['avaliado'] = true
                        }
                        return elemento
                    })
                    usuarioVendedor = JSON.parse(JSON.stringify(usuarioVendedor))
                    firebase.firestore().collection(Docs.users).doc(produto.vendedor).set(usuarioVendedor).then(()=>{
                        onpress()
                    })
                })
                onpress()
            })

        })
    }

    cadastraUsuario({navigation}){
        var user = JSON.parse(JSON.stringify(this))
                firebase.auth().createUserWithEmailAndPassword(user.email,user.senha).then(()=>{
                    uploadImage({imageId:user.id,categoria:Docs.users,uri:user.fotoUri}).then(()=>{
                        firebase.storage().ref().child('images').child(Docs.users).child(user.id).getDownloadURL().then((downloadUrl)=>{
                            user.fotoUri = downloadUrl
                            firebase.firestore().collection(Docs.users).doc(user.id).set(user).then(()=>{
                                //ToastAndroid.show('Cadastro realizado com sucesso')
                                navigation.navigate('HomePerfil',user)
                                //console.log('teste')
                            })
                        })
                        
                    })
                }).catch((error)=>{
                    ToastAndroid.show(error.message,ToastAndroid.LONG)
                })
    }
}

