const app = getApp()

Page({
    data: {
        userInfo: {},
        hasUserInfo: false
    },
    //事件处理函数
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        }
    },
    // 显示用户头像
    getUserInfo: function (e) {
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    // 页面跳转
    navigateToOrder: function () {
        wx.navigateTo({ url: '../order/order' })
    },
    navigateToSercice: function () {
        wx.navigateTo({ url: '../custonSercice/custonSercice' })
    }, 
    navigateToHelpcenter: function () {
        wx.navigateTo({ url: '../helpCenter/helpCenter' })
    },
    navigateToMiaosha:function(){
        wx.navigateTo({ url: '../miaosha/shoplist/shoplist' })
    } ,
    // 获取地址信息
    getUseraAddress: function () {
        wx.chooseAddress({
            success: function (res) {
                console.log(res.userName)
                console.log(res.postalCode)
                console.log(res.provinceName)
                console.log(res.cityName)
                console.log(res.countyName)
                console.log(res.detailInfo)
                console.log(res.nationalCode)
                console.log(res.telNumber)
            }
        })
    },  
    // 未开发功能提示
    toastUsermember: function () {
        wx.showToast({
            title: '码农正在开发',
            icon: 'loading',
            duration: 2000
        })
    }
})