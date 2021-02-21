import { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import './Splash.css';

class Splash extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: moment().format('YYYY-MM-DD'),
            splashTextOpacity: '0',
        }
    }

    splashAnimationStart(){
        setTimeout(() => {
            this.setState({
                splashTextOpacity: '1'
            });
            setTimeout(() => {
                this.setState({
                    splashTextOpacity: '0'
                });
                setTimeout(() => {
                    this.splashAnimationEnd();
                }, 1000);
            }, 1000);
        }, 1000);
    }

    splashAnimationEnd(){
        this.props.mainScreenOn();
    }

    componentDidMount(){
        this.splashAnimationStart();
    }

    componentDidUpdate(){

    }

    render(){
        const {date, splashTextOpacity} = this.state;

        return(
            <div className="Splash">
                <div className={'SplashText'} style={{opacity: splashTextOpacity}}>{date}</div>
            </div>
        )
    }
}

export default Splash;