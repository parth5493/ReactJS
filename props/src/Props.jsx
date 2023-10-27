import React from 'react';
import PropsinFunCompo from './PropsinFunctionalComponent'
import PropinClassCompo from './PropinClassCompo'

const Props = () => {
    return (
        <>
          <h1>Props</h1>  
          <p>It is type of object where value of attributes of tags stroed.</p>
          <p>It functionally works same like attributes of HTML tags 
            but we can pass JavaScript value through them, including objects, arrays and functions.</p>
          <p>We can transfer data from one component to another component.</p>
          <p>We can transfer data from parents to child.</p>
          <p>We can use pros in both methods of component.</p>
          <ul>
            <li>Props in function component</li>
            <li>Props in class component</li>
          </ul> 

          <h2>Props in Function Component</h2>
          <div>
                {/*<PropsinFunCompo text="Hello Props"/>*/}                
                <PropsinFunCompo detail={{name: 'Kriva'}}/>
          </div> 
          <h2>Props in Class Component</h2>
          <div>
                <PropinClassCompo detail2={{name: 'Hiral'}}/>
          </div>
        </>
    );
};

export default Props;