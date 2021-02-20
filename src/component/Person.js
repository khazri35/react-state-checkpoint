
import React from 'react'
class Person extends React.Component {
    state ={

      fullName: "Khazri Naim",
      bio: "Age 35",
      imgSrc: '',  
      profession: "Student",
      intervall: null,
      timer: 0,
    }

     // componentDidMount
  componentDidMount() {
    console.log("Person Component did mount")
    this.setState({
      intervall: setInterval(() => {
        this.setState({timer: this.state.timer + 1});
      }, 1000),
    });
  }

  // componentWillUnmount
  componentWillUnmount() {
    console.log("Person Component wil unmount")
  }

  // componentDidUpdate
  componentDidUpdate(prevprops, prevstate) {
    console.log("Person Component did update")
    console.log(prevprops, prevstate)
  }
      


    render() {

        return (
            <div>
                <h2>{this.state.imgSrc}</h2>
                <h2>{this.state.fullName}</h2>
                <h2>{this.state.bio}</h2>
                <h2>{this.state.profession}</h2>
                <h2>{this.state.timer}</h2>
                
            </div>

        );
    }
}

export default Person
