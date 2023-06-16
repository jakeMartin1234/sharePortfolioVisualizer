import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import yahooFinance from 'yahoo-finance';

const ShareForm =({ onAddShare }) => {
    const [shareTicker, setShareTicker] = useState('');
    const [shareNumber, setShareNumber] = useState('');
    const [sharePrice, setSharePrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6f5d85512dmshb93da0c590a8cd0p18c9d5jsn66a91907ef1c',
                'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }

        const newShare = {
            shareTicker: shareTicker,
            shareNumber: parseInt(shareNumber),
            sharePrice: parseFloat(sharePrice),
            shareValue: parseInt(shareNumber) * parseFloat(sharePrice)
        };

        onAddShare(newShare);

        // Clear the input fields after submission
        setShareTicker('');
        setShareNumber('');
        setSharePrice('');
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="shareTicker">
                            <Form.Label>Share Ticker</Form.Label>
                            <Form.Control
                                type="text"
                                value={shareTicker}
                                onChange={(e) => setShareTicker(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="shareNumber">
                            <Form.Label>Share Number</Form.Label>
                            <Form.Control
                                type="number"
                                value={shareNumber}
                                step="1"
                                onChange={(e) => setShareNumber(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="sharePrice">
                            <Form.Label>Share Price</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.01"
                                value={sharePrice}
                                onChange={(e) => setSharePrice(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add Share
                        </Button>
                    </Form>
                </Col>
                <Col />

            </Row>

        </Container>


    );
};

export default ShareForm;