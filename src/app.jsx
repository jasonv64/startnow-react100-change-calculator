import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      changeDue: '',
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
    }

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value })
    }

  calculateChange() {
    let amountReceived = this.state.amountReceived;
    let amountDue = this.state.amountDue;
    let change = amountReceived - amountDue;

    let totalChange = amountReceived - amountDue;

    let  twenties = Math.trunc(totalChange / 20);
    totalChange -= (twenties * 20);

    let tens = Math.trunc(totalChange / 10);
    totalChange -= (tens * 10);

    let fives = Math.trunc(totalChange / 5);
    totalChange -= (fives * 5);

    let ones = Math.trunc(totalChange);
    totalChange -= ones;

    let quarters = Math.trunc(totalChange / .25);
    totalChange -= (quarters * .25);

    let dimes = Math.trunc(totalChange / .10);
    totalChange -= (dimes * .10);

    let nickels = Math.trunc(totalChange / .05);
    totalChange -= (nickels * .05);

    let pennies = (Math.round((totalChange + 0.00001) * 100) / 100) * 100;


    this.setState({
      changeDue: change.toFixed(2),
      twenties: twenties,
      tens: tens,
      fives: fives,
      ones: ones,
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies
    });
  }

  render() {
  return(
      <div className="container">

      <div className="form-group" className="col-md-4">
          <label>Enter information</label>
        <div className="amount-due">
          <label for="form-control">How much is due?</label>
          <input type="number" className="form-control" name='amountDue' value={this.state.amountDue} onChange={this.handleChange} />
        </div>
        <div className="amount-recived">
          <label>How much was recived?</label>
          <input type="number" className="form-control" name='amountReceived' value={this.state.amountReceived} onChange={this.handleChange} />
        </div> 
        <button className="btn" id="button"
          onClick={this.calculateChange}
        >Calculate</button>
      </div>

      <div className="form-group" className="col-md-8">

        <div className="alert alert-success" role="alert">The total change due is ${this.state.changeDue}</div>
          <div className="row">
            <div>
              <p className="change">
              {this.state.twenties}
              </p>
            </div>
            <div>
              <p className="change">
              {this.state.tens}
              </p>
            </div>
            <div> 
              <p className="change">
              {this.state.fives}
              </p>
            </div>
            <div>
              <p className="change"> 
              {this.state.ones}
              </p>
            </div>

          <div className="row">
            <div>
              <p className="change">
              {this.state.quarters}
              </p>
            </div>
            <div>
              <p className="change">
              {this.state.dimes}
              </p>
            </div> 
            <div>
              <p className="change">
              {this.state.nickels}
              </p>
            </div>
            <div>
              <p className="change"> 
              {this.state.pennies}
              </p>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
  }
}
export default App;
