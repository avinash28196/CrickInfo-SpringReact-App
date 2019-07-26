import React from 'react';

function PlayerInfo (props) {
  return (
    <div className="d-flex p-2">

    <div className="card border-dark mb-3" style={{maxWidth: '28rem'}}>
      <div className="card-header"><h4>{props.name} </h4></div>
      <div className="card-body text-dark">
      <h5 className="card-title">Player Stats</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div>
      <table className="table">
        <tbody>
        <tr>
          <th scope="row">Nationality</th>
          <td>{props.nationality}</td>
        </tr>
        <tr>
          <th scope="row">Matches Played</th>
          <td>{props.matches}</td>
        </tr>
        <tr>
          <th scope="row">Innings Played</th>
          <td>{props.inningsPlayed}</td>
        </tr>

        <tr>
          <th scope="row">Team</th>
          <td>{props.team}</td>
        </tr>

        <tr>
          <th scope="row">Bidding Value</th>
          <td>{props.value} $</td>
        </tr>

        <tr>
          <th scope="row">Wicket Keeper</th>
          <td>{((props.isWicketKeeper)? "Yes" : "No")}</td>
        </tr>

        <tr>
          <th scope="row">Captain</th>
          <td>{((props.isCaptain)? "Yes" : "No")}</td>
        </tr>

        <tr>
          <th scope="row">Catches Taken</th>
          <td>{props.catchesTaken}</td>
        </tr>
        </tbody>

      </table>
    </div>
</div>
  </div>
  );
}
export default PlayerInfo;
