Page({
  data: {},
  onLoad: function() {
    console.log('窝草');
  },
  takePhoto() {
    const ctx = swan.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: res => {
        this.setData({
          src: res.tempImagePath
        });
      }
    });
  },
  error(e) {
    console.log(e.detail);
  }
});
