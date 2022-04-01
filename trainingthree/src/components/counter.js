import React, {Component} from 'react'

class Counter extends Component{

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    ChangeEventIncrement = () =>{
        this.setState(
            {
                count : this.state.count + 1
            }
        )    
    }

    ChangeEventDecrement = () =>{
        this.setState(
            {
                count : this.state.count - 1
            }
        )
    }

    ChangeEventReset = () =>{
        this.setState(
            {
                count : 0
            }
        )
    }

    render(){
        return(
            <div>
                <p>This is a Counter (or) Incremental Opeartion</p>
                <h4>count : {this.state.count}</h4>
                <button onClick={()=>this.ChangeEventIncrement()}>Increment++</button>
                <button onClick={()=>this.ChangeEventDecrement()}>Decrement</button>
                <button onClick={()=>this.ChangeEventReset()}>Reset</button>
            </div>
        )
    }
}

export default Counter