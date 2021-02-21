import { Component } from 'react';
import './App.css';
import Splash from './screen/splash/Splash';
import Main from './screen/main/Main';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        opacity: '0',
    }
  }

  mainScreenOn = () => {
    this.setState(prevState => ({
      opacity: '1',
    }));
  }

  render(){
    const {opacity} = this.state;

    return(
      <div className="App">
        <Splash mainScreenOn={this.mainScreenOn}></Splash>
        <div style={{opacity: opacity, transition: '1s', transitionDuration: '1s'}}>
          <Main></Main>
        </div>
      </div>
    )
  }
}

export default App;