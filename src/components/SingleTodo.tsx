import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Todo } from '../model';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);


  const handleDone = (id: number) =>  {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isDone:!todo.isDone} : todo));
  }

  const handleDelete = (id: number) =>  {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map(todo => (todo.id === id ? {...todo, todo: editTodo} : todo)
      )
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])

  


  return (
    <Form onSubmit={(e) => handleEdit(e, todo.id)} >
      {
        edit ? (
          <input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos__single--text" />
        ) : todo.isDone ? (
              <s className="todos__single--text">{todo.todo}</s>
        ) : (
              <span className="todos__single--text">{todo.todo}</span>
        )}

      <div>
        <span className="icon" onClick={ () => {
          if (!edit && !todo.isDone) {
            setEdit(!edit);
          }
          console.log(edit);
        }
        } > <AiFillEdit /> </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}> <AiFillDelete /> </span>
        <span className="icon" onClick={() => handleDone(todo.id)}> <MdDone /> </span>
      </div>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  width: 29.5%;
  border-radius: 5px;
  padding: 20px;
  margin-top: 15px;
  background-color: #697474;  
  color: white;

  .todos__single--text {
    flex: 1;
    padding: 5px;
    border: none;
    font-size: 20px;
  }

  .todos__single--text:focus {
    outline: none;
  }

  .icon {
    margin-left: 10px;
    font-size: 25px;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    .todos__single {
      width: 40%;
    }
  }

  @media (max-width: 700px) {
    width: 95%;

    .todos {
      width: 95%;
    }

    .todos__single {
      width: 100%;
    }
  }
`

export default SingleTodo;