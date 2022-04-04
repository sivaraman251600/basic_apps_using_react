import React , {Component} from 'react';

class Form extends Component{

    constructor(){
        super()
        this.state = {
            name : "",
            emailAddress : "",
            nameOfHotel : "",
            location : "",
        }
    }

    handleChangeEmail(){
        console.log("Your Name : " + this.state.name);
       console.log("Email Id :" + this.state.emailAddress);
       console.log("Hotel Name : " + this.state.nameOfHotel);
       console.log("This Your Selected Location : " + this.state.location)

       var nameOne = this.state.name;
       var email = this.state.emailAddress;
       var hotelName = this.state.nameOfHotel;
       var locationConfirm = this.state.location;

       var regexName = /^([a-zA-Z])+([a-zA-Z])+$/gi;
       var resultName = nameOne.match(regexName);

       if(this.state.name == resultName && this.state.name != ""){
           console.log("Name Has Been Enter Successfully On Form As Per Validation");
       }

       
       var regexEmail = /((w|\D)+@+(w|\D)+\.+com ?|in)/gi;
       var resultEmail = email.match(regexEmail);

       if(this.state.emailAddress == resultEmail && this.state.emailAddress != ""){
        console.log("Email Has Been Enter Successfully On Form As Per Validation");
    }

    var regexHotel = /^(\D+\w)+$/gi;
    var resultHotel = hotelName.match(regexHotel);
    
    if(this.state.nameOfHotel == resultHotel && this.state.nameOfHotel != ""){
        console.log("Hotel Name Has Been Enter Successfully On Form As Per Validation");
    }

    var regexLocation = /^(\D+\w)+$/gi;
    var resultLocation = locationConfirm.match(regexLocation);

    if(this.state.location == resultLocation && this.state.location != ""){
        console.log("Location Has Been Enter Successfully On Form As Per Validation");
    }
       
    }
     
    render(){

        return(
            <div>
                <h1>Form Elements</h1>
                <label>Name :</label>
                <input type='text' id="name" value={this.state.name} onChange={(e)=>{this.setState({name :e.target.value})}} /> <br/>
                <label>Email Id :</label>
                <input type='email' id="email-id" value={this.state.emailAddress} onChange={(e)=>{this.setState({emailAddress:e.target.value})}} /><br/>
                <label>Hotel :</label>
                <select id="hotel" value={this.state.nameOfHotel} onChange={(e)=>{this.setState({nameOfHotel:e.target.value})}}>
                    <option value={"Grand Chola"}>Grand Chola</option>
                    <option value={"Grand Paradise"}>Grand Paradise</option>
                    <option value={"Sun Set"}>Sun Set</option>
                    </select> <br/>
                    <label>Location</label>
                    <select id="location" value={this.state.location} onChange={(e)=>{this.setState({location :e.target.value})}}>
                        <option value={"Bangalore"}>Bangalore</option>
                        <option value={"Chennai"}>Chennai</option>
                        <option value={"Pune"}>Pune</option>
                    </select><br/>
                <button type="submit" onClick={()=>{this.handleChangeEmail()}}>Submit</button>
            </div>
        )
    }

}

export default Form