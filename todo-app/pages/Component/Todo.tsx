import { Input } from '@chakra-ui/react'
import { Box, FormControl, Button } from '@chakra-ui/react'
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../../Firebase/firebaseConfig';

interface Todo {
    id: string;
    Name: string;
    Skills: string;
    Experience: string;
    
  }


const Todo = () => {

    const [Name, setName] = useState<string>('');
    const [Skills, setSkills] = useState<string>('');
    const [Experience, setExperience] = useState<string>('');
    const [todoData, setTodoData] = useState<Todo[]>([]);
    const todos = () => {
        console.log('Name', Name);
        console.log('Skills', Skills);
        console.log('Experience', Experience);


    }

    const addData = async (e: any) => {
        e.preventDefault();

        const dataRef = collection(db, 'todo')
        const newData = {
            Name: Name,
            Skills: Skills,
            Experience: Experience
        }

        const doc = await addDoc(dataRef, newData)
        console.log('New Tdod add with ID', doc.id);


    }

    useEffect(() => {
        const fetchData = async () => {
            const Ref = collection(db, 'todo')
            const getData = await getDocs(Ref)
            const TodoData: Todo[] = [];
            getData.forEach((doc: any) => {
                TodoData.push({ id: doc.id, ...doc.data() })
            })
            setTodoData(TodoData)
        }
        fetchData()
    }, [])


    return (
        <>

            <Box textAlign="center">
                <FormControl>
                    <h1>Todo App</h1>
                    <Input type="text" placeholder='Name' size='lg' onChange={(e) => setName(e.target.value)} required/> <br />
                    <Input type="text" placeholder='Skils' variant='outline' onChange={(e) => setSkills(e.target.value)} required/> <br />
                    <Input type="text" placeholder='Experience' variant='outline' onChange={(e) => setExperience(e.target.value)} required /><br />

                    <Button type='submit' onClick={todos} onSubmit={addData}>Button</Button>
                </FormControl>

            </Box>


        </>


    )
}

export default Todo