// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';


function App() {
  const [ player, setPlayer ] = useState([
    {id: 0, name:'Kyle', class:'Mage(Arcane)', level:'110', ilvl:'510'},
    {id: 1, name:'Christian', class:'Paladin(Holy)', level:'110', ilvl:'504'},
    {id: 2, name:'Kenneth', class:'Death Knight(Blood)', level:'110', ilvl:'511'},
    {id: 3, name:'Bryce', class:'Hunter(Beast Mastery)', level:'110', ilvl:'499'},
    {id: 4, name:'Ian', class:'Priest(Holy)', level:'110', ilvl:'509'},
  ]);

  const addPlayer = player => {
    setPlayer([...player, {...player, id: Date.now()}]);
  };


  return (
    <div className="App">
      <div>
      { player.map(player => {
          return (
            <Card key={player.id} details={player} />
          )
      })
    }
      <Form
        submitPlayer={addPlayer}
        buttonText='Apply!' />
        </div>
    </div>
  );
};

export default App;
