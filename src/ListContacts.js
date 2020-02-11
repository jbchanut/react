import React from "react";
import Contact from "./Contact";

class ListContacts extends React.Component {

    state = {
        contacts: [
            {
                key: 1,
                name: "Pierre",
                avatar: "images/pierre.jpg",
                online: false,
            },
            {
                key: 2,
                name: "Pierrick",
                avatar: "images/pierrick.jpg",
                online: true,
            },
            {
                key: 3,
                name: "Julio",
                avatar: "images/julio.jpg",
                online: false,
            }
        ]
    }

    render() {
        return (
            <ul className="list-group">
                {this.state.contacts.map((contact) => {
                    console.log(contact)
                    return ( <Contact key={contact.key} contact={contact}/> )
                })}
            </ul>
        )
    }
}

export default ListContacts