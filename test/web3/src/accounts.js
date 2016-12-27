import React, { Component } from 'react';
import Web3 from 'web3';
import _ from 'lodash';

var ACCOUNT_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8101"));

class Account extends Component{
     constructor(props) {
        super(props);
        this.state = {
        accounts: ""
        }
    }

    componentDidMount() {
        this.setState({
            accounts: ACCOUNT_CLIENT.eth.accounts
        })
    }


    render() {
        var TableRows = []
        var id=0;
        _.each(this.state.accounts, (value, index) => {
            id = index + 1;
            console.log(this.state.accounts[index]);
            TableRows.push(
                <tr>
                    <td>{ id }</td>
                    <td>{this.state.accounts[index]}</td>
                    <td>{ACCOUNT_CLIENT.eth.getBalance(value).toString()}</td>
                </tr>
            )
        })

        return (
             <div className="App-Content">
                <table>
                    <thead>
                    <tr> 
                        <th>INDEX</th>
                        <th>ADDRESS</th>
                        <th>BALANCE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {TableRows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Account;
