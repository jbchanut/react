import React from "react";
import PropTypes from "prop-types"

class Contact extends React.Component {

    render(){
        return(
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>{this.props.contact.name}</div>
                <img src={this.props.contact.avatar}></img>
                <div className="cercle" style={this.props.contact.online ? "background: green;" : "background: red;"}> </div>
            </li>
        )
    }

    propTypes = {
        key: PropTypes.object.isRequired,
        contact: PropTypes.object.isRequired
    }
}

export default Contact