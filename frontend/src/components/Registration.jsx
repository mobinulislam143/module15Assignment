import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { createStd, stdReqById, updateStd } from '../apirequest/ApiRequest';


function Registration(props) {
    const [formValue, setFormValue] = useState({
        firstName: '',
        lastName: '',
        gender: 'Male',
        dateOfBirth: '',
        nationality: '',
        address: '',
        email: '',
        phone: '',
        admissionDate: '',
        courses: ''
    })
    const [updateId, setUpdateId] = useState(null)
    useEffect(() =>{
        
        (async()=>{
            const urlParams = new URLSearchParams(window.location.search)
            const id = urlParams.get('id')
            setUpdateId(id)
            
            if(id!==null){
                await fillForm(id)
            }
        })()


    },[])
    const navigate = useNavigate()
    const handleInputChange= (key, value)=>{
        setFormValue({
            ...formValue,
            [key]:value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(updateId===null){
                let res = await createStd(formValue);
                if (res) {
                    toast.success("Registration completed");
                    navigate('/');
                } else {
                    toast.error("Registration Failed. Please check the details and try again.");
                }
            }else{
                let res = await updateStd(formValue, updateId);
                if (res) {
                    toast.success("Update request completed");
                    navigate('/');
                } else {
                    toast.error("Update request failed");
                }
            }
        } catch (e) {
            toast.error("Something went wrong. Please try again later.");
            console.log(e.toString());
        }
    };
    const fillForm = async (id) =>{
        let res = await stdReqById(id)
        setFormValue({
            firstName: res['firstName'],
            lastName:res['lastName'],
            gender: res['gender'],
            dateOfBirth: res['dateOfBirth'],
            nationality:res['nationality'],
            address: res['address'],
            email: res['email'],
            phone: res['phone'],
            admissionDate: res['admissionDate'],
            courses: res['courses']
        })
    }
   
    
    return (
        <div>
            <div className='container'>
                <div className='row my-4'>
                    <form className='row' onSubmit={handleSubmit}>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>First Name</label>
                                <input type='text' required className='form-control' value={formValue.firstName}  onChange={(e)=>handleInputChange('firstName', e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Last Name</label>
                                <input type='text' required className='form-control'  value={formValue.lastName} onChange={(e)=>handleInputChange('lastName', e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Email</label>
                                <input type='email' required className='form-control'  value={formValue.email} onChange={(e)=>handleInputChange('email', e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Gender</label>
                                <select
                                    id="gender"
                                    className="form-select"
                                    aria-label="Select Gender"
                                    name="gender"
                                    value={formValue.gender}
                                    onChange={(e)=>handleInputChange('gender', e.target.value)}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Date of Birth</label>
                                <input type='date' required className='form-control'  value={formValue.dateOfBirth} onChange={(e)=>handleInputChange('dateOfBirth', e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Nationality</label>
                                <input type='text' required className='form-control'  value={formValue.nationality} onChange={(e)=>handleInputChange('nationality', e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Address</label>
                                <input type='text' required className='form-control'  value={formValue.address} onChange={(e)=>handleInputChange('address', e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Phone</label>
                                <input type='tel' required className='form-control'  value={formValue.phone} onChange={(e)=>handleInputChange('phone', e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Admission Date</label>
                                <input type='date' required className='form-control'  value={formValue.admissionDate} onChange={(e)=>handleInputChange('admissionDate', e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label>Courses</label>
                                <input type='text' required className='form-control'  value={formValue.courses} onChange={(e)=>handleInputChange('courses', e.target.value)}/>
                            </div>
                        </div>
                        <button className='btn btn-success my-4 shadow' style={{width:'98%',fontWeight:'600',  margin:'auto'}}>{updateId?'Update':'Register'}</button>
                    </form>

                </div>
                <Toaster position='bottom-center'/>
            </div>
        </div>
    );
}

export default Registration;


// onChange={(e) => setFormValue({ ...formValue, gender: e.target.value })}