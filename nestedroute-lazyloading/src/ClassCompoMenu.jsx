import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li><Link to="classintro">Introduction to ClassComponent</Link> </li>
                </ol>
                <Outlet></Outlet>
            </div>
        );
    }
}

export default ClassCompoMenu;