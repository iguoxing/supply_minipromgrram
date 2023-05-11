// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    function getHeadName(token){
      wx.request({
        url: 'http://localhost:3000/v1/user/getinfo',
        method: 'POST',
        data: {
          "token": token,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          wx.setStorageSync("userinfo",JSON.stringify(res.data))
        }
      })
    }

    // 登录
    wx.login({
      success: res => {
        console.log('code---',res.code)
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if(!wx.getStorageSync("token")){
          wx.request({
            url: 'http://localhost:3000/v1/token', //仅为示例，并非真实的接口地址
            method: 'POST',
            data: {
              "type":100,
              "account":res.code
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              console.log(res.data.token)
              wx.setStorageSync("token",res && res.data && res.data.token)
              getHeadName(res && res.data && res.data.token)
              wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 2000
              })
              
            }
          })
        }
        // wx.getUserInfo({
        //   success: function(res) {
        //     var userInfo = res.userInfo
        //     var nickName = userInfo.nickName
        //     var avatarUrl = userInfo.avatarUrl
        //     var gender = userInfo.gender //性别 0：未知、1：男、2：女
        //     var province = userInfo.province
        //     var city = userInfo.city
        //     var country = userInfo.country
        //     console.info('--res--')
        //     console.info(res)
        //     console.info('--res--')
        //   }
        // })
      },
    })
  },
})