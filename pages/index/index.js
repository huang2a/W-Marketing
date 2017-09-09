//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        shareData: {
            title: '社群营销助手，你的电商运营好助手。',
            desc: '我正在用社群营销助手来运营自己的微信社群，不仅提高了社群活跃度还带动了销量。',
            path: '/pages/index/index'
        },
    },
  //事件处理函数
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo){
        //更新数据
        that.setData({
            userInfo:userInfo
        })
        })
    },
    //   分享给好友
    onShareAppMessage: function () {
        return this.data.shareData
    },
    toastDevelopimg: function () {
        wx.showToast({
            title: '码农正在开发',
            icon: 'loading',
            duration: 2000
        })
    }
})
