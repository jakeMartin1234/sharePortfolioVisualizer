import '../../App.css';
import React from 'react';
import {Card} from "react-bootstrap";

/*
    This component renders a card with a title and a chart.
    Arguments:
        title: The title of the card (String)
        chart: The chart to be rendered (React Component)
*/

const GraphCard = ({ title, chart }) => {
    return (
        <Card border="primary">
            <Card.Title className="border-bottom border-secondary border-1 text-primary fs-1 p-3">
                <div className="text-center">
                    {title}
                </div>
            </Card.Title>
            {chart}
        </Card>

    );
};

export default GraphCard;