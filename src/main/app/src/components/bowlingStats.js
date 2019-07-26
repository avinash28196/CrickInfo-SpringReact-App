import React from 'react';

function BowlingInfo (props) {
  return (
    <div className="d-flex p-2">

    <div className="card border-dark mb-3" style={{maxWidth: '28rem'}}>
      <div className="card-header"><h4>{props.name} </h4></div>
      <div className="card-body text-dark">
      <h5 className="card-title">Bowling Statistics</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div>
      <table className="table">
        <tbody>
        <tr>
          <th scope="row">No of Wickets Taken</th>
          <td>{props.wktsTaken}</td>
        </tr>
        <tr>
          <th scope="row">Bowling Eco</th>
          <td>{props.bowlingEconomy}</td>
        </tr>
        <tr>
          <th scope="row">No of Balls Bowled</th>
          <td>{props.numberOfBallsBowled}</td>
        </tr>

        <tr>
          <th scope="row">No of Runs Given</th>
          <td>{props.runsGiven}</td>
        </tr>

        <tr>
          <th scope="row">Bidding Value</th>
          <td>{props.value} $</td>
        </tr>

        <tr>
          <th scope="row">Is Bowler?</th>
          <td>{((props.isBowler)? "Yes" : "No")}</td>
        </tr>

        <tr>
          <th scope="row">Five Wiket Hauls</th>
          <td>{props.fiveWickets}</td>
        </tr>
        </tbody>

      </table>
    </div>
</div>
  </div>
  );
}
export default BowlingInfo;
