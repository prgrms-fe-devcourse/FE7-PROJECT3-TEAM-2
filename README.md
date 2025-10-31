# FE7-PROJECT3-TEAM-2


# 커밋 컨벤션

### 기본 형식
```
<type>(<scope>): <subject>
```
<type>: 커밋의 성격 (필수)
<scope>: 변경된 범위 (옵션)
<subject>: 짧은 설명 (필수)

### 예시 구조
```
feat(optional): 새로운 기능 설명
```
- feat: 로그인 기능 추가 -> 새 로그인 기능 추가
- feat(auth): add JWT refresh token logic -> auth 영역에 refresh token 기능 추가

### 커밋 타입
| Widget    | Description                                    |
| ---------- | ------------------------------------------------------------------------------ |
| feat | 새로운 기능 추가                |
| fix | 버그 수정                |
| chore | 빌드, 설정, 환경 등 코드 외적 변경                |
| docs | 문서 수정 (README, 주석, JSDOC)                |
| style | prettier 코드 포맷팅, 세미콜론, 들여쓰기 등 로직 변화 없음                |
| refactor | 코드 리팩토링(기능 변화 없음)                |
