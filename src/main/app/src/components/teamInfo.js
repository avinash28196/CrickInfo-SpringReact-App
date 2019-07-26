import React from 'react';

function TeamInfo (props) {
  return (
        <tr>
        <th>{props.name}</th>
        <td>{props.nationality}</td>
        <td>{props.matches}</td>
        <td>{props.inningsPlayed}</td>
        <td>{props.isWicketKeeper}</td>
        <td>{props.isCaptain}</td>
        <td>{props.value} $</td>
        </tr>

  );
}
export default TeamInfo;
