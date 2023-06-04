import Notify from '@vant/weapp/notify/notify';
// pages/records/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    records: [
      {
        order_id:'1', //  订单ID
        demand_id: '2', //产品需求ID
        deliverer_id: '3', // 发货人ID
        receiver_id: '4', // 收货人ID
        receiver_contact: '15652621358', //收货人联系方式
        deliver_date: '2022.6.1', //发货日期
        deliver_address: '收货地址', // 收货地址
        show: false,
      },
      {
        order_id:'12', //  订单ID
        demand_id: '21', //产品需求ID
        deliverer_id: '31', // 发货人ID
        receiver_id: '41', // 收货人ID
        receiver_contact: '15652621338', //收货人联系方式
        deliver_date: '2022.4.1', //发货日期
        deliver_address: '收货地址2', // 收货地址
        show: false,
      },
    ],
    active: 'user',
  },
  onChange(event) {
    let name = event.detail
    this.setData({ active:  name});
    wx.redirectTo({
      url: '../'+ name +'/index',
    })
  },
  showFile(){
    console.log('../index' )
    Notify({ type: 'warning', message: 'TODO 展示文件内容' });
  },
  goToCreate() {
    wx.navigateTo({
      url: '../createSend/index',
    })
  },
  goToHome(){
    wx.redirectTo({
      url: '../index/index',
    })
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