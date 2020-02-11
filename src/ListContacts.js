import React from "react";
import Contact from "./Contact";

class ListContacts extends React.Component {

    state = {
        contacts: [
            {
                id: 1,
                name: "Pierre",
                avatar: "https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/s960x960/10258663_1381675435449935_3169864455524463304_o.jpg?_nc_cat=108&_nc_oc=AQlf-RE8yVmxRKVOAh4Z313QADRXhHMN-MqCi3W5c2GKoZN2w8U9tT15jvD_DWhPWnkD6hmahtrVm9qvbGoAeuvh&_nc_ht=scontent-cdg2-1.xx&oh=0ccd66900168ce8df7b3c8f75af0fdd8&oe=5ED0AF73",
                online: false,
            },
            {
                id: 2,
                name: "Pierrick",
                avatar: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/p960x960/38011878_2188744921154679_1356348722161647616_o.jpg?_nc_cat=111&_nc_oc=AQkNYPLIDTnVvrLtXr82hxhqIUdr3tP5uL4rYjhqxX_yRFWDR0y2c5bEZzgZ9zGH3Nc8mzwhGpsVBhIkpNNQ_T7a&_nc_ht=scontent-cdg2-1.xx&_nc_tp=6&oh=9d5567dfc98bbe41ddc51ea6e7800744&oe=5EBF3DB9",
                online: true,
            },
            {
                id: 3,
                name: "Julio",
                avatar: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/p720x720/71704585_1707253292740315_8728192582850445312_o.jpg?_nc_cat=105&_nc_oc=AQlvCQxxrTMmeAk-4-5KLjcZEptO226q2bqR2hY9c6nP4rRHwp6EiahTN3QH6a0QsiPZYdTQx4A6hiN39aMCj-7N&_nc_ht=scontent-cdt1-1.xx&_nc_tp=6&oh=1b032907e147407f1a468e3ba36719a4&oe=5ECE3B5A",
                online: false,
            }
        ]
    }

    render() {
        return (
            <ul className="list-group w-50">
                {this.state.contacts.map((contact) => {
                    console.log(contact)
                    return ( <Contact key={contact.id} contact={contact}/> )
                })}
            </ul>
        )
    }
}

export default ListContacts