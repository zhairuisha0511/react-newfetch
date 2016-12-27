import React, { Component } from 'react';
import Web3 from 'web3';
import _ from 'lodash';

var INVEST_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8101"));

var INVEST_ABI = [ { "constant": false, "inputs": [ { "name": "_uuid", "type": "uint256" }, { "name": "_key", "type": "address" }, { "name": "_amount", "type": "string" } ], "name": "addDetails", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_uuid", "type": "uint256" }, { "name": "_rate", "type": "uint256" }, { "name": "_period", "type": "uint256" }, { "name": "_totalAmount", "type": "uint256" } ], "name": "addProduct", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_uuid", "type": "uint256" }, { "name": "_key", "type": "address" }, { "name": "_amount", "type": "uint256" }, { "name": "_stamp", "type": "uint256" } ], "name": "addOrder", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_key", "type": "address" }, { "name": "_amount", "type": "uint256" }, { "name": "_stamp", "type": "uint256" }, { "name": "_uuid", "type": "uint256" } ], "name": "add", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getAllOrder", "outputs": [ { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256[]", "value": [] } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "investors", "outputs": [ { "name": "key", "type": "address", "value": "0x" }, { "name": "amount", "type": "uint256", "value": "0" }, { "name": "stamp", "type": "uint256", "value": "0" }, { "name": "uuid", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "products", "outputs": [ { "name": "uuid", "type": "uint256", "value": "0" }, { "name": "rate", "type": "uint256", "value": "0" }, { "name": "period", "type": "uint256", "value": "0" }, { "name": "totalAmount", "type": "uint256", "value": "0" }, { "name": "amount", "type": "uint256", "value": "0" }, { "name": "flag", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" } ], "name": "orders", "outputs": [ { "name": "key", "type": "address", "value": "0x" }, { "name": "amount", "type": "uint256", "value": "0" }, { "name": "stamp", "type": "uint256", "value": "0" }, { "name": "uuid", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_uuid", "type": "uint256" } ], "name": "getProduct", "outputs": [ { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_uuid", "type": "uint256" } ], "name": "getOneOrder", "outputs": [ { "name": "", "type": "address[]", "value": [] }, { "name": "", "type": "uint256[]", "value": [] }, { "name": "", "type": "uint256[]", "value": [] } ], "payable": false, "type": "function" } ];
var INVEST_ADDR = '0xdC8fcD1D53AbC177348253D444690B0E2babBD46';

var obj = INVEST_CLIENT.eth.contract(INVEST_ABI).at(INVEST_ADDR);
var BaseCoin = INVEST_CLIENT.eth.coinbase;
var a = obj.getProduct(12345);
console.log(a);

class Invest extends Component {
    addHandler() {
        var uuid = parseInt(document.getElementById('uuid').value, 10);
        // console.log(uuid);
        var rate = parseFloat(document.getElementById('rate').value) * 1000;
        var period = parseInt(document.getElementById('period').value, 10);
        var totalAmount = parseInt(document.getElementById('totalAmount').value, 10);
        console.log(period);
        console.log(totalAmount);
        var stamp = new Date().getTime();

        var hash = obj.addProduct.sendTransaction(uuid, rate, period, totalAmount, stamp, {from: BaseCoin, gas: 3000000});
        console.log(hash);
    }

    investHandler() {
        var key = document.getElementById('key').value;
        var _amount = document.getElementById('_amount').value;
        var _uuid = document.getElementById('_uuid').value;
        var _stamp = new Date().getTime();

        var hash1 = obj.addOrder.sendTransaction(key, _amount, _uuid, _stamp, {from: BaseCoin, gas: 300000});
        console.log(hash1);
    }

    render() {
        return(
            <div>
                <div className="App">
                    Add Product:
                    <div style={{marginTop: 5}}>UUID：<input type='text' id='uuid' /></div>
                    <div style={{marginTop: 5}}>Rate：<input type='text' id='rate' /></div>
                    <div style={{marginTop: 5}}>Period：<input type='text' id='period' /></div>
                    <div style={{marginTop: 5}}>Total Amount<input type='text' id='totalAmount' /></div>
                    <div style={{marginTop: 5}}><input type="button" value='Add Product' onClick={ this.addHandler.bind(this) } /></div>
                    </div>
                <div className="App">
                    <div>
                    用户投资:
                    <div style={{marginTop: 5}}>账户：<input type='text' id='key' /></div>
                    <div style={{marginTop: 5}}>金额：<input type='text' id='_amount' /></div>
                    <div style={{marginTop: 5}}>UUID：<input type='text' id='_uuid' /></div>
                    <div style={{marginTop: 5}}><input type="button" value='Invest' onClick={ this.investHandler.bind(this) } /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Invest;
