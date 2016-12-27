 import React, { Component } from 'react';
import Web3 from 'web3';
import _ from 'lodash';

class Info extends Component {
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
            </div>
        );
    }
}
