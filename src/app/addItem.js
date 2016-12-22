var React = require('react');
require('./css/addItem.css');

//Add Item
var AddItem = React.createClass({
    render: function(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem" />
                <input type="submit" value="add me" />
            </form>
        );
    },

    //Submit Function
    handleSubmit: function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    },

    componentWillMount: function(){
        console.log('componentWillMount')
    },

    componentDidMount: function(){
        console.log('componentDidMount')
    },

    componentDidUpdate: function(){
        console.log('componentDidUpdate')
    }
});

module.exports = AddItem;