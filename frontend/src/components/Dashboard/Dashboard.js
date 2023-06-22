import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import PieChartComponent from "./charts/PieChart";
import GraphCard from "./GraphCard";
import AreaStockValueChart from "./charts/AreaStockValueChart";

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

const Dashboard = ({shareList}) => {
    if (shareList.length === 0) {
        return (
            <div>
                Add shares in "Manager" tab to see visualizations.
            </div>
        )
    } else {
        return (
            <Container fluid>
                <Row>
                    <Col xs={4.5}>
                        <GraphCard title={"Share Distribution Graph ($ USD)"}
                                   chart={<PieChartComponent shareList={shareList} />}
                        />
                    </Col>
                    <Col xs={7.8}>
                        <GraphCard title={"Share Prices In The Past Year ($ USD)"}
                                   chart={<AreaStockValueChart shareList={shareList} />}
                        />
                    </Col>
                </Row>
            </Container>

        );
    }
};

export default Dashboard;