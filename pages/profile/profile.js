// pages/profile/profile.js
Page({
    data: {
        orderList: [
            {icon: 'order.png', info: '订单'},
            {icon: 'coupon.png', info: '优惠券'},
        ],
        serviceList: [
            {icon: 'rowing.png', info: '我的赛艇'},
            {icon: 'term.png', info: '我的赛队'},
        ],
        others: [
            {icon: 'feedback.png', info: '意见反馈'},
            {icon: 'call.png', info: '联系我们'},
            {icon: 'setting.png', info: '设置'},
        ]
    },
    onLoad: function (options) {

    },
})