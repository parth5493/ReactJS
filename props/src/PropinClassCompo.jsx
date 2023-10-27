import React, { Component } from 'react';
import ChildCompoForProps from './ChildClassCompo'
import Image from './image/3.jpeg'

class PropinClassCompo extends Component {
    render() {
        return (
            <>
               <p>Syntax: <b>this.props.attribute_name</b></p> 
               <p>Syntax: <b>this.props.object_name.key_name</b></p>  
               <p>My name is {this.props.detail2.name}.</p>

               <div className="row">
                    <div className="col-lg-3 mt-2">
                        <ChildCompoForProps title='My Product' imgdata='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
                    </div>
                   <div className="col-lg-3 mt-2">
                        <ChildCompoForProps title='My Product 2' imgdata={Image} />
                    </div>
                     <div className="col-lg-3 mt-2">
                        <ChildCompoForProps title='My Product 3' imgdata='image/3.jpeg'/>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <ChildCompoForProps title='My Product 4' imgdata={process.env.PUBLIC_URL + 'image/3.jpeg'} />
                    </div>
                    <div className="col-lg-3 mt-2">
                        <ChildCompoForProps imageData="test"/>
                    </div>
                    <div className="col-lg-3 mt-2">
                        <ChildCompoForProps />
                    </div>
                    <div className="col-lg-3 mt-2">
                        <ChildCompoForProps />
                    </div>
                </div>  
            </>
        );
    }
}

export default PropinClassCompo;