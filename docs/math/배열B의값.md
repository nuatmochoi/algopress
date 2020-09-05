# 배열 B의 값 - BOJ

[배열 B의 값 - BOJ](https://www.acmicpc.net/problem/16971)

0, 1, 2, 3행에서 1,2 행을 바꿔도 값이 바뀌지 않을 것임.
따라서 중간 행 중에서 최소값과 0행, 마지막 행 중 행을 하나 교환하거나
열에서도 똑같은 작업을 해서 최대값을 구하면 된다.

```py
def calculate(board):
    _sum = 0
    for i in range(N - 1):
        for j in range(M - 1):
            _sum += board[i][j] + board[i + 1][j] + board[i + 1][j + 1] + board[i][j + 1]
    return _sum

def newmap(x, y, rc): # rc -> r인지 c인지
    b = [[0] * M for _ in range(N)]
    for i in range(N):
        for j in range(M):
            b[i][j] = a[i][j]
    if rc:
        for c in range(M):
            b[x][c], b[y][c] = a[y][c], a[x][c]
    else:
        for r in range(N):
            b[r][x], b[r][y] = a[r][y], a[r][x]
    return b

N, M = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(N)]
row = [0] * N
col = [0] * M
r_min = float('inf')
c_min = float('inf')
min_col, min_row = -1, -1

ret = calculate(a)

# 각 행열 합 계산
for i in range(N):
    for j in range(M):
        row[i] += a[i][j]
        col[j] += a[i][j]

# 최소 크기 행
for r in range(1, N - 1):
    tr = row[r] * 4
    tr -= 2 * (a[r][0] + a[r][M - 1])
    if r_min > tr:
        r_min = tr
        min_row = r

# 최소 크기 열
for c in range(1, M - 1):
    tc = col[c] * 4
    tc -= 2 * (a[0][c] + a[N - 1][c])
    if c_min > tc:
        c_min = tc
        min_col = c

if min_row > 0:
    new = newmap(0, min_row, 1)
    ret = max(ret, calculate(new))
    new = newmap(N - 1, min_row, 1)
    ret = max(ret, calculate(new))

if min_col > 0:
    new = newmap(0, min_col, 0)
    ret = max(ret, calculate(new))
    new = newmap(M - 1, min_col, 0)
    ret = max(ret, calculate(new))

print(ret)
```
