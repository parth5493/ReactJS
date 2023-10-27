import React, { Component } from 'react';
import { people } from './ListData'
import { getImageUrl } from './ListDataImage'
import styles from './style.css'

class birthdayMainPage extends Component {    

    render() {
        let PeopleList = people.map((list, index) => {
            console.log("Index is:", index);
            console.log("Name is:", list);
            return <div className='people_name'>
                <li key={index} className='pt-2'>                    
                    <img src={getImageUrl(list)} alt="" />
                                  
                    <div className='text_align'>
                        <h4 className='name_align' ><strong>{list.name}</strong></h4>
                        <p className='age_align'>{list.age} years</p>
                    </div>
                </li>
            </div>
        })
        {document.body.style = 'background-color: rgb(168, 166, 166);'}
        return (
            <>
                
                <div className="container container_color square border border-info w-50 p-3 square rounded mt-5">
                    <div className="row">
                        <h2 className='text-dark'>{PeopleList.length} Birthdays Today</h2>
                        <ul className='listscss pt-3'>
                            {PeopleList}
                        </ul>
                    </div>
                    <button className='btn btn-primary'>Clear all</button>
                </div>
               
            </>
        );
    }
}

export default birthdayMainPage;