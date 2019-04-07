/**
 * promise对swan.requrest进行封装
 * @param {String} url  请求地址
 * @param {Object} data 参数对象
 * @param {String} method 请求类型（GET POST）
 */
function req(url, data, method = 'GET') {
  return new Promise((resolve, reject) => {
    swan.request({
      url: url,
      data: data,
      method: method,
      dataType: 'json',
      success: function (res) {
        try {
          var d = res.data;
          if (typeof d == 'string') {
            var reg = /^\w+\(({[^()]+})\)$/;
            var matches = d.match(reg);
            if (matches) {
              resolve(JSON.parse(matches[1]));
            } else {
              var xcp = d.substring(6, d.length - 2);
              resolve(JSON.parse(xcp));
            }
          }
        } catch (e) {
          reject(e);
        }
      },
      error: function (res) {
        reject(res);
      }
    })
  })
}

module.exports = {
  req
}