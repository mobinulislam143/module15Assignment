import React, { useEffect, useState } from 'react';
import { deleteStd, listStdReq } from '../apirequest/ApiRequest';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


function StdList(props) {
    const [data, setData] = useState([])
    const [change, setChange] = useState(0)
    useEffect(()=>{
        (async()=>{
            let res = await listStdReq()
            setData(res)
        })()
    }, [change])

    const deleteData = async(id) =>{
        let res = await deleteStd(id)
        if(res){
            toast.success("Student delete successfully!")
            setChange(new Date().getTime());
        }else{
            toast.error("Cannot delete!!")
        }
    }
    
    if(!data){
        return <div><p className='text-center'>Loading...</p></div>
    }
   
    return (
        <div className='container'>
    <div className='row'>
        <div className='mx-14'>
            <h3 className='text-center my-4'>All Student</h3>
            <div className='table-responsive'>
                {data.length === 0 ? (
                    <div>
                        <p className='text-center py-4'> No Student is available.</p>
                    </div>
                ) : (
                    <table className='table' style={{ border: '1.5px solid #dfdfdf' }}>
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Nationality</th>
                                <th>Address</th>
                                <th>E-mail</th>
                                <th>Date-of-Birth</th>
                                <th>Phone</th>
                                <th>Admission-Date</th>
                                <th>Courses</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.firstName} {item.lastName}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.nationality}</td>
                                    <td>{item.address}</td>
                                    <td>{item.email}</td>
                                    <td>{item.dateOfBirth}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.admissionDate}</td>
                                    <td>{item.courses}</td>
                                    <td style={{textAlign:'center'}}>
                                        <button onClick={() => { deleteData(item['_id']) }} className="btn btn-outline-danger">Delete</button><br/>
                                        <Link style={{marginTop:"3px"}}   type="button" to={"/registration?id="+item['_id']} class="btn btn-outline-success">Update</Link>
                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    </div>
    <Toaster position='bottom-center' />
</div>

    );
}

export default StdList;