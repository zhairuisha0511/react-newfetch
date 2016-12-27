import React, { Component } from 'react';
import Web3 from 'web3';
import _ from 'lodash';

var TRANS_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8101"));

class Transaction extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.setState({
            count: TRANS_CLIENT.eth.blockNumber
        })
    }

    render() {
        var TableRows = []
        // var filter = TRANS_CLIENT.eth.filter('latest');
        // filter.watch(function(error, result) {
        //     console.log(result);
        //     var block = TRANS_CLIENT.eth.getBlock(result, true);
        //     console.log('block #' + block.number);
        //     console.dir(block.transactions);
        // });

        // var id=0;
        // var options = {fromBlock : 0, toBlock: 'latest'};

        // var filter = TRANS_CLIENT.eth.filter(options);

        // filter.watch(function(error, result){ 
        //     if (!error) {
        //         console.log(result)
        //         var block = TRANS_CLIENT.eth.getBlock(result['blockNumber']);
        //         TableRows.push(
        //             <tr>
        //                 <td>{block['number']}</td>
        //                 <td>{block['hash']}</td>
        //                 <td>{block['difficulty']}</td>
        //                 <td>{block['miner']}</td>
        //                 <td>{block['gasUsed']}</td>
        //                 <td>{new Date(block['timestamp'])}</td>
        //             </tr>
        //         )
        //     }
                
        // });
        // filter.stopWatching();

        return (
             <div className="App-Content">
                <table>
                    <thead>
                    <tr> 
                        <th>NUMBER</th>
                        <th>HASH</th>
                        <th>DIFFICULTY</th>
                        <th>MINER</th>
                        <th>GAS USED</th>
                        <th>TIME</th>
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

export default Transaction;
