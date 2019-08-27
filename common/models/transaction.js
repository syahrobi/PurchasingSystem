'use strict';

module.exports = function(Transaction) {
    Transaction.remoteMethod(
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
    Transaction.ById = function(id, callback){
        new Promise(function(resolve, reject){
            //querying filter
            Transaction.findById(id, function(err, result){
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

};
