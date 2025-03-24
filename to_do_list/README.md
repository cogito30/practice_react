# To Do List

## Environment
- react
- styled-components
- react-icons

#### Component 구성요소 및 역할
1. ToDoTemplate
- 전체 Layout
- 화면 중앙에 그림자가 적용된 흰색 박스

2. ToDoHead
- ToDoTemplate 내부 상위에 위치
- 날짜/요일/할일(개수) 표현

3. ToDoList
- ToDoTemplate 내부 헤더 아래 위치
- todoes 배열의 map을 사용해 배치

4. ToDoItem
- ToDoList내 위치
- 좌클릭으로 toggle 기능
- hover시 휴지통 아이콘 보여짐(삭제기능)

5. ToDoCreate
- ToDoTemplate 하단에 위치
- 중앙에 초록색 원으로 표기
- 클릭시 입력폼 표시
- input 입력 후 Enter시 새로운 항목 추가

#### To Do List 기능 구현
- APP
    |- ToDoHead(undoneTasks 상속 전달)
    |- ToDoList(todos, onToggle, onRemove 상속 전달)
        |- ToDoItem(todos, onToggle, onRemove 상속 전달)
    |- ToDoCreate(onCreate 상속 전달)

(Context API 사용시)
- APP
    |- ToDoHead(todos 전달)
    |- ToDoList(todos 전달)
        |- ToDoItem(todo를 ToDoList에서 상속 전달 / dispatch 전달)
    |- ToDoCreate(dispatch 전달)
