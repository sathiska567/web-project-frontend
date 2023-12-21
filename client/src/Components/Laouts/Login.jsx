import React,{useState} from 'react'
import sign_in from './images/sign01.jpg'
import { toast } from 'react-toastify';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function ContactContent() {

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const navigate = useNavigate() ;

// Form function 

const handleSubmit = async (e)=>{
    e.preventDefault();

    console.log(email,password);

  try {
    const res = await axios.post("http://localhost:8080/api/vi/auth/login",{email,password});

        if(res.data.success){
            toast.success("Login successfully");
            alert("Login successfully");
            localStorage.setItem("users", JSON.stringify(res.data));
            navigate("/");      // use to navigate another page
        }

        else{
            toast.error("Error, please check your email and password.");
        }

  } 
  
  catch (error) {
    console.log(error);
    toast.error("Please register and try to logging");
  }

    

}





    return (
        <div>
            <table className="table m-50">
                <tbody>
                    <tr>
                        <td width="50%">
                            <div className="card w-90 f_card">

                                <img className="d-block w-100" src={sign_in} alt="First slide" height={550} />
                            </div>

                        </td> <br />


                        <td width="50%">

                            <div>
                                <h5 className="title">SIGN IN</h5>
                            </div>


                            <div className="card w-90 p-3">
                                <form className='sign_up_form' onSubmit={handleSubmit}>

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

                                    
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>


                            </div>

                        </td>


                    </tr>

                </tbody>
            </table>
        </div>
    )
}
