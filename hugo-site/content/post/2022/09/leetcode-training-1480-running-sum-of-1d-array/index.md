---
title: LeetCode Training - 1480 - Running Sum of 1d Array
date: 2022-09-01 06:00:02
tags: [
  "LeetCode",
  "Problem Solving",
  "Tutorial",
  "TypeScript"
]
categories: [
  "LeetCode",
  "Problem Solving",
  "Tutorial",
  "TypeScript"
]
desc: LeetCode solution explanation for problem 1480 - the running sum of a 1d array.
draft: true
---

In this post, we will review LeetCode problem `Running Sum of 1d Array`, and go over one possible solution.


https://dev.to/seanpgallivan/solution-running-sum-of-1d-array-34na

## Problem Summary

Level: Easy
Title: 1480. Running Sum of 1d Array
Link: [https://leetcode.com/problems/running-sum-of-1d-array/](https://leetcode.com/problems/running-sum-of-1d-array/)

### Description

Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`.

Return the running sum of `nums`.

**Example 1:**

```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

**Example 2:**

```
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```

**Example 3:**

```
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
```

**Constraints:**

* `1 <= nums.length <= 1000`
* `-10^6 <= nums[i] <= 10^6`

## Solution

```typescript
function runningSum(nums: number[]): number[] {
  const sums = [];

  // handle no values provided
  if (nums.length === 0) return sums;

  // handle cases of only 1 value
  sums.push(nums[0]);
  if (nums.length === 1) return sums;

  // handle remaining cases using previous values
  for (let i = 1; i < nums.length; i += 1) {
    sums.push(sums[i - 1] + nums[i]);
  }

  return sums;
};
```
