import React, {Component} from 'react';
import "./reactAdvantagesOne.css"

class TerneryOperator extends Component{

    constructor(){
        super()
        this.state = {
           english : "",
           tamil : "",
           science : "",
           maths : "",
        }
    }

    PlayerChangeHandler(){

        var englishMark =parseInt(this.state.english);
        var tamilMark = parseInt(this.state.tamil);
        var scienceMark = parseInt(this.state.science);
        var mathsMark = parseInt(this.state.maths);

        var total = englishMark + tamilMark + scienceMark + mathsMark;

        var average = total / 4 ;

        if(englishMark == "" && tamilMark == "" && scienceMark == "" && mathsMark == ""){
            alert("Please enter the amrk details");
        }

        console.log(average);

        if(average < 30){

            document.getElementById("status-color").style.backgroundColor = "red";

        }

        if(average > 80){

            document.getElementById("status-color").style.backgroundColor = "green";

        }
         
        if(englishMark != 0 && tamilMark != 0 && scienceMark != 0 && mathsMark != 0){
        switch (average <= 30 ? 1 : average <= 50 ? 2 : average <= 80 ? 3 : "default") {
            case 1: console.log("You had Failed");
            break;

            case 2: console.log("You have been passed");
            break;

            case 3: console.log("You have been passed with good score");
            break;

            default:console.log("Your mark reltaed grade not listed")
                
        }
    }
    }


    render(){

        return(
            <div>
                <label>English</label>
                <input type="text" id="english" placeholder={0} value={this.state.english} onChange={(e)=>{this.setState({english : e.target.value})}}/>
                <br/>
                <label>Tamil</label>
                <input type="text" id="tamil" placeholder={0} value={this.state.tamil} onChange={(e)=>{this.setState({tamil : e.target.value})}}/>
                <br/>
                <label>Science</label>
                <input type="text" id="science" placeholder={0} value={this.state.science} onChange={(e)=>{this.setState({science : e.target.value})}}/>
                <br/>
                <label>Maths</label>
                <input type="text" id="maths" placeholder={0} value={this.state.maths} onChange={(e)=>{this.setState({maths : e.target.value})}}/>
                <br/>
                
              <button onClick={()=>this.PlayerChangeHandler()}>Submit</button> <br/>
              <div id="status-color"></div>
            </div>
        )
    }

}

export default TerneryOperator