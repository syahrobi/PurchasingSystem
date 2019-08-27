'use strict';

module.exports = function(Commodity) {
    
    //create path
	Commodity.remoteMethod(
        
            'ById',
            {
                description:'search by id',
                accepts:[
                    {
                        arg:'id', type:'string'
                    }
                ],
                returns:{
                    arg:'res', type:'object', root:true
                },
                http:{
                    path:'/ById', verb:'get'
                }
            }
        );
        Commodity.ById = function(id, callback){
            new Promise(function(resolve, reject){
                //querying filter
                Commodity.findById(id, function(err, result){
                    if(err) reject(err)
                    if(result === null){
                        err = new Error("nama tidak ditemukan")
                        err.statusCode = 404
                        reject(err)
                    }
                    resolve(result)
                });
            }).then(function(res){
                if (!res) callback (err)
                return callback (null, res)
            }).catch(function(err){
                callback(err);
            });
        }

    Commodity.remoteMethod(
        'getQty',
        {
            description: 'get qty ',
            accepts: [
                { arg: 'qty', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getQty', verb: 'get' }
        }
    );

    Commodity.getQty = function(qty, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    nama : {
                        like : qty
                    }
                }
            }
            Commodity.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Qty not found")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

    Commodity.remoteMethod(
        'getCategory',
        {
            description: 'get category',
            accepts: [
                { arg: 'category', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/byCategory', verb: 'get' }
        }
    );

    Commodity.getName = function(category, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    category : {
                        like : category
                    }
                }
            }
            Commodity.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Category Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }


    Commodity.remoteMethod(
        'getQuality',
        {
            description: 'get quality ',
            accepts: [
                { arg: 'quality', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getQuality', verb: 'get' }
        }
    );

    Commodity.getQuality = function(quality, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    nama : {
                        like : quality
                    }
                }
            }
            Commodity.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Quality not found")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

    Commodity.remoteMethod(
        'getPrice',
        {
            description: 'get price ',
            accepts: [
                { arg: 'price', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getPrice', verb: 'get' }
        }
    );

    Commodity.getPrice = function(price, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    nama : {
                        like : price
                    }
                }
            }
            Commodity.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Price not found")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }
};
