import './App.css';
import React, { useState } from 'react';
import Dashboard from "./components/Dashboard/Dashboard";
import Manager from "./components/Manager/Manager";
import Home from "./components/Home";
import SideBar from "./components/SideBar";



const App = () => {
    /*
        shareQuantity: is a dictionary of shares
        Format: JSON {
            "${shareTicker}": JSON {
                sharePrice: Float,
                shareQuantity: Integer,
                shareValue: Float,
            }
        }
        shareHistory: is a list of share data history
        Format: List (
            JSON {
                date: String,
                "${shareTicker}": JSON {
                  date: Thu Nov 14 2013 00:00:00 GMT-0500 (EST),
                  open: Float,
                  high: Float,
                  low: Float,
                  close: Float,
                  volume: Integer,
                  adjClose: Float,
                  symbol: 'TWTR'
                }
        }
     */
    const [shareQuantities, setShareQuantities] = useState({});
    const [shareHistory, setShareHistory] = useState([]);

    const addShareToList = (newShare) => {

        setShareQuantities({
            ...shareQuantities,
            [newShare.shareTicker]: {
                sharePrice: newShare.sharePrice,
                shareQuantity: newShare.shareQuantity,
                shareValue: newShare.shareValue,
            },
        });

        let currentShareHistory = shareHistory;
        console.log(newShare);
        if (currentShareHistory.length === 0) {
            currentShareHistory = newShare.shareData.map((elem) => {
                let cleanedDate = elem.date.slice(0, 10);
                return {
                    date: cleanedDate,
                    [newShare.shareTicker]: elem
                };
            });
        } else {
            if (newShare.shareData.length === currentShareHistory.length) {
                newShare.shareData.forEach((elem, index) => {
                    currentShareHistory[index][newShare.shareTicker] = elem;
                });
            } else {
                newShare.shareData.forEach((elem) => {
                    let cleanedDate = elem.date.slice(0, 10);
                    const existingData = currentShareHistory.find((item) => item.date === cleanedDate);
                    if (existingData) {
                        existingData[newShare.shareTicker] = elem;
                    }
                })
            }
        }
        setShareHistory(currentShareHistory);
    };

    const [activeComponent, setActiveComponent] = useState('home');

    const renderComponent = () => {
        if (activeComponent === 'dashboard') {
            return <Dashboard shareQuantities={shareQuantities} shareHistory={shareHistory} />;
        } else if (activeComponent === 'manager') {
            return <Manager shareQuantities={shareQuantities} addShareToList={addShareToList} />;
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
