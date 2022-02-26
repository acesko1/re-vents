import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import Navbar from "../../features/nav/NavBar";
import {useState} from 'react';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <h1>Revents!</h1>
      <Navbar setFormOpen={setFormOpen}/>
      <Container className='main'>
      <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container> 
    </>
  );
}

export default App;
