import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import PieChartComponent from "./charts/PieChart";
import GraphCard from "./GraphCard";

/*
    This component is the main dashboard component. It is responsible for rendering the charts and surround data.
    Arguments:
        shareList: The list of shares that the user has added to the portfolio
            - Format: {
                shareTicker: String,
                shareValue: Number,
                shareQuantity: Number,
                shareValue: Number,
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
            <Container>
                <Row>
                    <Col>
                        <GraphCard title={"Share Distribution Graph ($ USD)"}
                                   chart={<PieChartComponent shareList={shareList} />}
                        />
                    </Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>

        );
    }
};

export default Dashboard;