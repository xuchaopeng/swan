Page({
  data: {
    name: '视频',
    newsList: [
      {
        uk: '123',
        title: 'xcp'
      }
    ]
  },
  onLoad: function() {},
  bindVideoPage: function(e) {
    const { uk } = e.currentTarget.dataset;
    swan.navigateTo({
      url: `../nvideo/nvideo?uk=${uk}`
    });
    console.log(e.currentTarget.dataset);
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});
