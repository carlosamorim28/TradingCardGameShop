import React from 'react'
import {} from 'react-native'
import {v4 as uuidv4} from 'uuid'
var data = new Date()
export class ProdutoModel{
    constructor({nome,origem,valor,tipo,raridade,imagemLink,descricao,vendedor,id=uuidv4(),vendido=false,dataPublicacao=data.getDate()+'/'+(data.getMonth()+1)+'/'+data.getFullYear(),comprador}){
        this.nome = nome
        this.id = id
        this.origem = origem
        this.valor = valor
        this.tipo = tipo
        this.raridade = raridade
        this.imagemLink = imagemLink
        this.descricao = descricao
        this.vendedor = vendedor
        this.dataPublicacao = dataPublicacao
        this.vendido = vendido
        this.comprador = comprador
    }
}