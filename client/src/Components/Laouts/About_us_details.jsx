import React from 'react'
import about_img from './images/join.jpg'
import contact_img from './images/about03.jpg'
import phone from './images/phone01.jpg'
import email from './images/email01.png'
import location from './images/location.png'

export default function About_us_details() {
    return (
        <div>

            <table className='About_us_details_table'>
                <tr>
                    <td>
                        <div>
                            <img src={about_img} alt="" width={450} />
                        </div>
                    </td>

                    <td>
                        <h1>Mission</h1><br />
                        <ul>
                            <li>
                                <p>Empowering businesses with innovative IT solutions, driving digital transformation, and delivering exceptional technology services to enhance productivity and drive growth.</p>
                            </li>

                        </ul><br />
                        <h1>Vision</h1><br />
                        <ul>
                            <li>
                                <p>
                                    To be a leading provider of cutting-edge technology solutions, driving innovation and empowering businesses to thrive in the digital era.</p>
                            </li>

                        </ul>


                    </td>
                </tr><br /><br /><br />
                <tr>
                    <td>
                        <div>
                            <img src={contact_img} alt="" width={450} />
                        </div>
                    </td>

                    <td><hr />
                      <p className='contact-para'>
                      <img src={phone} alt="" width={70} />
                      +94 717981980
                    </p><hr />
                      <p className='contact-para'>
                      <img src={email} alt="" width={70} />
                      sasindusathiska@gmail.com
                    </p><hr />
                      <p className='contact-para'>
                      <img src={location} alt="" width={70} />
                      225/1 A Negambo , Colombo
                    </p><hr />
                      
                    </td>
                </tr>
            </table>

        </div>
    )
}
