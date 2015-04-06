var React = require('react/addons');
var Reflux = require('reflux');
var Table = require('react-bootstrap').Table;
var lodashMap = require('lodash/collection/map');
var portalActions = require('../actions/portalActions');


var UserTable = React.createClass({
    handleOrder: function() {
        console.log('handling order');
    },
    handleClick : function(e) {
        console.log( e.target);
    },
    render:function() {
        var that = this;
        return (
            <div>
            
                <Table responsive striped bordered condensed hover>
                   <thead>
                     <tr>
                       <th>#</th>
                       <th>姓名</th>
                       <th>邮箱</th>
                       <th><a onClick={this.handleOrder} className="hover-order">橙信分</a></th>
                       <th>最近登录</th>
                       
                     </tr>
                   </thead>
                   <tbody>

                                {lodashMap(this.props.userObjs, function(obj,i) {
                                    return   <tr onClick={that.handleClick}>
                                                   <td >{i+1}</td>
                                                   <td>{obj.name}</td>
                                                   <td>{obj.email}</td>
                                                   <td>{obj.score}</td>
                                                   <td>{obj.lastLogin}</td>
                                                 </tr>
                                })}
                     
                   </tbody>
                 </Table>
                 </div>
                 )
    }
});

module.exports = UserTable;