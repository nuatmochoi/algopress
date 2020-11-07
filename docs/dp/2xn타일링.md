# 2 x n 타일링

[2 x n 타일링](https://programmers.co.kr/learn/courses/30/lessons/12900)

```py
def solution(n):
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2
    for i in range(3, n + 1):
        dp[i] = dp[i - 2] + dp[i - 1]
        dp[i] %= 1000000007
    return dp[-1]
```
