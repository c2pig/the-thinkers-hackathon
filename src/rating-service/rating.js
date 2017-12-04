import { initialize } from '../utils/store'
import path from 'path'

const store = initialize(path.basename(__dirname));

export const increaseUserRating = async (userId) => {
  const rating = await store.findDocByFieldValue("rating", 'userId', userId);
  if(rating.length === 0) {
    const resultToBe = { userId, rating: 1 };
    const ret = store.addWithId("rating", resultToBe, userId);
    //hacky
    return resultToBe;
  } else {
    let newRating = rating[0].rating + 1;
    const resultToBe = { userId, rating: newRating };
    const ret = store.update("rating", resultToBe, userId);
    //hacky
    return resultToBe;
  }
}

export const getUserRating = (userId) => {
  const result = store.findDocByFieldValue("rating", "userId", userId);
  return result;
}

export const getAllUserRating = () => {
  const result = store.findAll("rating");
  return result;

}
