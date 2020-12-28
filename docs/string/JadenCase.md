# JadenCase 문자열 만들기 - 프로그래머스

[JadenCase 문자열 만들기 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12951#)

```py
def solution(s):
    spaces, ret = [], ""
    for idx, char in enumerate(s[:-2]): # 마지막 공백 처리를 위함
        if char == ' ' and s[idx + 1].isalpha():
            spaces.append(idx + 1)
        elif char.isalpha() and idx == 0:
            spaces.append(idx)
    s = s.lower()
    for i in range(len(s)):
        if i in spaces:
            ret += chr(ord(s[i]) - 32)
        else:
            ret += s[i]
    return ret
```
