// pages/vip/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 'vip',
    type: '1' // 1是包月，2是时长卡
  },
  onChange(event) {
    let name = event.detail
    this.setData({ active:  name});
    // console.log('../'+ name +'/index' )
    wx.redirectTo({
      url: '../'+ name +'/index',
    })
  },
  selectType(event){
    // console.log(event.currentTarget.dataset.type)
    this.setData({ type:  event.currentTarget&& event.currentTarget.dataset&& event.currentTarget.dataset.type});
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})