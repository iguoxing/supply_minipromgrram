import Notify from '@vant/weapp/notify/notify';
// pages/records/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    records: [
      {
        contract_number:'CG001',
        receive_company: '交付单位',
        receive_leader: '赵四',
        leader: '张三',
        sign_date: '2022.6.1',
        sign_status: '签订',
        show: false,
        fileList: [], // 采购合同附件
        fileList2: [], // 采购证明附件
        fileList3: [], // 付款证明附件
      },
      {
        contract_number:'CG002',
        receive_company: '交付单位',
        receive_leader: '赵四四',
        leader: '张三三',
        sign_date: '2022.2.1',
        sign_status: '状态',
        show: false,
        fileList: [], // 采购合同附件
        fileList2: [], // 采购证明附件
        fileList3: [], // 付款证明附件
      },
    ],
    active: 'records',
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
      url: '../createBuy/index',
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