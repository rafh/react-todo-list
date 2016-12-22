var React = require('react');
import {Link} from 'react-router';

var About = React.createClass({
    render: function(){
        return(
            <div>
                <h2>About</h2>
                <Link to={'/'}>Home</Link>
            </div>
        )
    }
});

module.exports = About;