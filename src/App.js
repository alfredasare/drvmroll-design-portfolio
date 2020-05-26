import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import {GlobalStyle} from "./utils/Global";
import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import LoadingScreen from "./components/loading-screen/loading-screen.component";
import Contact from "./components/contact/contact.component";

const Home = lazy(() => import("./pages/home/home.component"));
const WorkDetails = lazy(() => import("./pages/work-details/work-details.component"));

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Suspense fallback={<LoadingScreen/>}>
                <NavBar/>
                <Switch>

                    <Route exact path='/' component={Home}/>
                    <Route path='/works' component={WorkDetails}/>
                </Switch>
                <Contact/>
                <Footer/>
            </Suspense>
        </div>
    );
}

export default App;
