
import api from '@/services';

export const getAuthorization = async () => {
  try {
    const { data } = await api.checkQywxAuthorize();
    if (data && !data.is_kyy) {
      const result = await api.getQywxConfig({
        wechat_authorizer_id: data.authorizer_id[0],
        url: window.location.href,
      });
      if (window.wx) {
        wx.agentConfig({
          corpid: result.data.corpid, // 必填，企业微信的corpid，必须与当前登录的企业一致
          agentid: result.data.agentid, // 必填，企业微信的应用id （e.g. 1000247）
          timestamp: result.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: result.data.oneceStr, // 必填，生成签名的随机串
          signature: result.data.signature, // 必填，签名，见附录-JS-SDK使用权限签名算法
          jsApiList: ['selectExternalContact'], //必填，传入需要使用的接口名称
          fail: function (res) {
            if (res.errMsg.indexOf('function not exist') > -1) {
              console.warn('浏览器版本过低请升级');
            }
          },
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
};
