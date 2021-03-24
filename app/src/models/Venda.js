import React from 'react'
import {} from 'react-native'
import {v4 as uudiv4}from 'uuid'
var data = new Date()
export default class Venda{
    constructor({idProduto, idVendedor,idComprador,valor,idVenda=uudiv4(),dataVenda=data.getDate()+'/'+(data.getMonth()+1)+'/'+data.getFullYear()}){
        this.idVenda = idVenda
        this.idProduto = idProduto
        this.idComprador = idComprador
        this.idVendedor = idVendedor
        this.valor = valor
        this.dataVenda = dataVenda
    }
}