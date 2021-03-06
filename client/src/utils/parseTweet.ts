import { EmotionsState } from '../redux/modules/emotions';

const urlRe = /(https?:\/\/((\w|=|\?|\.|\/|&|-)+))/gim;
const atRe = /@([(\u3000-\u9fff)\w-]+)/gim;
const emotionRe = /\[([\u3000-\u9fff\w]+)\]/gim;

// const text = "【mysql 证明为什么用limit时，offset很大会影响性能】http://t.cn/R63lloW，分享自 @SegmentFault \n\n像上面这样，需要查询300005次索引节点，查询300005次聚簇索引的数据，最后再将结果过滤掉前300000条，取出最后5条。MySQL耗费了大量随机I/O在查询聚簇索引的数据上，而有300000次随机I/O查询到的数...全文： http://m.weibo.cn/2036070420/4153336640861871 ";

export function parseTweet(text: string, emotions: EmotionsState) {
  let data = text.replace(urlRe, '<a href="$1">链接</a>'); // 替换链接
  data = data.replace(atRe, '<a href="/$1">@$1</a>'); // 替换@user
  const emotionObj = emotions.entities.emotions;
  const emotionKeyArr = emotions.result;
  // console.log(emotionKeyArr, emotionObj);
  if (emotionObj && emotionKeyArr) {
    let newData = data.replace(emotionRe, (match, p1) => {
      const index = emotionKeyArr.indexOf(p1);
      if (index !== -1) {
        return `<img src=${emotionObj[p1].url} alt=${match} />`;
      }
      return match;
    });
    return newData;
  }
  return data;
}
