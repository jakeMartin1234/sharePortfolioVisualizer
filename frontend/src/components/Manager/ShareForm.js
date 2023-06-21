import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import axios from 'axios';

const ShareForm =({ onAddShare }) => {
    const [shareTicker, setShareTicker] = useState('');
    const [shareNumber, setShareNumber] = useState('');
    const [sharePrice, setSharePrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = `http://localhost:8000`;
        let response = null;
        try {
            response = await axios.post(url, {
                data: {
                    shareTicker: shareTicker,
                }
            });
        } catch (error) {
            console.error(error);
        }

        let shareData = response.data.result
        let latestSharePrice = shareData[shareData.length - 1].close;

        const newShare = {
            shareTicker: shareTicker,
            shareNumber: parseInt(shareNumber),
            sharePrice: parseFloat(latestSharePrice),
            shareValue: parseInt(shareNumber) * parseFloat(latestSharePrice),
            shareDate: shareData,
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