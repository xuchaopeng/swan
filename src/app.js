App({
  onLaunch: function () {
    console.log('SWAN launch');
  },
  onShow: function () {
    console.log('SWAN展现');
  },
  onHide: function () {
    console.log('SWAN当前处于后台');
  },
  onError: function () {
    console.log('SWAN发生错误');
  },
  globalData: 'SWAN'
});