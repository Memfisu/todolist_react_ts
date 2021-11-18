import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import { IData } from '../interfaces';
import Participant from './Participant';
import { dataSelector } from '../selectors';

const ParticipantsList = () => {
    const list = useSelector(dataSelector);

    return (
        <div className="participantsList">
            {list.map((item: IData, key: number) => {
                return (
                    <Participant
                        key={key}
                        participant={item.participant}
                        email={item.email}
                    />
                )
            })}
        </div>
    );
}

export default ParticipantsList;