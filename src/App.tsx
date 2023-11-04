import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model'; 
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }
  };

  console.log(todos);
  

  return (
    <div className="App">
      <span className="heading">
        Taskify
      </span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;



// let name: string = "Alex";
// let age: number | string = 21;
// let isStudent: boolean = false;
// let hobbies: string[] = [];
// let role: [number, string] = [1, 'Student'];

// type Person = {
//   name: string,
//   age: number,
// }

// let person: Person = {
//   name: 'Alex',
//   age: 21
// };

// let lotsOfPeople: Person[];

// interface Man extends Person {
//   profession: string;
// }

// type X = {
//   a: string,
//   b: number
// }

// type Y = X & {
//   c: string,
//   d: number
// }

// let y: Y = { 
//   c: "abc",
//   d: 42
// }