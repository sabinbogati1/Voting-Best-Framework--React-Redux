import React, { Component } from 'react';

import {voteAngular,voteReact,voteVuejs} from "./actions";

class App extends Component {

  constructor(props){
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular=()=>{
    this.store.dispatch(voteAngular());
  }

  handleVoteReact=()=>{
    this.store.dispatch(voteReact());
  }

  handleVoteVuejs=()=>{
    this.store.dispatch(voteVuejs());
  }

  render() {
    return (
        <div>
            <div className="jumbotron" style={{"textAlign":"center"}}>

                <img src="sabin.jpg" height="96" alt="sabin"></img>

                <h2> What is your favourite front-end framework in 2018?</h2>
                <h4> Click on the logo below to vote!!! </h4>

                <br/>

                <div className="row">
                      <div className="col-xs-offset-3 col-xs-2">
                          <img src="angular.png" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
                      </div>

                      <div className="col-xs-2">
                          <img src="react.png" height="96" alt="React" onClick={this.handleVoteReact}></img>
                      </div>

                      <div className="col-xs-2">
                          <img src="vue.png" height="96" alt="Vuejs" onClick={this.handleVoteVuejs}></img>
                      </div>
                </div>
            </div>

        </div>


    );
  }
}

export default App;
