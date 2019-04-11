const Utils = require('../../utils/index.js');

Page({
  data: {
    uk: '',
    imgs: [
      'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=955704975,2507359007&fm=173&s=32A2DC4D4E12344D4899DCB80300C013&w=218&h=146&img.JPEG',
      'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=984374101,2617012451&fm=173&s=20A24CB176BA0D882C042D700300C092&w=218&h=146&img.JPEG',
      'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1663594687,1286054050&fm=173&s=EAA608C484D2006B5680719A0300E0C1&w=218&h=146&img.JPEG'
    ]
  },
  onLoad: function(options) {
    console.log(options);
    this.setData({
      uk: options.url
    });
  },
  onReady() {
    this.videoCtx = swan.createVideoContext('myVideo');
  },
  play() {
    this.videoCtx.play();
  },
  pause() {
    this.videoCtx.pause();
  }
});
