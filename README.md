# React State Management

## 기본구조

학생 정보를 보여주는 컴포넌트로 실습을 진행합니다.

1. 학생 정보는 (나이, 성명, 과목별 성적)으로 구성된다.
2. `<StudentComponent>`는 `<AgeComponent>, <NameComponent>, <ScoreComponent>`로 구성된다.
3. `<StudentComponent>` 내부만 볼 때는 학생 정보의 value 중 하나만 업데이트 했을 때 해당 value를 사용하는 컴포넌트만 업데이트 되는지 확인한다.
4. 각 상태관리 라이브러리별로 component를 생성한다. 각 component에서는 `<StudentComponent>`를 여러개 render하도록 했다. 이런 화면 구조에서 `<StudentComponent>`의 데이터를 상태관리 라이브러리 별로 어떤 식으로 관리하는지 알아본다.

## Redux

1. student의 age만 변경하여도 student의 주소값이 바뀌기 때문에 전체가 재렌더링이 되는 아쉬움이 있다.
2. Provider와 함께 사용되어야 한다.
3. `<StudentComponent>`별로 독립된 store를 사용하지 못하여 고유ID를 객체별로 부여하여 사용해야 한다.

## Mobx

## Jotai
