import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col, Row} from "react-bootstrap";
import axios from 'axios';

const ShareForm =({ onAddShare, shareQuantities }) => {
    const [shareTicker, setShareTicker] = useState('');
    const [shareQuantity, setShareQuantity] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(shareQuantities).includes(shareTicker)) {
            setErrorMessage('Share already exists');
            return;
        }

        // const url = `https://share-visualizer-backend-d6f8b5522f26.herokuapp.com/`;
        const url = `http://localhost:8000/`;
        let response = null;
        try {
            response = await axios.post(url, {
                data: {
                    shareTicker: shareTicker,
                }
            });
        } catch (error) {
            console.log(error);
        }

        let shareData = response.data.result

        if (Object.keys(shareData).length === 0) {
            setErrorMessage(`${shareTicker} was not found in the Database`);
            return;
        }
        let latestSharePrice = shareData[shareData.length - 1].close;

        const newShare = {
            shareTicker: shareTicker,
            shareQuantity: parseInt(shareQuantity),
            sharePrice: parseFloat(latestSharePrice),
            shareValue: parseInt(shareQuantity) * parseFloat(latestSharePrice),
            shareData: shareData,
        };

        onAddShare(newShare);

        // Clear the input fields after submission
        setShareTicker('');
        setShareQuantity('');
        setErrorMessage('');
    };

    return (
        <div style={{ width: '50rem', marginTop: '2rem' }}>
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
                            <Form.Label>Number of Shares</Form.Label>
                            <Form.Control
                                type="number"
                                value={shareQuantity}
                                step="1"
                                onChange={(e) => setShareQuantity(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <div style={{marginTop: "10px"}}>
                            <Button variant="primary" type="submit">
                                Add Share
                            </Button>
                        </div>

                    </Form>
                </Col>
                    <p style={{color: 'red'}}>
                        {errorMessage}
                    </p>
                <Col />

            </Row>

        </div>


    );
};

export default ShareForm;
