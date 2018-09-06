/**
 * 1、暴露方法给控制器调用
 * 
 * 2、和mongodb打交道，操作数据库中的数据(增、删、改、查)
 */
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

exports.ObjectId = mongodb.ObjectId;
var url = 'mongodb://localhost:27017/数据库名';

function getDB(collectionName, callback) {
    //真正的连接数据库
    MongoClient.connect(url, (err, db) => {
        //获取到集合
        var collection = db.collection(collectionName);
        callback(err, collection);
        db.close();
    })
}

/**
 * 查询列表数据通用的方法
 * @param {*} collectionName 集合名称   
 * @param {*} condition 条件
 * @param {*} callback 回到 将来做完事情之后，通过回调传值给控制
 */
exports.findList = (collectionName, condition, callback) => {
    
    getDB(collectionName, (err, collection) => {
        collection.find(condition).toArray((err, docs) => {
            //把刚刚操作数据库获取的结果，通过回调函数，传给控制器
            callback(err, docs)
        })
    })
}

/**
 * 通用的，查找唯一一个的方法
 * @param {*} collectionName 
 * @param {*} condition 
 * @param {*} callback 
 */
exports.findOne = (collectionName, condition, callback) => {

    getDB(collectionName, (err, collection) => {
        collection.findOne(condition, (err, doc) => {
            //把数据库刚刚查询到的数据，通过回调函数，传递给控制器
            if (err) throw err;
            callback(doc)
        })
    })
}

/**
 * 通用的插入一条数据的方法
 * @param {*} collectionName 集合名称
 * @param {*} params 数据
 * @param {*} callback 回调
 */
exports.insertOne = (collectionName, params, callback) => {
    getDB(collectionName, (err, collection) => {
        collection.insertOne(params, (err, result) => {
            //将mongodb返回的结果，返回给控制器
            if (err) throw err;
            callback(err, result)
        })
    })

}
/**
 * 更新一条数据的方法
 * @param {*} collectionName 
 * @param {*} params 
 * @param {*} callback 
 */
exports.update = (collectionName, whereDate, updateDate, callback) => {
    getDB(collectionName, (err, collection) => {

        collection.update(whereDate, updateDate, (err, result) => {
            //将mongodb返回的结果，返回给控制器
            if (err) throw err;
            callback(result);
        })
    })
}
/**
 * 删除一条数据的方法
 * @param {*} collectionName 
 * @param {*} condition 
 * @param {*} callback 
 */
exports.deleteStudent = (collectionName, condition, callback) => {
    getDB(collectionName, (err, collection) => {

        collection.deleteOne(condition, (err, result) => {
            //将mongodb返回的结果，返回给控制器
            if (err) throw err;
            callback(result);
        })
    })
}
