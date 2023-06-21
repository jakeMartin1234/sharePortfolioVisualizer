import './App.css';
import React, { useState } from 'react';
import Dashboard from "./components/Dashboard/Dashboard";
import Manager from "./components/Manager/Manager";
import Home from "./components/Home";
import SideBar from "./components/SideBar";

const App = () => {
    const [shareList, setShareList] = useState([]);

    const addShareToList = (newShare) => {
        setShareList([...shareList, newShare]);
    };

    const [activeComponent, setActiveComponent] = useState('home');

    const renderComponent = () => {
        if (activeComponent === 'dashboard') {
            return <Dashboard shareList={shareList} />;
        } else if (activeComponent === 'manager') {
            return <Manager shareList={shareList} addShareToList={addShareToList} />;
        } else {
            return <Home />;
        }
    };

    return (
        <div>
            <SideBar setActiveComponent={setActiveComponent} />
            <div className="container mt-4">{renderComponent()}</div>
        </div>
    );
};

export default App;