import React from 'react'
import './App.css';
import Person from './component/Person';
import { Button } from 'react-bootstrap';
class App extends React.Component {

  state = {
    show: false
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {

    return (
      <div className="App">
      <Button variant="success"
          onClick={this.handleShow}>Show Me</Button>
        {this.state.show &&
        
          <Person/>
        }
      </div>
    )
  }


}

 





export default App;
