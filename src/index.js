import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,  Route } from "react-router-dom";


//components
import WhyWesthaven from './Components/JSX/WhyWesthaven/WhyWesthaven';
import Referrals from './Components/JSX/Referrals/Referrals';
import Solar from './Components/JSX/Solar/Solar';
import Hvac from './Components/JSX/Hvac/Hvac';
import Roofing from './Components/JSX/Roofing/Roofing';
import PowrGuard from './Components/JSX/PowrGuard/PowrGuard';
import StorageSolutions from './Components/JSX/StorageSolutions/StorageSolutions';
import MyHaven from './Components/JSX/MyHaven/MyHaven';

ReactDOM.render(
<BrowserRouter>
    <div>
        <Route path = "/" exact component={App} />
        <Route path = "/WhyWesthaven" exact render={(props) => <WhyWesthaven {...props} logged="hello" />} />
        <Route path = "/Referrals" exact render={(props) => <Referrals {...props} />} />
        <Route path = "/MyHaven" exact render={(props) => <MyHaven {...props} />} />
        <Route path = "/Solar" exact render={(props) => <Solar {...props} />} />
        <Route path = "/HeatingandAir" exact render={(props) => <Hvac {...props} />} />
        <Route path = "/Roofing" exact render={(props) => <Roofing {...props} />} />
        <Route path = "/PowrGuard" exact render={(props) => <PowrGuard {...props} />} />
        <Route path = "/StorageSolutions" exact render={(props) => <StorageSolutions {...props} />} />
    </div>
</BrowserRouter>,
 document.getElementById('root'));

