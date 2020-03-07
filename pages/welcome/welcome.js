Page({
  onTap: function() {
      // wx.navigateTo({
      //   url: '../posts/posts'
      // })

    wx.redirectTo({
      url: '../posts/posts',
    })

    // 路由API
    wx.switchTab({
      url: '../posts/posts'
    })
  },
})