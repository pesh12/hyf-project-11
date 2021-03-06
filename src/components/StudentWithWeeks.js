import React from 'react';
import Checkbox from './Checkbox';

export default class StudentWithWeeks extends React.Component{
    
    render(){
        return(
            
            this.renderWeeks()
            
        )
    };

    //this function will render check boxes for each student base on weeks
    renderWeeks(){

        const obj = this.props.obj;
        const keys = this.props.keys;
        
        for(var i = 0; i < keys.length; i++){

            let student = obj[keys[i]]

            const weeks = student.map((week, index) => 

                <div className="Checkboxes" key={index}>
                    <Checkbox/>
                </div>
            ) 
            return weeks;
        };

    };
};