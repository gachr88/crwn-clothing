import React from 'react';
import './App.css';
import RoutesApp from './routes';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth = null;
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })
  }  

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>      
        <Header currentUser={this.state.currentUser}/>
        <RoutesApp/>
      </div>
    );
  }
 
}

export default App;
