import React, { Component } from 'react';
import Web3 from 'web3';
import _ from 'lodash';

var BORROW_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8101"));
var BORROW_ABI = [ { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "uuids", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "users", "outputs": [ { "name": "key", "type": "address", "value": "0x" }, { "name": "amount", "type": "uint256", "value": "0" }, { "name": "timestamp", "type": "uint256", "value": "0" }, { "name": "flag", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_key", "type": "address" }, { "name": "_amount", "type": "uint256" }, { "name": "_timestamp", "type": "uint256" } ], "name": "add", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_uuid", "type": "uint256" }, { "name": "_key", "type": "address" }, { "name": "_timestamp", "type": "uint256" } ], "name": "addDebt", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "debts", "outputs": [ { "name": "uuid", "type": "uint256", "value": "0" }, { "name": "totalAmount", "type": "uint256", "value": "0" }, { "name": "amount", "type": "uint256", "value": "0" }, { "name": "flag", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_uuid", "type": "uint256" } ], "name": "getUserFromDebt", "outputs": [ { "name": "", "type": "address[]", "value": [] } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getDebts", "outputs": [ { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256[]", "value": [] } ], "payable": false, "type": "function" } ];
var BORROW_ADDR = '0xE5b1E560E0B1E8B76d496d390C580DD862c34566';
var obj = BORROW_CLIENT.eth.contract(BORROW_ABI).at(BORROW_ADDR);

class Borrow extends Component{

    borrowHandler() {
        var key = document.getElementById('key').value;
        var amount = parseInt(document.getElementById('amount').value, 10);
        var timestamp = new Date().getTime();
        console.log('-------------');
        console.log(key);
        console.log(amount);
        console.log(timestamp);
        // var result = obj.add(key, amount, timestamp);
        var hash = obj.add.sendTransaction(key, amount, timestamp,{from:'0x53875DD34E6894408A5c415cdA95b19A012e7D7f', gas:3000000});
        console.log(hash);
    }

    addDebtHandler() {
        var uuid = document.getElementById("uuid").value;
        var user_key = document.getElementById("user_key").value;
        var stamp = parseInt(document.getElementById("user_stamp").value, 10);
        console.log(uuid+'--------'+user_key+'========='+String(stamp));
        var res = obj.addDebt.sendTransaction(uuid, user_key, stamp ,{from:'0x53875DD34E6894408A5c415cdA95b19A012e7D7f', gas:3000000});
        console.log(res);
    }

    render() {
        return(
            <div>
                <h3>User Register!</h3>
                <div className="App">
                    <div>
                    用户借款:
                    <div style={{marginTop: 5}}>账户：<input type='text' id='key' /></div>
                    <div style={{marginTop: 5}}>金额：<input type='text' id='amount' /></div>
                    <div style={{marginTop: 5}}><input type="button" value='Borrow' onClick={ this.borrowHandler.bind(this) }/></div>
                    </div>
                </div>
                <h3>债权添加</h3>
                <div className='App'>
                    <div style={{marginTop: 5}}>UUID：<input type='text' id='uuid' /></div>
                    <div style={{marginTop: 5}}>Key：<input type='text' id='user_key' /></div>
                    <div style={{marginTop: 5}}>TimeStamp：<input type='text' id='user_stamp' /></div>
                    <div style={{marginTop: 5}}><input type="button" value='Borrow' onClick={ this.addDebtHandler.bind(this) }/></div>
                </div>
            </div>
        );
    }
}

export default Borrow;
