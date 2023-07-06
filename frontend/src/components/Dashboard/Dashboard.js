import React from 'react';
import PieChartComponent from "./charts/PieChart";
import GraphCard from "./GraphCard";
import AreaStockValueChart from "./charts/AreaStockValueChart";
import GainersAndLosers from "./charts/GainersAndLosers";
import WholePortfolioLineChart from "./charts/WholePortfolioLineChart";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

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
            <Container fluid>
                <Row>
                    <Col>
                        <GraphCard title={"Portfolio Composition ($ USD)"}
                                   chart={<PieChartComponent shareQuantities={shareQuantities}
                                                             chartWidth={35}/>}
                                   width={36}
                        />
                    </Col>
                    <Col>
                        <GraphCard title={"Share Prices In The Past Year ($ USD)"}
                                   chart={<AreaStockValueChart shareQuantities={shareQuantities}
                                                               shareHistory={shareHistory}
                                                               chartWidth={57}/>}
                                   width={58}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <GraphCard title={"% Gain/Loss over the past year"}
                                   chart={<GainersAndLosers shareQuantities={shareQuantities}
                                                            shareHistory={shareHistory}
                                                            chartWidth={42}/>}
                                   width={43}
                        />
                    </Col>
                    <Col>
                        <GraphCard title={"Portfolio Value Over Past Year ($ USD)"}
                                   chart={<WholePortfolioLineChart shareQuantities={shareQuantities}
                                                                   shareHistory={shareHistory}
                                                                   chartWidth={50}/>}
                                   width={51}
                        />
                    </Col>
                </Row>
            </Container>

        );
    }
};

export default Dashboard;
