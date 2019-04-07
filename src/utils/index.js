/**
 * 获取用户id
 *
 */
function getUserId() {
  try {
    var uid = swan.getStorageSync('USER_ID');
    if (uid) {
      return uid;
    } else {
      // 当前时间的时间戳 + 4位数的随机数
      uid =
        +new Date() +
        Math.random()
          .toString(10)
          .substring(2, 6);
      swan.setStorageSync('USER_ID', uid);
    }
  } catch (e) { }
}

module.exports = {
  getUserId
}