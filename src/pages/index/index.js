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
    idx: 1,
    pgNum: 1, // 页码
    idxForPullDown: -1, // 新闻索引（下拉加载）
    pgNumForPullDown: -1 // 新闻页码（下拉加载）
  },
  onLoad: function() {
    this.loadNews();
  },
  loadNews: function() {
    this.setData({
      loading: true,
      channels: Config.channels.up
    });
    Api.News.loadNews(this.data.currentChannel)
      .then(res => {
        this.setData({
          loading: false,
          newsList: res.data,
          startkey: res.endkey,
          pgNum: 1,
          idx: res.data.length + 1
        });
      })
      .catch(res => {
        this.setData({
          loading: false
        });
      });
  },
  bindNewsTap: function(e) {
    const { type, url, ishot, recommendtype, ctg } = e.currentTarget.dataset;
    let urlid = url.substring(url.lastIndexOf('/') + 1, url.length - 5);
    if (ctg == 'video') {
    } else {
      swan.navigateTo({
        url: `../ndetail/ndetail?url=${urlid}&type=${type}&ishot=${ishot}&recommendtype=${recommendtype}&f=${type}`
      });
    }
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {
    swan.showNavigationBarLoading(); //在标题栏中显示加载
    const { currentChannel, startkey, lastkey, pgNumForPullDown, idxForPullDown, newsList } = this.data;
    Api.News.loadNewsByPullDown({
      channel: currentChannel,
      startkey: startkey,
      lastkey: lastkey,
      pgnum: pgNumForPullDown,
      idx: idxForPullDown
    }).then(res => {
      let newData = res.data || [];
      this.setData({
        newsList: newData.concat(newsList),
        startkey: res.endkey,
        lastkey: res.newkey,
        pgNumForPullDown: pgNumForPullDown ? pgNumForPullDown - 1 : -1,
        idxForPullDown: (idxForPullDown ? idxForPullDown : 0) - newData.length
      });
      swan.hideNavigationBarLoading(); //完成停止加载
      swan.stopPullDownRefresh(); //停止下拉刷新
    });
  },
  onReachBottom: function() {
    const { currentChannel, startkey, pgNum, idx, newsList } = this.data;
    Api.News.loadNewsByPullUp({
      channel: currentChannel,
      startkey: startkey,
      pgnum: pgNum + 1,
      idx: idx
    }).then(res => {
      let ndata = res.data || [];
      this.setData({
        newsList: newsList.concat(ndata),
        startkey: res.endkey,
        pgNum: pgNum + 1,
        idx: idx + ndata.length
      });
    });
  },
  bindChannelsClick: function(e) {
    if (this.data.loading) {
      return false;
    }
    console.log(e.target.dataset.type);
    const channels = Config.channels.up;
    let currentChannel = e.target.dataset.type;
    channels.forEach(function(ele, i) {
      if (ele.name === currentChannel) {
        ele.active = true;
      } else {
        ele.active = false;
      }
    });

    this.setData({
      currentChannel: currentChannel,
      channels: channels,
      newsList: [],
      idx: 1,
      startkey: '',
      lastKey: '',
      pgNumForPullDown: -1,
      idxForPullDown: -1,
      pgNum: 1
    });
    swan.pageScrollTo({
      scrollTop: 0,
      duration: 0
    });
    this.loadNews();
  },
  onShareAppMessage: function() {}
});
