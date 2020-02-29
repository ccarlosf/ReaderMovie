// pages/posts/posts.js
Page({
  //产生师件 捕捉事件 回调函数 处理事件

  /**
   * 页面的初始数据
   */
  data: {
    date: 'Nov  18  2020',
    title: '正是虾肥蟹壮时',
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var posts_content = [{
      date: "Sep 18 2016",
      title: "正是虾肥蟹壮时",
      imgSrc: "/images/post/crab.png",
      avatar: '/images/avatar/1.png',
      content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
      reading: '112',
      collection: '96'
    }, {
      date: "Nov 20 2016",
      title: "比利·林恩的中场故事",
      imgSrc: "/images/post/bl.png",
      avatar: "/images/avatar/2.png",
      content: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。",
      reading: '96',
      collection: '112',
    }]

    this.setData({
      posts_key:posts_content
      })
  }
})