import React from 'react';
import ShareForm from './ShareForm';
import ShareStackList from './ShareStackList';
import Container from "react-bootstrap/Container";

const Manager = ({ shareQuantities, addShareToList }) => {

    const handleAddShare = (newShare) => {
        addShareToList(newShare);
    };

    return (
        <Container fluid style={{ display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'}}>
            <ShareStackList shareQuantities={shareQuantities} />
            <ShareForm onAddShare={handleAddShare}
                       shareQuantities={shareQuantities} />
        </Container>
    );
};

export default Manager;
