import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';


var CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8101"));
var CONTRACT_ABI = [ { "constant": true, "inputs": [ { "name": "a", "type": "string" }, { "name": "b", "type": "string" } ], "name": "compare", "outputs": [ { "name": "", "type": "bool", "value": true } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "res", "outputs": [ { "name": "", "type": "bytes32", "value": "0x0000000000000000000000000000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "flag", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "source", "type": "string" } ], "name": "stringToBytes32", "outputs": [ { "name": "result", "type": "bytes32", "value": "0x0000000000000000000000000000000000000000000000000000000000000000" } ], "payable": false, "type": "function" } ];
var CONTRACT_ADDR = '0x9647d4cDbcD114d21c9194d1733E8bed0c7173c2';

var instance = CLIENT.eth.contract(CONTRACT_ABI).at(CONTRACT_ADDR);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: "",
      result: ""
    }
  }


  handleChange() {
    var a = document.getElementById("value1").value;
    var b = document.getElementById("value2").value;
    if(a && b) {
      var flag = instance.compare(a, b);
      this.setState({
        flag: flag
      })
    }else {
      this.setState({
        flag: ''
      })
    }
  }

  convertChange() {
    var str = document.getElementById('value4').value;
    if(str) {
      var res = instance.stringToBytes32(str);
      this.setState({
        result:res
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          字符串比较:
          <div style={{marginTop: 5}}>参数1：<input type='text' id='value1' onChange={ this.handleChange.bind(this) } /></div>
          <div style={{marginTop: 5}}>参数2：<input type='text' id='value2' onChange={ this.handleChange.bind(this) } /></div>
          <div style={{marginTop: 5}}>结果：<input type='text'  id='value3' value={ this.state.flag } disabled/></div>
        </div>
        <div style={{marginTop: 10}}>
          字符串转换成bytes32:
          <div style={{marginTop: 5}}>输入：<input type='text' id='value4' onChange={this.convertChange.bind(this)} /></div>
          <div style={{marginTop: 5}}>结果：<input type='text' value={this.state.result} disabled/></div>
        </div>
      </div>
    );
  }
}

export default App;
