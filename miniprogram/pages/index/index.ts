import Dialog from '@vant/weapp/dialog/dialog';

const app = getApp<IAppOption>()


Page({
  data: {
    active: 'index',
    show: false,
  },
  onChange(event) {
    let name = event.detail
    this.setData({ active:  name});
    // console.log('../'+ name +'/index' )
    wx.redirectTo({
      url: '../'+ name +'/index',
    })
  },
  // 事件处理函数
  bindViewUpload() {
    wx.navigateTo({
      url: '../upload/music',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    let _this = this
    if(wx.getStorageSync("token")){
      wx.request({
        url: 'http://localhost:3000/v1/user/getinfo',
        method: 'POST',
        data: {
          "token": wx.getStorageSync("token"),
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          const {name, head} = res.data;
          if(!name || !head){
            _this.setData({ show:  true});
          }
          wx.setStorageSync("userinfo",JSON.stringify(res.data))
        }
      })
    }
  },
  goToHeadname(event){
    wx.redirectTo({
      url: '../headname/index',
    })
  },
  onClose() {
    this.setData({ show: false });
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
