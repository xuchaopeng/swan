const WxRequest = require('./request.js');
const Config = require('../config/index.js');
const Utils = require('../utils/index.js');

const uid = Utils.getUserId();
/**
 * 加载新闻列表（refresh）
 * @param {String} channel 频道（默认：'toutiao'）
 */
function loadNews(channel = 'toutiao') {
  return WxRequest.req(Config.refreshUrl, {
    type: channel,
    recgid: uid, // 用户ID
    qid: Config.qid,
    picnewsnum: 1,
    readhistory: '',
    zdnews: '',
    idx: 0,
    pgnum: 1,
    os: 'iOS 10.0.1'
  }).then(res => {
    console.log('tuqian', res);
    return res;
  });
}

module.exports = {
  loadNews
}