module.exports = {
  qid: 'baidu',
  refreshUrl: 'https://toutiao.eastday.com/toutiao_h5/RefreshJP',//新聞接口
  channels: {
    up: [
      {
        name: 'toutiao',
        value: '推荐',
        active: true
      },
      {
        name: 'junshi',
        value: '军事'
      },
      {
        name: 'yule',
        value: '娱乐'
      },
      {
        name: 'shehui',
        value: '社会'
      },
      {
        name: 'tiyu',
        value: '体育'
      },
      {
        name: 'jiankang',
        value: '健康'
      },
      {
        name: 'lishi',
        value: '人文'
      },
      {
        name: 'guoji',
        value: '国际'
      },
      {
        name: 'caijing',
        value: '财经'
      },
      {
        name: 'keji',
        value: '科技'
      }
    ]
  }
}