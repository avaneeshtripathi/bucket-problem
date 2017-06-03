import underscore from 'underscore';

export function getDefaultData () {
  return [
    {id: 1, name: 'Item 1', bucket: 1},
    {id: 2, name: 'Item 2', bucket: 1},
    {id: 3, name: 'Item 3', bucket: 2},
    {id: 4, name: 'Item 4', bucket: 2},
    {id: 9, name: 'Item 9', bucket: 1},
    {id: 10, name: 'Item 10', bucket: 1},
    {id: 11, name: 'Item 11', bucket: 1}
  ];
};

export function getBucketValues (listData) {
  let bucketValues = underscore.groupBy(listData, 'bucket');
  return bucketValues;
};

export function getUpdatedData (listData, values, targetBucket) {
  listData.map((row) => {
    row.bucket = underscore.contains(values, row.id.toString()) ? targetBucket : row.bucket;
  })
  return listData;
};
