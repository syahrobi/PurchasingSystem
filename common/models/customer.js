'use strict';

module.exports = function(Customer) {
    Customer.remoteMethod(
        'getName',
        {
            description: 'get fullname',
            accepts: [
                { arg: 'firstname', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/byName', verb: 'get' }
        }
    );

    Customer.getName = function(firstname, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    firstname : {
                        like : firstname
                    }
                }
            }
            Customer.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Costumer Tidak Dapat Ditemukan")
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
