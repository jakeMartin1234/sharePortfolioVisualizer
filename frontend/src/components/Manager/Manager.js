import React from 'react';
import ShareForm from './ShareForm';
import ShareStackList from './ShareStackList';

const Manager = ({ shareQuantities, addShareToList }) => {

    const handleAddShare = (newShare) => {
        addShareToList(newShare);
    };

    return (
        <div>
            <ShareStackList shareQuantities={shareQuantities} />
            <ShareForm onAddShare={handleAddShare}
                       shareQuantities={shareQuantities} />
        </div>
    );
};

export default Manager;
