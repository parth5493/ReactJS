import React, { Component } from 'react';
import ClassComponentMenu from './ClassCompoMenu';
import { Route, Routes } from 'react-router-dom';

class ClassCompoReact extends Component {
    render() {
        return (
            <Routes>
            <Route path="/" element={<ClassComponentMenu />}>
                <Route path="classintro" element={<h2>Welcome to class components</h2>}  />
                <Route path="b" lazy="b"/>
                {/* <Route path="a" lazy={() => import("./a")} />
                <Route path="b" lazy={() => import("./b")} /> */}
            </Route>
        </Routes>
        );
    }
}

export default ClassCompoReact;