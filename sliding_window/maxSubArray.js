// in this problem we have to find the max subarray sum using sliding window pattern
// this pattern is called sliding window which we extract subset of larger array


console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19

function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let currentRunningSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  currentRunningSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    currentRunningSum = currentRunningSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, currentRunningSum);
  }
  return maxSum || null;
}



