const Api = require('../../api/index.js');
const Config = require('../../config/index.js');
const Utils = require('../../utils/index.js');

Page({
  data: {
    newsList: [],
    channels: [],
    loading: false,
    currentChannel: 'toutiao',
    startkey: '',
    lastkey: '',
    idx: 1
  },
  onLoad: function () {
    this.loadNews();
  },
  loadNews: function () {
    this.setData({
      loading: true
    });
    this.setData({
      channels: Config.channels.up
    });
    Api.News.loadNews(this.data.currentChannel).then(res => {
      this.setData({
        loading: false,
        newsList: res.data,
        startkey: res.endkey,
        pgNum: 1,
        idx: res.data.length + 1
      });
    }).catch(res => {
      this.setData({
        loading: false
      });
    })
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})