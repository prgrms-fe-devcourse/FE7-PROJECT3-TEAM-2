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

# 사용법
  

## 🚀 Tailwind CSS 테마 변수 사용법

Tailwind CSS v4.0의 CSS 변수와 `@custom-variant`를 사용하여 라이트/다크 모드를 구현합니다. 모든 색상 정의는 `globals.css` 파일의 `@theme` 블록에 중앙 집중화되어 있습니다.

### 📘 테마 구조

| 구분                     | 파일/코드 위치                                                     | 설명                                                                          |
| ------------------------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| 다크모드                 | `tailwind.css` → `@custom-variant dark (&:where(.dark, .dark *));` | `.dark` 클래스가 있을 때, @theme에서 정의한 색상을 다크모드 색상으로 덮어씌움 |
| 공통 색상                | `tailwind.css` → `@theme` 블록                                     | 테마와 상관없이 사용하는 색상                                                 |
| 라이트모드 색상 (기본값) | `tailwind.css` → `@theme` 블록                                     | 라이트모드에서 사용하는 색상                                             |
| 다크모드 색상            | `tailwind.css` → `.dark` 블록                                      | 다크모드에서 사용하는 색상                                                    |

### 🎨 색상 변수

| 구분            | 변수                       | 설명                        | 
| --------------- | -------------------------- | ---------------------------| 
| **공통 색상**   | `--color-main`             | 메인, 강조 색상             |
| **배경 색상**   | `--color-bg-main`  | 메인 배경 색상                  | 
|                 | `--color-bg-sub`   | 서브 배경 색상 (컴포넌트 등)                  | 
| **텍스트 색상** | `--color-text-title`        | 제목 텍스트 색상 (가장 진함)                 |
|                 | `--color-text-content`         | 내용 텍스트 색상  |
|                 | `--color-text-sub`       | 보조 텍스트 색상                 |
|                 | `--color-text-light` | 연한 텍스트 색상 (가장 연함)        |

### 💡 변수 사용 예시

```tsx
<div className="bg-bg-sub"> // bg-[bg-sub]
  <p className="text-main">메인 텍스트</p>
</div>
```

`.dark` 클래스가 적용되면 CSS 변수들이 다크 모드 값으로 자동 변경됩니다.