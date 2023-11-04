import React, { useRef } from 'react'
import styled from 'styled-components'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Form onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur()
    }}>
        <input ref={inputRef} type="input"  placeholder="Enter a task" className='input__box' value={todo} onChange={e => setTodo(e.target.value)} />
        <button className="input_submit" type="submit" >Go</button>
    </Form>
  )
}

const Form = styled.form`

    display: flex;
    width: 90%;
    position: relative;
    align-items: center;

    .input__box {
        width: 100%;
        border-radius: 50px;
        padding: 20px 30px;
        font-size: 25px;
        border: none;
        transition: .2s;
        box-shadow: inset 0 0 5px black;
    }

    .input__box:focus {
        box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
        outline: none;
    }

    .input_submit {
        position: absolute;
        width: 50px;
        height: 50px;
        margin: 12px;
        border-radius: 50px;
        right: 0px;
        border: none;
        font-size: 15px;
        background-color: rgb(29, 51, 95);
        color: white;
        transition: .2s all;
        box-shadow: 0 0 10px black;
    }

    .input_submit:hover {
        background-color: #2f74c0;
    }

    .input_submit:active {
        transform: scale(0.8);
        box-shadow: 0 0 5px black; 
    }
`

export default InputField;