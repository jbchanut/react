import React from "react";
import PropTypes from "prop-types"

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }


    mouseEnter()    {
        console.log("Vous êtes entré dans la fiche de " + this.props.contact.name)
    }

    mouseLeave()    {
        console.log("Vous êtes sortie de la fiche de " + this.props.contact.name)

    }

    render(){
        return(
            <li  className="list-group-item d-flex justify-content-between align-items-center"
                 onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
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