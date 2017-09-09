Page({
    data: {
        showTopTips: false,

        date: "2016-09-01",
        time: "12:01",

        imagesfiles: [],

        shareData: {
            title: '社群营销助手，商品活动秒杀程序。',
            desc: '我正在用社群营销助手来运营自己的微信社群，不仅提高了社群活跃度还带动了销量。',
            path: '/pages/miaosha/launch/launch'
        },
        
        isAgree: false
    },
    // 页面教养提示
    showTopTips: function () {
        var that = this;
        this.setData({
            showTopTips: true
        });
        setTimeout(function () {
            that.setData({
                showTopTips: false
            });
        }, 3000);
    },

    // 日期选择
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },
    // 时间选择
    bindTimeChange: function (e) {
        this.setData({
            time: e.detail.value
        })
    },
    // 相关条款
    bindAgreeChange: function (e) {
        this.setData({
            isAgree: !!e.detail.value.length
        });
    },

    // 图片上传
    chooseImage: function (e) {
        var that = this;
        wx.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                that.setData({
                    imagesfiles: that.data.imagesfiles.concat(res.tempFilePaths)
                });
            }
        })
    },
    previewImage: function (e) {
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.imagesfiles // 需要预览的图片http链接列表
        })
    },

    // 页面分享
    onShareAppMessage: function () {
        return this.data.shareData
    }
});

