import { Component } from 'react';
import './Main.css';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
    }

    componentDidUpdate(){

    }

    render(){
        return(
            <div className="Main">
                <div className="CalanderImage"></div>
                <div className="MonthText">FEBRUARY</div>
            </div>
        )
    }
}

export default Main;