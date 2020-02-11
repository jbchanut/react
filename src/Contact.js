import React from "react";
import PropTypes from "prop-types"

class Contact extends React.Component {

    render(){
        return(
            <li  className="list-group-item d-flex justify-content-between align-items-center">
                <img src={this.props.contact.avatar} className="profil-img rounded-circle" alt="erreur"></img>
                <div className="text-dark">{this.props.contact.name}</div>
                <div className={this.props.contact.online ? "cercle bg-success" : "cercle bg-danger"}> </div>
            </li>
        )
    }

    propTypes = {
        contact: PropTypes.object.isRequired
    }
}

export default Contact