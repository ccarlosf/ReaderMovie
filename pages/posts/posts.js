var postsData = require('../../data/posts-data.js') 

Page({
  //产生师件 捕捉事件 回调函数 处理事件

  /**
   * 页面的初始数据
   */
  data: {
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  
    this.setData({
      posts_key: postsData.postList
      })
  }
})