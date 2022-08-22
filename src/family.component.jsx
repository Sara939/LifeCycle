import { Component } from "react";

class Family extends Component{
    constructor(){
        super();
        this.state= {lastname:"lik"}
    }
    componentWillMount=()=>{
        alert("welcom");
    }
    componentDidMount=()=>{
        console.log("hello");
    }

    chgLastName=(e)=>{
       console.log(e); 
        this.setState({lastname:e.target.value})
    }
    componentWillUpdate=()=>{
        console.log("massage");
    }
    componentDidUpdate=()=>{
        
    }

    render(){
        return(
            <div>
                <h1>{this.state.lastname}</h1> 
                <input type="text" onChange={this.chgLastName}/>

            </div>
        )
    }
}
export default Family;