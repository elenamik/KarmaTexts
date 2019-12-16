/**
 * CRUD API for Principles Data
 */
const MongoDB = require('./mongoUtil')
const principlesDB = require('./config').principlesDB;
const principlesAttribute = require('./config').principlesAttribute;
const ObjectId = require('mongodb').ObjectId


const get = async ( id ) => {
    const params={
        _id: ObjectId(id)
    }
    let query_result = undefined
    const collection = MongoDB.getCollection(principlesDB)

    // need to use .toArray in order to use promises
    await collection.find(params).toArray()
    .then( result => {
            query_result = result
    }).catch( err => {
            console.log("query failed within API")
            throw(err)
    });
    return query_result
}

const add = async ( id , payload ) => {
    const params={
        _id: ObjectId(id)
    }
    let query_result = undefined
    const collection = MongoDB.getCollection(principlesDB)
    const action = {
        "$push": {
            [principlesAttribute]: payload
        }
    }

    await collection.findOneAndUpdate( params, action )
    .then( result => {
        query_result = result
    }).catch( err => {
        console.log("query error",err)
    })

    return query_result
}

const remove = async ( id, target ) => {
    const params={
        _id: ObjectId(id)
    }
    let query_result = undefined
    const collection = MongoDB.getCollection(principlesDB)

    const action = {
        "$pull": {
            [principlesAttribute]: target
        }
    }
    await collection.findOneAndUpdate( params, action )
    .then( result => {
        query_result=result
    }).catch( err => {
        console.log("query error",err)
    })
    return query_result
}

const create = async ( ) => {
    creationResult = undefined
    const collection = MongoDB.getCollection(principlesDB)
    collection.insertOne({principles:["test"]})
    .then( result => {
        creationResult=result //data stored in result.ops
    } )
    .catch( err => {
        console.log(err)
    })
    return creationResult
}

module.exports = { get, add, remove, create }