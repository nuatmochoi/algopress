# N-Queen - SWEA

[N-Queen - SWEA](https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV7GKs06AU0DFAXB)

```py
def possible(q, col):
    cur_r = len(q)
    for r in range(cur_r):
        if q[r] == col or abs(q[r] - col) == cur_r - r:
            return False
    return True


def dfs(n, row, queen, ret):
    if row == N:
        ret.append(queen[:])
        return
    for c in range(N):
        if possible(queen, c):
            queen.append(c)
            dfs(n, row + 1, queen, ret)
            queen.pop()


T = int(input())
for test_case in range(1, T + 1):
    N = int(input())
    ret = []
    dfs(N, 0, [], ret)
    print("#" + str(test_case) + " " + str(len(ret)))
```
