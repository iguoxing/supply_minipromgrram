import Notify from '@vant/weapp/notify/notify';
// pages/records/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    records: [
      {
        order_leader:'1', //  订单负责人ID
        demand_id: '1', //产品需求ID
        device_number: 'GFD21', // 设备型号
        device_unit: '￥100', // 设备单价
        device_account: '2', //设备数量
        show: false,
      },
      {
        order_leader:'11', //  订单负责人ID
        demand_id: '12', //产品需求ID
        device_number: 'GFD2131', // 设备型号
        device_unit: '￥1000', // 设备单价
        device_account: '6', //设备数量
        show: false,
      },
    ],
    active: 'order',
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
      url: '../createOrder/index',
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