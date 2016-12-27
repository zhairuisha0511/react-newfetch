import React, { Component } from 'react';
import Web3 from 'web3';
import _ from 'lodash';

var CLIENT1 = new Web3(new Web3.providers.HttpProvider("http://localhost:8101"));
var CONTRACT_ABI1 = [ { "constant": true, "inputs": [], "name": "count", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "users", "outputs": [ { "name": "name", "type": "string" }, { "name": "age", "type": "uint256" }, { "name": "addr", "type": "address" }, { "name": "flag", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getAll", "outputs": [ { "name": "", "type": "bytes32[]", "value": [] }, { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "address[]", "value": [] } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_addr", "type": "address" } ], "name": "del", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "source", "type": "string" } ], "name": "stringToBytes32", "outputs": [ { "name": "result", "type": "bytes32", "value": "0x0000000000000000000000000000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_name", "type": "string" }, { "name": "_age", "type": "uint256" }, { "name": "_addr", "type": "address" }, { "name": "_flag", "type": "bool" } ], "name": "add", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" } ];
var CONTRACT_ADDR1 = '0xc4311621c316451D00eDb701E4D47E7658bEc24b';
var instance1 = CLIENT1.eth.contract(CONTRACT_ABI1).at(CONTRACT_ADDR1);

class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
        names: "",
        ages: "",
        addrs: ""
        }
    }

    clickHandler() {
        var name = document.getElementById('name').value;
        var age = parseInt(document.getElementById('age').value, 10);
        var pwd = document.getElementById('pwd').value;
        var accountAddr = CLIENT1.personal.newAccount(pwd);
        console.log(accountAddr);
        var flag = instance1.add.sendTransaction(name, age, accountAddr,true,{from:'0xA75cf9e4B410084e663239EcbacED777c45Dc940', gas:3000000});
        console.log(flag);
    }

    showHandler() {
        var data = instance1.getAll();
        console.log(String(data[0]).split(","));
        this.setState({
            names: String(data[0]).split(","),
            ages: String(data[1]).split(','),
            addrs: String(data[2]).split(',')
        })
    }

    deleteHandler() {
        var flag = instance1.del.sendTransaction('0x8497058f64f38824be0cda849a8ca7a9d241f6b5',{from:'0xA75cf9e4B410084e663239EcbacED777c45Dc940'});
        console.log(flag);
    }

    render() {
        var TableRows = []
        var id=0;
        _.each(this.state.names, (value, index) => {
            id = index + 1;
            TableRows.push(
                <tr>
                    <td>{ id }</td>
                    <td>{CLIENT1.toAscii(this.state.names[index])}</td>
                    <td>{this.state.ages[index]}</td>
                    <td>{this.state.addrs[index]}</td>
                    <td><input type='button' value='删除' onClick={this.deleteHandler.bind(this)} /></td>
                </tr>
            )
        })

        return(
            <div>
                <h3>User Register!</h3>
                <div className="App">
                    <div>
                    用户注册:
                    <div style={{marginTop: 5}}>姓名：<input type='text' id='name' /></div>
                    <div style={{marginTop: 5}}>年龄：<input type='text' id='age' /></div>
                    <div style={{marginTop: 5}}>密码：<input type='text' id='pwd' /></div>
                    <div style={{marginTop: 5}}><input type="button" value='Register' onClick={ this.clickHandler.bind(this) }/></div>
                    </div>
                </div>
                <div style={{marginTop: 5}}><input type="button" value='Show' onClick={ this.showHandler.bind(this) }/></div>
                <div className="App-Content">
                    <table>
                        <thead>
                        <tr> 
                            <th>INDEX</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>ADDRESS</th>
                            <th>OPERATION</th>
                        </tr>
                        </thead>
                        <tbody>
                        {TableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default User;
