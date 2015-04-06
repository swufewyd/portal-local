var React = require('react/addons');
var Reflux = require('reflux');
var Table = require('react-bootstrap').Table;
var lodashMap = require('lodash/collection/map');
var portalActions = require('../actions/portalActions');

var Modal = require('react-bootstrap').Modal;
var OverlayMixin = require('react-bootstrap').OverlayMixin;
var Button = require('react-bootstrap').Button;

var CustomModalTrigger = React.createClass({
  mixins: [OverlayMixin],

  getInitialState:function(){
    return {
      isModalOpen: false
    };
  },
  getDefaultProps:function(){
    return {
      text:"This modal is controlled by our custom trigger component."
    };
  },
  handleToggle:function(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  },

  render:function() {
    return (
      <Button onClick={this.handleToggle} bsStyle='primary'>Launch</Button>
    );
  },

  renderOverlay:function() {
    if (!this.state.isModalOpen) {
      return <span/>;
    }

    return (
      <Modal bsStyle='primary' title='Modal heading' onRequestHide={this.handleToggle}>
        <div className='modal-body'>
          {this.props.text}
        </div>
        <div className='modal-footer'>
          <Button onClick={this.handleToggle}>Close</Button>
        </div>
      </Modal>
    );
  }
});

var UserTable = React.createClass({
    getInitialState:function() {
      return {
        modalText:""
      }
    },
    handleOrder: function() {
        console.log('handling order');
    },
    handleClick : function(e) {
        this.setState({modalText:e.target.innerHTML});
        this.refs.triggerBtn.getDOMNode().click();
        console.log(this.refs.triggerBtn.getDOMNode());
        console.log( e.target.innerHTML);
    },
    render:function() {
        var that = this;
        return (
            <div>
                <CustomModalTrigger text={this.state.modalText} ref="triggerBtn" />
                <Table responsive striped bordered condensed hover>
                   <thead>
                     <tr>
                       <th>#</th>
                       <th>姓名▲</th>
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