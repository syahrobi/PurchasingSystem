'use strict';

module.exports = function(Admin) {
    Admin.remoteMethod(
        'getName',
        {
            description: 'get fullname',
            accepts: [
                { arg: 'fullname', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/byName', verb: 'get' }
        }
    );

    Admin.getName = function(fullname, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    fullname : {
                        like : fullname
                    }
                }
            }
            Admin.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Tidak Dapat Ditemukan")
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
