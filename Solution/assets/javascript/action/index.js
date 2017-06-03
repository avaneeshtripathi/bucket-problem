export function checkAction (formData, targetBucket) {
  return {
    type: 'MOVE_ITEMS',
    targetBucket: targetBucket,
    formData: formData
  }
}
