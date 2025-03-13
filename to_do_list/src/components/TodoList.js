import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "./TodoContext";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

export default function TodoList({children}) {
    const state = useTodoState();
    return (
        <>
            <TodoListBlock>
                <TodoItem text="project start" done={true}></TodoItem>
                <TodoItem text="study english" done={true}></TodoItem>
                <TodoItem text="study math" done={false}></TodoItem>
                <TodoItem text="project start" done={false}></TodoItem>
            </TodoListBlock>
        </>
    );
}