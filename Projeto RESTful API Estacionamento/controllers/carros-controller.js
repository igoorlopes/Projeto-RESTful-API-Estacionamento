const express = require('express');
const fs = require('fs')
const fastcsv = require('fast-csv');
const { resolve } = require('path');

var carros = [];
var blacklistid =[];

// retorna os dados de todos os carros
module.exports.getCarros = (req,res) => {
    const ws = fs.createWriteStream(`${resolve('.', 'files')}/carros.csv`)
    fastcsv.write(carros, { headers: true }).pipe(ws)
    
    return res.status(200).json(carros);
};

// consulta os dados de um carro em especifico (id)
module.exports.getCarroEspecifico = (req,res) => {
    const id = req.params.id_carros
    let carro = carros.filter((carro) => { 
        if(id == carro.id){
            return carro
        }
    });
    if (carro.length>0){
        return res.status(200).json( carro )
    } else {
        return res.status(400).json({ errors:"Nenhum carro encontrado." })
    }
};

// insere um dado novo(carro)
module.exports.postCarro = (req,res) =>{
    let {id, name} = req.body;
    let existId = false

    if (!id || !name) { 
        return res.status(400).json( {errors:"Por favor envie um id e/ou name válidos"})
    }

    if ( blacklistid.length > 0 ) {
        blacklistid.filter((bl) => { 
            if(id == bl){
                existId = true
            }
        });
    }

    if (existId) return res.status(400).json( { errors:"id existente." } )

    blacklistid.push(id);

    carros.push({id, name})
    return res.status(201).json( carros )
};

// atualiza os dados(carro)
module.exports.putCarro = (req,res) =>{
    let { id } = req.params
    let { name } = req.body
    let valida = false

    for ( let carro of carros ) {
        if ( id == carro.id ) {
            carro.name = name
            valida = true
        }
    }

    if ( !valida ) return res.status(400).json({erros: 'Falha ao alterar o carro.'})

    return res.status(200).json(carros)
};

// remove os dados(carro)
module.exports.deleteCarro = (req,res) =>{
    let { id } = req.params
    let valida = false
    if ( !id ) return res.status(400).json({erros: 'Por favor, especifique um carro.'})

    for ( let i = 0; i < carros.length; i++ ) {
        if ( id == carros[i].id ) {
            valida = true
            carros.splice(i, 1)
        }
    }
    if ( !valida ) return res.status(400).json({erros: 'Nenhum id encontrado.'})
    
    return res.status(200).json(carros)
};

