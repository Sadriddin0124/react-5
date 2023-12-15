import React, { Component } from "react";
export default class App extends Component {
  state= {
    hour: 0,
    minute: 0,
    second: 0,
    savInterval: '',
    timeUp: '',
    disabled: false
  }
increaseHour =()=> {
  let {hour} = this.state
  this.setState ({
    hour: hour + 1
  })
}
increaseMinute =()=> {
  let {minute} = this.state
  this.setState ({
    minute: minute + 1
  })
}
increaseSecond =()=> {
  let {second} = this.state
  this.setState ({
    second: second + 1
  })
}
decreaseHour =()=> {
  let {hour} = this.state
  this.setState ({
    hour: hour > 0 ? hour - 1 : hour = 0  })
}
decreaseMinute =()=> {
  let {minute} = this.state
  this.setState ({
    minute: minute > 0 ? minute - 1 : minute = 0  })
}
decreaseSecond =()=> {
  let {second} = this.state
  this.setState ({
    second: second > 0 ? second - 1 : second = 0
  })
}
start=()=> {
  let interval = setInterval(() => {
    const {second, minute, hour} = this.state
    this.setState ({
      timeUp: "",
      disabled: true
    })
    if(second === 0) {
      if(minute === 0) {
        if (hour === 0) {
          if (second === 0) {
            clearInterval(interval)
            this.setState ({
              second: 0,
              minute: 0,
              hour: 0,
              timeUp: "Time is Up!"
            })
          }  
        } else {
          this.setState ({
            second: 59,
            minute: 59,
            hour: hour - 1
          })
        }
      } else {
        this.setState({
          second: 59,
          minute: minute - 1
        })
      }
    } else {
      this.setState ({
        second: second - 1
      })

    }
    
  }, 1000);
  this.setState ({
    savInterval: interval 
  })
}
stop =()=>{
  clearInterval(this.state.savInterval)
  this.setState({
    disabled: false
  })
}
clear =()=> {
  this.setState({
    hour: 0,
    minute : 0,
    second: 0,
    disabled: false,
    timeUp: ""
  })
}
  render() {
    const {hour, minute, second, timeUp, disabled} = this.state
    return (
    <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card">
              <div className="card-header">
                <h1 className="text-center">Timer</h1>
              </div>
              <div className="card-body d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center">
                  <button className="btn btn-success" onClick={this.increaseHour}>+</button>
                  <h1>{hour}</h1>
                  <button className="btn btn-danger" onClick={this.decreaseHour}>-</button>
                </div>
                <h1>:</h1>
                <div className="d-flex flex-column align-items-center">
                <button className="btn btn-success" onClick={this.increaseMinute}>+</button>
                  <h1>{minute}</h1>
                  <button className="btn btn-danger" onClick={this.decreaseMinute}>-</button>
                </div>
                <h1>:</h1>
                <div className="d-flex flex-column align-items-center">
                <button className="btn btn-success" onClick={this.increaseSecond}>+</button>
                  <h1>{second}</h1>
                  <button className="btn btn-danger" onClick={this.decreaseSecond}>-</button>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-around flex-wrap g-3">
                <button className="btn btn-info m-1" onClick={this.start} disabled={disabled}>Start</button>
                <button className="btn btn-warning m-1" onClick={this.stop}>Stop</button>
                <button className="btn btn-primary m-1" onClick={this.clear}>Clear</button>
              </div>
              <h1 className="text-center text-danger">{timeUp}</h1>
            </div>
          </div>
        </div>
     </div>
     );
  }
}
