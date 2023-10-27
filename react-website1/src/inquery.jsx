import { Link, Outlet } from 'react-router-dom';
import React, { Component } from 'react';

class Inquery extends Component {
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <ol>
                        <li><a href="inqueryform">Class Component</a></li>
                    </ol>
                    <Outlet></Outlet>
                </div>               
           </div>
            {/*<section>
                <form action="">
                    <table>
                        <tr>
                            <td><label htmlFor="">Firstname:</label></td>
                            <td><input type="text" placeholder='Enter your firstname'/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Lastname:</label></td>
                            <td><input type="text" placeholder='Enter your lastname'/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Phone:</label></td>
                            <td><input type="tel" placeholder='Enter your phonenumber'/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Email:</label></td>
                            <td><input type="email" placeholder='Enter your emailaddress'/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Iquery info:</label></td>
                            <td><input type="range" placeholder='Type your inquery'/></td>
                        </tr>
                    </table>
                </form>
        </section>*/}
        </>
        );
    }
}

export default Inquery;