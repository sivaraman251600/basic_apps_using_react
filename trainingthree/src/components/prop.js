import React,{Component} from "react";
 
class Company extends Component{
   
    render(){
        return(
            <div>
                <p>Welcome to Ntt Data {`${this.props.employeeName}`}</p>
            </div>
        )
    }
}

class Supplier extends React.Component{

    render(){
        return(
            <div>
                <Company employeeName = "Praveen" id="30"/>
            </div>
        );
    }
}

export default Supplier