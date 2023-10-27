import React, { Component } from 'react';

class State extends Component {
    constructor(){
        super();
        this.state = {
            name : "Kriva",
            lastname : "Patel",
            count: 0
        }
       
    }
    ChangeNameFun(){
        this.setState({
            name : "Hiral",
            count : this.state.count+1,
        })
    }
    render() {
        return (
            <>
                <h1>State in Class</h1>
                <p>It is an internal object of class.</p>
                <p>It is private property. So, we can not access outside of class.</p>
                <p>It works as a varible.</p>
                <p>State can be Changed.</p>
                <p>State always needs to be declared in constructor.</p>
                <p>setState(): It updates state property.</p>
                <p>bind(): It is an inbuilt property of react that is used to pass as an argument to the function of a class based component.</p>
                <h2>Hello {this.state.name}</h2>
                <h2>My Last name is {this.state.lastname}</h2>
                <h2>My Count is {this.state.count}</h2>
                <button onClick={()=>{this.ChangeNameFun()}}>Change Name</button>
            </>
        );
    }
}

export default State;