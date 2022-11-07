import { useState } from "react"

type studenList = {
    No: string,
    Name: string,
    Rollno: number,
    Batch: string,
    Batchno: string

}




const studentlist = () => {



    const [students, setstudentList] = useState<studenList[]>([
        {
            No: "01",
            Name: "Naveed",
            Rollno: 22333,
            Batch: "Mad",
            Batchno: "01"

        },

        {
            No: "02",
            Name: "Ali",
            Rollno: 22334,
            Batch: "Mad",
            Batchno: "01"

        },

        {
            No: "03",
            Name: "Zain",
            Rollno: 22335,
            Batch: "Mad",
            Batchno: "01"

        },

    ])

    const addStudent = () => {
        const newStudents: studenList = {

            No: "09",
            Name: "Nabeel",
            Rollno: 223355,
            Batch: "Mad",
            Batchno: "01"


        }



        setstudentList([...students, newStudents])

    }

    const onchangeHandler = () => {
        const newStudents: studenList = {

            No: "09",
            Name: "Nabeel",
            Rollno: 223355,
            Batch: "Mad",
            Batchno: "01"


        }

        setstudentList([...students, newStudents])
    }

    return (
        <div>
            <table>
                <h1>Student List</h1>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Roll no.</th>
                    <th>Batch</th>
                    <th>Batcch no.</th>
                </tr>


                {
                    students.map((student) => {
                        return (
                            <tr>
                                <td>{student.No}</td>
                                <td>{student.Name}</td>
                                <td>{student.Rollno}</td>
                                <td>{student.Batch}</td>
                                <td>{student.Batchno}</td>
                            </tr>
                        )
                    })

                }

            </table>
            <button onClick={addStudent} >Add Student</button>

            <br />
            <br />
            <br />
            <label htmlFor="">Name</label>
            <input type="text" placeholder="user-name" />
            <br />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="user-email" />
            <br />

            <label htmlFor="">Password</label>
            <input type="password" placeholder="password" />
            <br />

            <label htmlFor="">Roll no</label>
            <input type="text" placeholder="user-roll no." />
            <br />
            <br />

            <button onChange={onchangeHandler} >Add Student</button>

        </div>
    )




}

export default studentlist;



