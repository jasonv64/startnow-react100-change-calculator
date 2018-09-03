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

    let twenties = Math.trunc(totalChange / 20);
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
    return (
      <div className="container">
        <div className="amount-due">
          <b>How much was do?</b>
          <input type="number" className="form-control" name='amountDue' value={this.state.amountDue} onChange={this.handleChange} />
        </div>
        <div className="amount-received">
          <b>How much was received?</b>
          <input type="number" className="form-control" name='amountReceived' value={this.state.amountReceived} onChange={this.handleChange} />
        </div>

        <div className="card text-center">
          <div className="card-header">
            Bills
            <img className="bill" 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKPSURBVGhD7dhLqE1RHMfxg8gz3EjKwCMpJrjMlFIGBiRioIyRMGPgVXeAAROFFCPySphJYmKClAyMmJCQx8BE3nx/p1b922c5Z/+Xe9sP+1efyV3n/M/63332WmufVp0yuwZGo/W7BpYhOlA1/18jj3ClADcRm09WrkZUbBSKyn7E5mXlamQXiswSxOZl9WzkBxYhJTOxAhuwCgswHN6MxTvE5hd0beQztsGTyTiAZ4jV1IROYRY8WY5XiNWUaCO3MBftTcaRtfiIbL2Y79gLzxUagTnYAn1TbL2ORvQfmwZvduIXbK08zkMT9OYEbJ2ORu7pD86sRkoTwWF4o/fYGv/cyBi8gK3hpa+ZFgJPkhqZDt2gd3EI4xCyCfb9qU4iZBi24jYuQctvNu5GxuM57Gv0Afow5QLsWKqXCDkIO/YF2SvmbmQd7HigVU25j9i4l+6xcHp4g+z4Mdi4G9FmZseD+VB0BouNp9DGp7xHduw4bNyNaIN7DfsaXYWw/t+AHUv1ASFHYce0ZyyFTdLNPg9X8RRnMBUh22Hfn+oiQkZiHx7jDlYim6RGumUKPsHWSKEzmSeD3oii07Gt4XUZ3vRs5KH+4IyW4rOwdfJ6gInwRquYrdPRiGjTmwBPdF4awE9k6/3NNUyCJ9rX1uArbK1oI8FbbIQni3Ed2dOppauuk7IneiZ6glg96dqIfIP3HKT0YT124wj0uLoZetjyRo8T2vlj8wt6NiI6ohcZXeXYvKxcjWiNT3lEHazsQGxeVq5GRAfF0wU4hzzPOrkbKbumkbJpN9JfA9oomzQZqsRunqpplt+yaTeiX0KqbiGaNBmq7KmBGYiuAlXT7CNl025Ev7hXnX66bVKitFp/ABR7EOa7XIa7AAAAAElFTkSuQmCC"/>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Twenties due: {this.state.twenties}</li>
            <li className="list-group-item">Tens due: {this.state.tens}</li>
            <li className="list-group-item">Fives due: {this.state.fives}</li>
            <li className="list-group-item">Ones due: {this.state.ones}</li>
          </ul>
        </div>

        <div className="card text-center">
          <div className="card-header">
            Coins
            <img className="coins" 
            src="data:image/png;base64,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"/>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Quarters due: {this.state.quarters}</li>
            <li className="list-group-item">Dimes due: {this.state.dimes}</li>
            <li className="list-group-item">Nickels due: {this.state.nickels}</li>
            <li className="list-group-item">Pennies due: {this.state.pennies}</li>
          </ul>
        </div>
        <a href="https://icons8.com">Icon pack by Icons8</a>
      </div>
    );
  }
}
export default App;
