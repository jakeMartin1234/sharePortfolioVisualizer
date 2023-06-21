import React from 'react';
import ShareForm from './ShareForm';
import ShareStackList from './ShareStackList';

const Manager = ({ shareList, addShareToList }) => {

    const handleAddShare = (newShare) => {
        addShareToList(newShare);
    };

    return (
        <div>
            <ShareStackList shareList={shareList} />
            <ShareForm onAddShare={handleAddShare} />
        </div>
    );
};

export default Manager;
