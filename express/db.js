/*
 * @Author: heyunqiang 
 * @Date: 2020-06-07 14:41:31 
 * @Last Modified by: yunqinagHe
 * @Last Modified time: 2020-06-07 17:50:24
 */
const fs = require('fs')
const repos = require('./data') //array

module.exports = {
    store() {
        fs.writeFileSync(__dirname + '/data.json', JSON.stringify(repos));
    },
    //  查询
    get(index) {
        return repos[index];
    },
    get list() {
        return repos;
    },
    //  添加
    add(article) {
        repos.push(article);
        this.store();
    },
    // 删
    del(index) {
        repos.splice(index, 1);
        this.store();
    },
    // 改
    update(index, newArticle) {
        repos.splice(index, 1, newArticle);
        this.store();
    }
}