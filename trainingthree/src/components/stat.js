import React, {component} from 'react';
class StudentDetails extends React.Component{

    constructor(){
        super()
        this.state={
            name : "sivaraman",
            id : 600
        }
    }

         ChangeMessage() {
        this.setState(
            {
                id : "251"
            }
        )
    }

    render(){
        return(
            <div>
                <h4>Student Deatils</h4>
                <p>Id :{`${this.state.id}`}</p>
                <p>Name :{`${this.state.name}`}</p>
                <button onClick={()=>{this.ChangeMessage()}}>Change Id</button>
            </div>
        );
    }

}

export default StudentDetails