import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/home/home.component";
import WorkDetails from "./pages/work-details/work-details.component";
import {GlobalStyle} from "./utils/Global";
import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home}/>
                {/*<Route exact path='/about' component={<></>}/>*/}
                {/*<Route exact path='/contact' component={<></>}/>*/}
                <Route path='/works' component={WorkDetails}/>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
