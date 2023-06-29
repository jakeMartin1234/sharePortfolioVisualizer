import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

const ShareStackList = ({ shareQuantities }) => {
    const shareList = Object.keys(shareQuantities).map((shareTicker) => {
            return {
                shareTicker: shareTicker,
                shareNumber: shareQuantities[shareTicker].shareNumber,
                sharePrice: shareQuantities[shareTicker].sharePrice,
                shareValue: shareQuantities[shareTicker].shareNumber * shareQuantities[shareTicker].sharePrice,
            }
        });
    return (
        <Stack gap={3}>
            {shareList.map((share, index) => (
                <div key={index}>
                    <Card style={{ width: '50rem' }} className="text-center">
                        <Card.Body>
                            <Card.Title>Share Ticker: {share.shareTicker}</Card.Title>
                            <Card.Text>
                                Share Number: {share.shareNumber}<br />
                                Share Price: {share.sharePrice}<br />
                                Asset Value: {share.shareValue}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            ))}
        </Stack>
    );
};

export default ShareStackList;