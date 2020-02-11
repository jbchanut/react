import React from 'react';
import './App.css';

function App() {


    const name = "Pierre"
    const avatar = "https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/s960x960/10258663_1381675435449935_3169864455524463304_o.jpg?_nc_cat=108&_nc_oc=AQlf-RE8yVmxRKVOAh4Z313QADRXhHMN-MqCi3W5c2GKoZN2w8U9tT15jvD_DWhPWnkD6hmahtrVm9qvbGoAeuvh&_nc_ht=scontent-cdg2-1.xx&oh=0ccd66900168ce8df7b3c8f75af0fdd8&oe=5ED0AF73"
    const online = false

  return (
    <div className="App">
      <header className="App-header">
          <ul className="list-group w-50">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                  <img src={avatar} className="profil-img rounded-circle" alt="pierre"></img>
                  <div className="text-dark">{name}</div>
                  <div className={online ? "cercle bg-success" : "cercle bg-danger"}> </div>
              </li>
          </ul>
      </header>
    </div>
  );
}

export default App;
