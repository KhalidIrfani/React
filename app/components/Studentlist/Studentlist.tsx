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
        </div>
    )
 

}



            export default studentlist;



