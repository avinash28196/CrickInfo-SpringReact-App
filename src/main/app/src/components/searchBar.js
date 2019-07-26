// import React from 'react';
// import SearchField from "react-search-field";
//
// class SearchBox extends React.Component {
//
//   render(){
//     return(
//       <SearchField
//         placeholder="Search..."
//
//         searchText="Enter Player Name"
//         classNames="test-class"
//       />
//     );
//   }
// }

// export default SearchBox;


import React, { Component } from 'react';
import axios from 'axios';
import PlayerInfo from './playerStats.js';
import BattingInfo from './battingStats.js';
import BowlingInfo from './bowlingStats.js';
import TeamInfo from './teamInfo.js';

class SearchBar extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'team',

      username: '',
      nationality: '',
      name: '',
      playerid: '',
      catchesTaken:'',
      inningsPlayed:'',
      isCaptain:'',
      isWicketKeeper:'',
      matches:'',
      team:'',
      value:'',

      bowlingEconomy:'',
      fiveWickets:'',
      isBowler:'',
      numberOfBallsBowled:'',
      runsGiven:'',
      wktsTaken:'',

      runScored:'',
      highestScore:'',
      isBatsman:'',
      battingAvg:'',
      ballsFaced:'',
      strikeRate:'',
      halfCenturies:'',
      centuries:'',
      fours:'',
      sixes:'',
      notouts:'',

      playerInfo: [],
      teamInfo: []
    };
  }

  handleSearch (e) {
    this.setState({ username: e.target.value })
  }

  handleGoClick () {

    if (this.state.selectedOption === 'player') {
       console.log("Player Search")
       axios.get(`http://localhost:8080/Api/Player/${this.state.username}`)
         .then(response => {
         const results = response.data;
         console.log(results);

          this.setState({playerInfo: results});
          this.setState({nationality: this.state.playerInfo.nationality })
          this.setState({playerid: this.state.playerInfo.playerid })
          this.setState({name: this.state.playerInfo.name })
          this.setState({catchesTaken: this.state.playerInfo.catchesTaken })
          this.setState({inningsPlayed: this.state.playerInfo.inningsPlayed })
          this.setState({isCaptain: this.state.playerInfo.isCaptain })
          this.setState({isWicketKeeper: this.state.playerInfo.isWicketKeeper })
          this.setState({team: this.state.playerInfo.team })
          this.setState({value: this.state.playerInfo.value })
          this.setState({matches: this.state.playerInfo.matches })
          this.setState({playerInfo: this.state.playerInfo.playerInfo })
        });

        axios.get(`http://localhost:8080/Api/Bowler/${this.state.username}`)
         .then(response => {
           const results = response.data;
           console.log(results);

            this.setState({playerInfo: results});
            this.setState({name: this.state.playerInfo.name })
            this.setState({bowlingEconomy: this.state.playerInfo.bowlingEconomy })
            this.setState({fiveWickets: this.state.playerInfo.fiveWickets })
            this.setState({isBowler: this.state.playerInfo.isBowler })
            this.setState({numberOfBallsBowled: this.state.playerInfo.numberOfBallsBowled })
            this.setState({runsGiven: this.state.playerInfo.runsGiven })
            this.setState({wktsTaken: this.state.playerInfo.wktsTaken })
            this.setState({name: this.state.playerInfo.name })
        });


        axios.get(`http://localhost:8080/Api/Batsman/${this.state.username}`)
         .then(response => {
           const results = response.data;
           console.log(results);

           this.setState({playerInfo: results});
           this.setState({name: this.state.playerInfo.name })
           this.setState({runScored: this.state.playerInfo.runScored });
           this.setState({highestScore: this.state.playerInfo.highestScore });
           this.setState({isBatsman: this.state.playerInfo.isBatsman });
           this.setState({battingAvg: this.state.playerInfo.battingAvg });
           this.setState({ballsFaced: this.state.playerInfo.ballsFaced });
           this.setState({strikeRate: this.state.playerInfo.strikeRate });
           this.setState({centuries: this.state.playerInfo.centuries });
           this.setState({halfCenturies: this.state.playerInfo.halfCenturies });
           this.setState({fours: this.state.playerInfo.fours });
           this.setState({sixes: this.state.playerInfo.sixes });
           this.setState({notouts: this.state.playerInfo.notouts });


        });
    }
    else{
      console.log("Team Search");
      axios.get(`http://localhost:8080/Api/Team/${this.state.username}`)
        .then(response => {
        const results = response.data.content;
        console.log(results);

        const updatedResults = results.map(results => {
          return {
                ...results
              }
        });
        this.setState({teamInfo: updatedResults});

         // this.setState({playerInfo: results});
         // this.setState({nationality: this.state.playerInfo.nationality })
         // this.setState({playerid: this.state.playerInfo.playerid })
         // this.setState({name: this.state.playerInfo.name })
         // this.setState({catchesTaken: this.state.playerInfo.catchesTaken })
         // this.setState({inningsPlayed: this.state.playerInfo.inningsPlayed })
         // this.setState({isCaptain: this.state.playerInfo.isCaptain })
         // this.setState({isWicketKeeper: this.state.playerInfo.isWicketKeeper })
         // this.setState({team: this.state.playerInfo.team })
         // this.setState({value: this.state.playerInfo.value })
         // this.setState({matches: this.state.playerInfo.matches })
         // this.setState({playerInfo: this.state.playerInfo.playerInfo })
       });
    }


  }

  componentDidMount () {
      this.handleGoClick(this.state.username)
    //  console.log(this.state.username);
  }

   getPlayerInfo = () => {
      return <PlayerInfo
           key = {this.state.playerid}
           name = {this.state.name}
           inningsPlayed = {this.state.inningsPlayed}
           isCaptain = {this.state.isCaptain}
           isWicketKeeper ={this.state.isWicketKeeper}
           matches = {this.state.matches}
           team = {this.state.team}
           catchesTaken = {this.state.catchesTaken}
           value= {this.state.value}
           nationality = {this.state.nationality}
         />;
    }

    getBowlingInfo = () => {
      return <BowlingInfo
        name = {this.state.name}
        bowlingEconomy = {this.state.bowlingEconomy}
        fiveWickets = {this.state.fiveWickets}
        isBowler = {this.state.isBowler}
        numberOfBallsBowled = {this.state.numberOfBallsBowled}
        runsGiven = {this.state.runsGiven}
        wktsTaken = {this.state.wktsTaken}
        />;
    }

    getBattingInfo  = () => {
      return <BattingInfo
          runScored = {this.state.runScored}
          name = {this.state.name}
          highestScore = {this.state.highestScore}
          inningsPlayed = {this.state.inningsPlayed}
          battingAvg = {this.state.battingAvg}
          ballsFaced = {this.state.ballsFaced}
          strikeRate = {this.state.strikeRate}
          isBatsman = {this.state.isBatsman}
          halfCenturies = {this.state.halfCenturies}
          centuries = {this.state.centuries}
          notouts = {this.state.notouts}
          fours = {this.state.fours}
          sixes = {this.state.sixes}
          />;
    }

    getTeamInfo = () => {
    const teamData = this.state.teamInfo.map(player => {
        return <TeamInfo
            key = {player.playerid}
            name = {player.name}
            nationality = {player.nationality}
            matches = {player.matches}
            inningsPlayed = {player.inningsPlayed}
            isWicketKeeper = { player.isWicketKeeper}
            isCaptain = { player.isCaptain }
            value = {player.value}
          />;
      });

      return teamData
    }


    getInitialState() {
    return {
      selectedOption: 'team'
      }
    }

    handleOptionChange(e) {
      this.setState({ selectedOption: e.target.value });
    }

    searchMode() {
      if (this.state.selectedOption === 'player') {
         console.log("Player Search")
         return (
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col">
            {this.getPlayerInfo()}
            </div>
            <div class="col">
            {this.getBowlingInfo()}
            </div>
            <div class="col">
           {this.getBattingInfo()}
           </div>
           </div>
        </div>
       );
      }
      else{
        console.log("Team Search")
        return (
          <div>
          <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Nationality</th>
              <th scope="col">Matches</th>
              <th scope="col">Innings Played</th>
              <th scope="col">Is Wicket Keeper?</th>
              <th scope="col">Is Captain?</th>
              <th scope="col">Brought for</th>
              </tr>
            </thead>
            <tbody>
              {this.getTeamInfo()}
            </tbody>
          </table>
          </div>
      );
      }
    }


  render () {
    return (
      <div>

        <div className='searchbar-container'>
          <form onSubmit={e => e.preventDefault()}>

          <div class="d-flex justify-content-center align-items-center container ">
            <div class="form-group row">
              <div class="col">
              <input
                type="text"
                class="form-control"
                size='45'
                placeholder="Search For Player or Team Info"
                onChange={this.handleSearch.bind(this)}
                value={this.state.username} />
              </div>

                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={this.handleGoClick.bind(this)}>
                  <i className="fa fa-search"></i></button>

              </div>
          </div>

          <div class="form-group row justify-content-center align-items-center">
            <label>
              <input type="radio" value="team" checked={this.state.selectedOption === 'team'}
              onChange={this.handleOptionChange.bind(this)}/>
              Team Search
            </label>
            <span> | </span>
            <label>
              <input type="radio" value="player" checked={this.state.selectedOption === 'player'}
              onChange={this.handleOptionChange.bind(this)}/>
            Player Search
            </label>
            </div>

          </form>

        </div>
          {this.searchMode()}
      </div>
    )
  }
}

export default SearchBar;
