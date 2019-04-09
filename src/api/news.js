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
    return res;
  });
}
/**
 * 上拉加载新闻
 * @param {Object} 请求参数对象
 */
function loadNewsByPullUp({ channel, startkey, pgnum, idx }) {
  return WxRequest.req(Config.pullUpUrl, {
    type: channel,
    startkey: startkey,
    newsnum: 20,
    qid: Config.qid,
    readhistory: '',
    idx: idx || 1,
    recgid: uid,
    pgnum: pgnum,
    os: 'iOS 10.0.1'
  }).then(res => {
    return res;
  });
}
/**
 * 下拉加载新闻
 * @param {Object} 请求参数对象
 */
function loadNewsByPullDown({ channel, startkey, lastkey, pgnum, idx }) {
  return WxRequest.req(Config.pullDownUrl, {
    type: channel,
    startkey: startkey,
    lastkey: lastkey,
    pgnum: pgnum || -1,
    zdnews: '',
    idx: '' + (idx || 0),
    readhistory: '',
    recgid: uid,
    qid: Config.qid,
    os: 'iOS 10.0.1'
  }).then(res => {
    return res;
  });
}

module.exports = {
  loadNews,
  loadNewsByPullDown,
  loadNewsByPullUp
};
