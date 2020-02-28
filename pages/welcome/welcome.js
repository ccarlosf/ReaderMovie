Page({
  onTap: function() {
      wx.navigateTo({
        url: '../posts/posts'
      })

    // wx.redirectTo({
    //   url: '../posts/posts',
    // })
        // console.log('onTap')
  },

  onUnload:function(){
    console.log('welcome page is unload')
  },

  onHide:function(){
    console.log('welcome page is onHide')
  }
})