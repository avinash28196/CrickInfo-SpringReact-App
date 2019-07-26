import React from 'react';

function BattingInfo (props) {
  return (
    <div className="d-flex p-2">

    <div className="card border-dark mb-3" style={{maxWidth: '28rem'}}>
      <div className="card-header"><h4> {props.name} </h4></div>
      <div className="card-body text-dark">
      <h5 className="card-title">Batting Statistics</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div>
      <table className="table">
        <tbody>
        <tr>
          <th scope="row">Runs Scored</th>
          <td>{props.runScored}</td>
        </tr>
        <tr>
          <th scope="row">Highest Score</th>
          <td>{props.highestScore}</td>
        </tr>
        <tr>
          <th scope="row">Innings Played</th>
          <td>{props.inningsPlayed}</td>
        </tr>

        <tr>
          <th scope="row">Batting Avg</th>
          <td>{props.battingAvg}</td>
        </tr>

        <tr>
          <th scope="row">Ball Faced</th>
          <td>{props.ballsFaced} </td>
        </tr>

        <tr>
          <th scope="row">Strike Rate</th>
          <td>{props.strikeRate}</td>
        </tr>

        <tr>
          <th scope="row">Is BatsMan?</th>
          <td>{((props.isBatsman)? "Yes" : "No")}</td>
        </tr>


        <tr>
          <th scope="row">Half Centuries</th>
          <td>{props.halfCenturies}</td>
        </tr>
        <tr>
          <th scope="row">Centuries</th>
          <td>{props.centuries}</td>
        </tr>

        <tr>
          <th scope="row">Not outs</th>
          <td>{props.notouts} *</td>
        </tr>

        <tr>
          <th scope="row">4's</th>
          <td>{props.fours}</td>
        </tr>

        <tr>
          <th scope="row">6's</th>
          <td>{props.sixes}</td>
        </tr>
        </tbody>

      </table>
    </div>
</div>
  </div>
  );
}
export default BattingInfo;
