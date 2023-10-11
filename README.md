# React State Management

## 기본구조

학생 정보를 보여주는 컴포넌트로 실습을 진행합니다.

1. 학생 정보는 (나이, 성명, 과목별 성적)으로 구성된다.
2. `<StudentComponent>`는 `<AgeComponent>, <NameComponent>, <ScoreComponent>`로 구성된다.
3. `<StudentComponent>` 내부만 볼 때는 학생 정보의 value 중 하나만 업데이트 했을 때 해당 value를 사용하는 컴포넌트만 업데이트 되는지 확인한다.
4. 각 상태관리 라이브러리별로 component를 생성한다. 각 component에서는 `<StudentComponent>`를 여러개 render하도록 했다. 이런 화면 구조에서 `<StudentComponent>`의 데이터를 상태관리 라이브러리 별로 어떤 식으로 관리하는지 알아본다.

## Redux

### 단점

1. boilerplate가 많다.
2. `<StudentComponent>`별로 독립된 store를 사용하지 못하여 고유ID를 객체별로 부여하여 사용해야 한다.
   또한 모달이 닫힐 때, store를 초기화 시켜야 한다.
3. 비동기 처리시 middleware를 사용해야 한다.

### 장점

1. 익숙하며 정보가 많이 공유되어 있다.
2. 모든 개발자가 정해진 형태로 개발해야 한다.

## Mobx

## Jotai

### 단점

1. 객체 내에서 일부만 변경할 떄, 다른 컴포넌트에 영향을 주지 않으려면 결국 derived atom을 생성해야 하는 것으로 보인다.
   간단한 코드임에도 불구하고 벌써 지저분해진 느낌을 받는다.

### 장점

1. bolierplate가 거의 없다고 본다. 바로 `const x = atom(0)` 만으로 상태가 생긴다.
2. Provider를 통해 특정 트리에만 독립적으로 상태를 관리할 수 있는게 너무 좋았다.
   동일한 모달창을 여러개 띄워야 하는 경우, 매우 유용할 것 같다.
