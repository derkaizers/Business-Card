import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {

      barca:[]
    }
  }
  componentDidMount() {
    var url ='https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal'
    axios.get(url)
    .then((ambilData) => {
      console.log(ambilData.data.player);

      this.setState({
        barca : ambilData.data.player,
      })
    })
  }
  render() {

    var dataPemain = this.state.barca.map((item,index)=>{
      var nama = item.strPlayer;
      return <li key={index}>{nama}</li>
    })

    return (
      <div>
      <h1> Halo Dunia </h1>
      {dataPemain}
      </div>  
  );
}
}

export default App;
