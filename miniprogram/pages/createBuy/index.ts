// pages/createBuy/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contract_number:'',
    receive_company: '',
    receive_leader: '',
    leader: '',
    sign_date: '',
    sign_status: '',
    show: false,
    fileList: [], // 采购合同附件
    fileList2: [], // 采购证明附件
    fileList3: [], // 付款证明附件
  }, 
  showPopup() {
    this.setData({ show: true });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}-${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      sign_date: this.formatDate(event.detail),
    });
  },
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  onChangeContractNumber(event) {
    this.setData({ contract_number: event.detail });
  },
  onChangeReceiveCompany(event) {
    this.setData({ receive_company: event.detail });
  },
  onChangeReceiveLeader(event) {
    this.setData({ receive_leader: event.detail });
  },
  onChangeLeader(event) {
    console.log(event.detail);
    this.setData({ leader: event.detail });
  },
  onChangeSignStatus(event) {
    console.log(event.detail);
    this.setData({ sign_status: event.detail });
  },
  save(){
    console.log(this.data)
    wx.request({
      url: 'http://47.93.228.47:8000/demand/save',
      method: 'POST',
      data: this.data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res)
        wx.redirectTo({
          url: '../records/index',
        })
      }
    })
    
  },
  afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      },
    });
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