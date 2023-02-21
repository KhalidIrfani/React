import style from '../../styles/Todo.module.css'
import { Container } from 'react-bootstrap'
import { useState } from 'react'

const Todo = () => {


    const [Add, setData] = useState('')
    const [Todo, setTodo] = useState([])

    const onHandler = (e) => {

        e.preventDefault()
        setData(e.target.value)
    }

    const clickHandler = (e) => {
        e.preventDefault()

        setTodo([Add, ...Todo])

    }

    const onDelete=(todo:number)=>{
        const update=Todo.filter(todoitem=>Todo.indexOf(todoitem) != Todo.indexOf(todo))

        setTodo(update);

    }


    return (

        <>
            <div className={style.Container}>
                <div className={style.input_Container}>
                    <h1>Todo App</h1>
                    <div className={style.input_list}>
                        <input type="text" placeholder="data set" onChange={onHandler} className={style.input} />
                        <button className={style.btn_primary} onClick={clickHandler}>Add</button>
                    </div>

                    <ul>
                    <h3>Todo are her</h3>
                    {
                        Todo.length + 1 >= 1 ? Todo.map((todo, index) => {
                            return <li key={index}>{todo}  <button onClick={(e)=> onDelete(e)}>  Delete</button>
                            
                            <button>update</button>
                             
                            </li>
                        })
                            : 'Enter Todo Item First'
                    }
                </ul>


                </div>

               

            </div>
        </>
    )
}

export default Todo


