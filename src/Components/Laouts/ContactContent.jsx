import React from 'react'
import f_card_img from './images/slide01.jpg'

export default function ContactContent() {
    return (
        <div>
            <table className="table m-50">
                <tbody>
                    <tr>
                        <td width="50%">
                            <div className="card w-90 f_card">
                                
                                <img className="d-block w-100" src={f_card_img} alt="First slide"/>
                            </div>

                        </td> <br />


                        <td width="50%">

                            <div>
                                <h5 className="title">CONTACT US</h5>
                         </div>

                            
                            <div className="card w-90 p-3">
                               <p>Phone number : 0707991980</p><br /><br />
                               <p>E-mail : MEX@gmail.com</p><br /><br />
                               <p>Address : 258/1 P colombo North,Colombo</p><br /><br />
                               <p>Watsapp : </p><br /><br />
                               <p>Intragrame : </p>
                               


                            </div>

                        </td>


                    </tr>

                </tbody>
            </table>
        </div>
    )
}
