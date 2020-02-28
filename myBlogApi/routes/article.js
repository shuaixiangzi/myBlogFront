/*
 * @Author: 翟海祥
 * @Date: 2020-02-28 13:16:12
 * @LastEditTime: 2020-02-28 13:59:51
 * @LastEditors: 翟海祥
 * @Description: 
 * @FilePath: \myBlogApi\routes\article.js
 */

var express = require('express');
var router = express.Router();

// 获取文章列表
router.get('/getArticleList', function(req, res, next){
    let list = [
        {
            id: 1,
            title: '我是文章1',
            subTitle: '俺是副标题',
            desc: '俺是描述俺是描述俺是描述俺是描述'
        },
        {
            id: 1,
            title: '我是文章2',
            subTitle: '俺是副标题',
            desc: '俺是描述俺是描述俺是描述俺是描述'
        }
    ];

    res.send(JSON.stringify(list));
})

module.exports = router;
