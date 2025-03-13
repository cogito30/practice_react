import React, {useReducer, createContext, useContext, useRef} from "react";

const initialTodos = [
    {
        id: 1,
        text: 'math',
        done: true,
    },
    {
        id: 2,
        text: 'english',
        done: true,
    },
    {
        id: 3,
        text: 'programming',
        done: true,
    },
    {
        id: 4,
        text: 'finance',
        done: true,
    },
];

/* create, toggle, reomove */
function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(
                todo => todo.id === action.id ? { ...DOMTokenList, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default: 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();


export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>

    );
}

/* hook 작성 */
export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}