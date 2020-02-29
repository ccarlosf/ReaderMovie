Page({
  onTap: function() {
      // wx.navigateTo({
      //   url: '../posts/posts'
      // })

    wx.redirectTo({
      url: '../posts/posts',
    })

    
    // 冒泡和非冒泡
  },

  // onCatainerTap:function(){
  //   console.log('Catainer Tap')
  // },

  // onSubTap:function(){
  //   console.log('Sub Tap')
  // },

  onUnload:function(){
    // console.log('welcome page is unload')
  },

  onHide:function(){
    // console.log('welcome page is onHide')
  }
})