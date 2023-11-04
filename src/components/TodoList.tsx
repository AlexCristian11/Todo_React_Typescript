import React from 'react'
import styled from 'styled-components';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <Todos>
        {
            todos.map((todo) => (
                <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
            ))
        }
    </Todos>
  )
}

const Todos = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    flex-wrap: wrap;
`


export default TodoList;