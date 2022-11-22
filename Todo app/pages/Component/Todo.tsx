import style from '../../styles/Todo.module.css'
import { Container } from 'react-bootstrap'
import { text } from 'stream/consumers'


const Todo=()=>{

    const [Add, setData]= React.useState(0);
    const clickHandler=()=>{
            setData(Add + 1)
    }
    return(
        
        <>
        <div className={style.Container}>
            <div className={style.input_Container}>
                <h1>Todo App</h1>
                <div className={style.input_list}>
                    <input type="text" placeholder="data set"  className={style.input}/>
                    <button className={style.btn_primary} onClick={clickHandler}>Add</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo