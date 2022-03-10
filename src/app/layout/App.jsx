import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import Navbar from "../../features/nav/NavBar";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import Sandbox from "../../features/sandox/Sandbox";
import { useLocation } from "react-router-dom";
import ModalManager from "../common/modals/ModalManager";
import { ToastContainer } from "react-toastify";
import ErrorComponent from "../common/errors/ErrorComponent";
import AccountPage from "../../features/auth/AccountPage";
import { useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";


function App() {
 const {key} = useLocation();
 const {initialized} = useSelector((state) => state.async);

 if(!initialized) return <LoadingComponent content='Loading app...' />
 
  return (
    <>
    <ModalManager />
      <ToastContainer theme='colored'  position='bottom-right' hideProgressBar/>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
        <Navbar />
      <Container className='main'>
      
      <Route exact path='/events' component={EventDashboard} />
      <Route exact path='/sandbox' component={Sandbox} />
      <Route path='/events/:id' component={EventDetailedPage} />
      <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key}/>
      <Route path='/error' component={ErrorComponent}/>
      <Route path='/account' component={AccountPage}/>
      </Container> 
      </>
      )}/>
      
    </>
  );
}

export default App;
