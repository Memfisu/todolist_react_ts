import React from 'react';
import { IData } from '../interfaces';

const Participant = (participant: IData) => {
    return (
        <div className="participant">
            <div className="content">
                <span>{participant.participant}</span>
                <span>{participant.email}</span>
            </div>
        </div>
    );
}

export default Participant;