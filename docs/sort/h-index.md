# H-index

[H-index - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42747)

```py
def solution(citations):
    citations.sort()
    l = len(citations)
    for i in range(l):
        print( l, i)
        if citations[i] >= l - i: # 인용된 횟수 >= 인용된 논문 개수
            return l - i
    return 0
```
