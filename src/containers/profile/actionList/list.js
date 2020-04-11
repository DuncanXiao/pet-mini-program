const prePath = '../../../../../'

export default [
  {
    title: '我的帖子',
    actions: [
      {
        text: '发表的',
        icon: require('@/static/images/like'),
        redirect: function () {
          const url = `${prePath}pages/cloudRaiseNews/main`
          wx.navigateTo({ url })
        }
      }, {
        text: '收藏的',
        icon: require('@/static/images/like'),
        redirect: function () {
          const url = `${prePath}pages/cloudRaiseNews/main`
          wx.navigateTo({ url })
        }
      }, {
        text: '回复的',
        icon: require('@/static/images/like'),
        redirect: function () {
          const url = `${prePath}pages/cloudRaiseNews/main`
          wx.navigateTo({ url })
        }
      }
    ]
  }, {
    title: '活动',
    actions: [
      {
        text: '报名的',
        icon: require('@/static/images/like'),
        redirect: function () {
          const url = `${prePath}pages/cloudRaiseNews/main`
          wx.navigateTo({ url })
        }
      }, {
        text: '发起的',
        icon: require('@/static/images/like'),
        redirect: function () {
          const url = `${prePath}pages/cloudRaiseNews/main`
          wx.navigateTo({ url })
        }
      }
    ]
  }, {
    title: '商城订单',
    actions: [
      {
        text: '待付款',
        icon: require('@/static/images/like'),
        redirect: function () {
          const url = `${prePath}pages/mallOrder/main?state=pendingPayment`
          wx.navigateTo({ url })
        }
      }, {
        text: '待收获',
        icon: require('@/static/images/like'),
        redirect: function () {
          const url = `${prePath}pages/mallOrder/main?state=pendingReceived`
          wx.navigateTo({ url })
        }
      }, {
        text: '已完成',
        icon: require('@/static/images/like'),
        redirect: function () {
          const url = `${prePath}pages/mallOrder/main?state=afterSale`
          wx.navigateTo({ url })
        }
      }, {
        text: '售后',
        icon: require('@/static/images/like'),
        redirect: function () {
          const url = `${prePath}pages/mallOrder/main?state=completed`
          wx.navigateTo({ url })
        }
      }
    ]
  }, {
    title: '养宠知识',
    actions: [
      {
        text: '收藏的',
        icon: require('@/static/images/like'),
        redirect: function () {
          const url = `${prePath}pages/cloudRaiseNews/main`
          wx.navigateTo({ url })
        }
      }, {
        text: '回复的',
        icon: require('@/static/images/like'),
        redirect: function () {
          const url = `${prePath}pages/cloudRaiseNews/main`
          wx.navigateTo({ url })
        }
      }, {
        text: '订单',
        icon: require('@/static/images/like'),
        redirect: function () {
          const url = `${prePath}pages/cloudRaiseNews/main`
          wx.navigateTo({ url })
        }
      }
    ]
  }
]
