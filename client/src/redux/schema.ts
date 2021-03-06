import { schema } from 'normalizr';

// tweet
export const user = new schema.Entity('users');
export const retweet = new schema.Entity('retweet', {
  user
});
export const tweet = new schema.Entity('tweets', {
  user,
  retweeted_status: retweet
});
export const timeline = new schema.Object({
  statuses: [tweet]
});

// emotion
export const emotion = new schema.Entity('emotions', undefined, {
  idAttribute: emo => emo.value.slice(1, -1)
});
export const emotionList = new schema.Array(emotion);
