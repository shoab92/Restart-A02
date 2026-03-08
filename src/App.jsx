import React, { useState } from 'react';
import Nav from './Components/Nav';
import './index.css';
import Hero from './Components/Hero';
import CustomerTickets from './Components/CustomerTickets';
import Footer from './Components/Footer';
import { tickets as allTickets } from './Data/tickets';

const App = () => {
  const [tickets, setTickets] = useState(allTickets);
  const [taskStatusTickets, setTaskStatusTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const addRandomTicket = () => {
    const randomIndex = Math.floor(Math.random() * allTickets.length);
    const randomTicket = { ...allTickets[randomIndex], id: Date.now() }; // Use timestamp for unique id
    setTickets(prev => [...prev, randomTicket]);
  };

  return (
    <div>
        <Nav onAddTicket={addRandomTicket} />
        <Hero tickets={tickets} setTickets={setTickets} taskStatusTickets={taskStatusTickets} setTaskStatusTickets={setTaskStatusTickets} resolvedTickets={resolvedTickets} setResolvedTickets={setResolvedTickets} />
        <Footer></Footer>
    </div>
  );
};

export default App;
