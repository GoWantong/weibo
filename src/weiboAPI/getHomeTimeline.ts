import axios from 'axios';

export type HomeTimelineConfig = {
  access_token: string, // 采用OAuth授权方式为必填参数，OAuth授权后获得。
  since_id?: number, // 若指定此参数，则返回ID比since_id大的微博（即比since_id时间晚的微博），默认为0。
  max_id?: number, // 若指定此参数，则返回ID小于或等于max_id的微博，默认为0。
  count?: number, // 单页返回的记录条数，最大不超过100，默认为20。
  page?: number, // 返回结果的页码，默认为1。
  base_app?: number, // 是否只获取当前应用的数据。0为否（所有数据），1为是（仅当前应用），默认为0。
  feature?: 0 | 1 | 2 | 3 | 4, // 过滤类型ID，0：全部、1：原创、2：图片、3：视频、4：音乐，默认为0。
  trim_user?: 0 | 1, // 返回值中user字段开关，0：返回完整user字段、1：user字段仅返回user_id，默认为0。
};

/**
 * 获取当前登录用户及其所关注（授权）用户的最新微博
 * @param {Object} 请求参数
 */
function getHomeTimeline(params: HomeTimelineConfig) {
  const config = Object.assign({}, params);
  return axios({
    url: 'https://api.weibo.com/2/statuses/home_timeline.json',
    method: 'get',
    params: config,
  });
}

export default getHomeTimeline;
