// pages/user/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 'user',
    showShare: false,
    userdata: {},
    options: [
      { name: '微信', icon: 'wechat', openType: 'share' },
      // { name: '微博', icon: 'weibo' },
      // { name: '复制链接', icon: 'link' },
      // { name: '分享海报', icon: 'poster' },
      // { name: '二维码', icon: 'qrcode' },
    ],
  },
  onChange(event) {
    let name = event.detail
    this.setData({ active:  name});
    wx.redirectTo({
      url: '../'+ name +'/index',
    })
  },
  goToRecords(){
    wx.redirectTo({
      url: '../records/index',
    })
  },
  goToOrder(){
    wx.navigateTo({
      url: '../order/index',
    })
  },
  goToService(){
    wx.navigateTo({
      url: '../service/index',
    })
  },
  onClick(event) {
    this.setData({ showShare: true });
  },onClose() {
    this.setData({ showShare: false });
  },

  onSelect(event) {
    // Toast(event.detail.name);
    this.onClose();
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
    console.info('r--')
    const r = JSON.parse(wx.getStorageSync("userinfo"))
    console.info(r)
    this.setData({
      userdata: r
    })
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