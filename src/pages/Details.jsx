import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



function Details() {
    const [student, setStudent] = useState({});
    const [error, setError] = useState(false);

    const params = useParams();
    console.log(params.id);


    useEffect(() => {

        axios.get(`https://674e8c3e635bad45618f0309.mockapi.io/studens/${params.id}`).then((response) => {
            console.log(response);
            setStudent(response.data);
            setError(false);
        }).catch((er) => {
            console.log(er.message);
            setError(true);
        })


    }, []);

    return (
        <div className='container'>
            {
                (error == true) ? <div className='text-danger fs-3'>Student record not found</div> : <div>
                    <h2>Name: {student.name}</h2>
                    <h3>City: {student.city}</h3>
                    <h4>Age : {student.age}</h4>
                </div>
            }

        </div>
    )
}

export default Details