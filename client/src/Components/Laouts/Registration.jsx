import React,{useState} from 'react'
import join from './images/join.jpg'
import { toast } from 'react-toastify';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function ContactContent() {

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const [phone , setPhoneNumber] = useState("")
 const navigate = useNavigate() ;

// Form function 

const handleSubmit = async (e)=>{
    e.preventDefault();

    console.log(name,email);

  try {
    const res = await axios.post("http://localhost:8080/api/vi/auth/register",{name,email,password,phone});

        if(res.data.success){
            toast.success("Registration successfully");
            alert("Registration successfully");
            navigate("/login");      // use to navigate another page
        }

        else{
            toast.error("Already you have registration");
        }

  } 
  
  catch (error) {
    console.log(error);
    toast.error("Something went wrong now in the in side the catch");
  }

    

}





    return (
        <div>
            <table className="table m-50">
                <tbody>
                    <tr>
                        <td width="50%">
                            <div className="card w-90 f_card">

                               <br /><br /><br /><br /><br /><br /><br /><br /><br /> <img className="d-block w-100 h-100" src={join} alt="First slide" />
                            </div>

                        </td> <br />


                        <td width="50%">

                            <div>
                                <h5 className="title">REGISTRATION</h5>
                            </div>


                            <div className="card w-90 p-3">
                                <form className='sign_up_form' onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>User Name</label><br />
                                        <input 

                                        type="text" 
                                        className="form-control" 
                                        id="exampleInputName1" 
                                        aria-describedby="namelHelp" 
                                        placeholder="Enter User Name"

                                        value={name}
                                        onChange={(e)=>setName(e.target.value)}
                                        required
                                        
                                        
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Email address</label><br />
                                        <input 
                                        
                                        type="email" 
                                        className="form-control" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        required

                                        
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label><br />
                                        <input 

                                        type="password" 
                                        className="form-control" 
                                        id="exampleInputPassword1" 
                                        placeholder="Password" 
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                        required

                                        
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Phone Number</label><br />
                                        <input 

                                        type="text" 
                                        className="form-control" 
                                        id="exampleInputPhoneNumber1" 
                                        placeholder="Phone Number" 
                                        value={phone}
                                        onChange={(e)=>setPhoneNumber(e.target.value)}
                                        required

                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Address</label><br />
                                         <textarea name="" id="" cols="30" rows="5"></textarea>
                                    </div>

                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </form>


                            </div>

                        </td>


                    </tr>

                </tbody>
            </table>
        </div>
    )
}
