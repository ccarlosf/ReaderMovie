var postsData = require('../../../data/posts-data.js')

Page({
    onLoad:function (option) {
        var postId = option.id;
        var postData = postsData.postList[postId];
        this.setData({
            postData: postData
        })

        // wx.setStorageSync('key',"风暴英雄")
        wx.setStorageSync('key', {
            game: "风暴英雄",
            developer: "暴雪"
        })

        wx.setStorageSync('key1', {
            game: "LOL",
            developer: "拳头"
        })
    },

    onCollectionTap:function (event) {
       var game = wx.getStorageSync('key');
        console.log(game)
    },

    onShareTap:function (event) {
        // wx.removeStorageSync('key')
        // 缓存的上限最大不能超过10M
        wx.clearStorageSync();
    }
})