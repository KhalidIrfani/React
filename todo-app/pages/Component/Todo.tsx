import { Input, Table, Tbody, Td, Tr } from '@chakra-ui/react'
import { Box, FormControl, Button } from '@chakra-ui/react'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { db, storage } from '../../Firebase/firebaseConfig';

interface Todo {
    id: string;
    Name: string;
    Skills: string;
    Experience: string;
    imageUrl: string
}



const Todo = () => {

    const [Name, setName] = useState<string>('');
    const [Skills, setSkills] = useState<string>('');
    const [Experience, setExperience] = useState<string>('');
    const [todoData, setTodoData] = useState<Todo[]>([]);
    const [imageFile, setImageFile] = useState<File | null>(null);

    const addData = async (e: any) => {
        e.preventDefault();

        if (imageFile) {
            // Create a reference to the storage location where the image will be stored
            const storageRef = ref(storage, `images/${imageFile.name}`);
            // Upload the image to Firebase Storage
            await uploadBytes(storageRef, imageFile);
            // Get the URL of the uploaded image
            const imageUrl = await getDownloadURL(storageRef);

            const dataRef = collection(db, 'todo')
            const newData = {
                Name: Name,
                Skills: Skills,
                Experience: Experience,
                imageUrl: imageUrl
            }

            const doc = await addDoc(dataRef, newData)
            console.log('New Tdod add with ID', doc.id);

        }
    };

    const handleFileChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0]);
        }
    }

    const deleteTodo = async (id: string, imageUrl: string) => {
        try {
            if (imageUrl) {
                const storageRef = ref(storage, imageUrl);
                await deleteObject(storageRef);
            }

            // Delete data from Firestore
            const docRef = doc(db, 'todo', id);
            await deleteDoc(docRef);

            // Update state with remaining todo data
            const remainingTodos = todoData.filter((todo) => todo.id !== id);
            setTodoData(remainingTodos);
        } catch (error) {
            console.error("Error removing document: ", error);
        }
    };

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

            <Box textAlign="center" alignItems="center" w="40%" m="0 auto" display="block">
                <FormControl as="form" onSubmit={addData}>
                    <h1>Todo App</h1>
                    <Input type="text" placeholder='Name' size='lg' onChange={(e) => setName(e.target.value)} required /> <br />
                    <Input type="text" placeholder='Skils' variant='outline' onChange={(e) => setSkills(e.target.value)} required /> <br />
                    <Input type="text" placeholder='Experience' variant='outline' onChange={(e) => setExperience(e.target.value)} required /><br />
                    <span>Image</span>
                    <br />
                    <Input type="file" id="image" onChange={handleFileChange} />
                    <Button>Add</Button>
                </FormControl>

            </Box>

            <Box>
                <Table>
                    <Tbody>
                        {todoData.map((todo) => (
                            <Tr key={todo.id}>
                                <Td>{todo.Name}</Td>
                                <Td>{todo.Skills}</Td>
                                <Td>{todo.Experience}</Td>
                                <Td><img src={todo.imageUrl} alt="" width='200px' /></Td>
                                <Td> <Button colorScheme='teal' variant='solid' onClick={() => deleteTodo(todo.id, todo.imageUrl)}> Delete </Button></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>


            </Box>

        </>


    )
}

export default Todo