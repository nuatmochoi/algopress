# N으로 표현

[N으로 표현 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42895)

```python
def solution(N, number):
    arr = [set() for _ in range(8)]
    for idx, i in enumerate(arr):
        i.add(int(str(N) * (idx+1)))
    for i in range(1, len(arr)):
        for j in range(i):
            for x in arr[j]:
                for y in arr[i-j-1]:
                    if y == 0:
                        arr[i].update([x + y, x - y, x * y])
                    else:
                        arr[i].update([x + y, x - y, x * y, x // y])
        if number in arr[i]:
            return i + 1
    return -1
```