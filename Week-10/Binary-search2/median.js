function findMedianSortedArrays(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const isEven = totalLength % 2 === 0;
    const middle = Math.floor(totalLength / 2);
  
    let left = 0;
    let right = nums1.length - 1;
  
    while (left <= right) {
      const partition1 = Math.floor((left + right) / 2);
      const partition2 = middle - partition1;
  
      const maxX1 = partition1 === -1 ? Number.NEGATIVE_INFINITY : nums1[partition1];
      const minX1 = partition1 === nums1.length - 1 ? Number.POSITIVE_INFINITY : nums1[partition1 + 1];
  
      const maxY2 = partition2 === -1 ? Number.NEGATIVE_INFINITY : nums2[partition2];
      const minY2 = partition2 === nums2.length - 1 ? Number.POSITIVE_INFINITY : nums2[partition2 + 1];
  
      if (maxX1 <= minY2 && maxY2 <= minX1) {
        if (isEven) {
          return (Math.max(maxX1, maxY2) + Math.min(minX1, minY2)) / 2;
        } else {
          return Math.max(maxX1, maxY2);
        }
      } else if (maxX1 > minY2) {
        right = partition1 - 1;
      } else {
        left = partition1 + 1;
      }
    }
  }
  
  const nums1 = [1, 3];
  const nums2 = [2];
  const median = findMedianSortedArrays(nums1, nums2);
  console.log(`The median is: ${median}`);