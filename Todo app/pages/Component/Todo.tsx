import { Button } from "react-bootstrap"
import style from '../../styles/Todo.module.css'


const Todo = () => {
    return (
        <>
            <div className={style.Conatiner}>
                <div className={style.input_Container}>
                    <h1>Todo App</h1>
                    <div className={style.input_Conatiner1}>
                        <input type="text" className={style.input} name="" id="" placeholder="Add Data set" />
                        <button className={style.btn_primary}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo