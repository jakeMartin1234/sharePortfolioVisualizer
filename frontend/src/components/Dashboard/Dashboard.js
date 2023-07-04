import React from 'react';
import './grid.css';
import PieChartComponent from "./charts/PieChart";
import GraphCard from "./GraphCard";
import AreaStockValueChart from "./charts/AreaStockValueChart";
import GainersAndLosers from "./charts/GainersAndLosers";
import WholePortfolioLineChart from "./charts/WholePortfolioLineChart";

/*
    This component is the main dashboard component. It is responsible for rendering the charts and surround data.
    Arguments:
        shareList: The list of shares that the user has added to the portfolio
            - Format: {
                shareTicker: String,
                shareValue: Number,
                shareQuantity: Number,
                shareValue: Number,
                shareData: List(JSON),
            {
 */

const Dashboard = ({shareQuantities, shareHistory}) => {
    if (shareHistory.length === 0) {
        return (
            <div>
                Add shares in "Manager" tab to see visualizations.
            </div>
        )
    } else {
        return (
            <div className={"grid-container"}>
                <GraphCard title={"Portfolio Composition ($ USD)"}
                           chart={<PieChartComponent shareQuantities={shareQuantities}
                                                     chartWidth={19}/>}
                           width={20}
                />
                <GraphCard title={"Share Prices In The Past Year ($ USD)"}
                           chart={<AreaStockValueChart shareQuantities={shareQuantities}
                                                       shareHistory={shareHistory}
                                                       chartWidth={33}/>}
                           width={34}
                />
                <GraphCard title={"% Gain/Loss over the past year"}
                           chart={<GainersAndLosers shareQuantities={shareQuantities}
                                                    shareHistory={shareHistory}
                                                    chartWidth={19}/>}
                           width={20}
                />
                <GraphCard title={"Portfolio Value Over Past Year ($ USD)"}
                           chart={<WholePortfolioLineChart shareQuantities={shareQuantities}
                                                           shareHistory={shareHistory}
                                                           chartWidth={34}/>}
                           width={35}
                />
            </div>

        );
    }
};

export default Dashboard;
