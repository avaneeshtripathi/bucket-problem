import { getDefaultData, getBucketValues, getUpdatedData } from '../utils/utils'

let bucketValues = getBucketValues(getDefaultData());

const payload = {
  listData: getDefaultData(),
  bucket1: bucketValues[1],
  bucket2: bucketValues[2]
}

function groupDataByBucket (listData, formData, targetBucket) {
  const updatedData = getUpdatedData(listData, formData, targetBucket);
  let bucketValues = getBucketValues(updatedData);
  payload.listData = updatedData;
  payload.bucket1 = bucketValues[1];
  payload.bucket2 = bucketValues[2];
  return payload;
}

export default function  bucketItems (state = payload, action) {
  switch (action.type) {
    case 'MOVE_ITEMS':
      groupDataByBucket(payload.listData, action.formData, action.targetBucket);
      return {
        ...payload
      };
    default:
      return {
        ...payload
      };
  }
};
