import React, {ChangeEvent, useState} from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../reducers/dataSetter';

const Header = () => {
    const [participant, setParticipant] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === 'participant') {
            setParticipant(event.target.value);
        } else {
            setEmail(event.target.value);
        }
    };

    const addParticipant = (): void => {
        dispatch(setData({ participant, email }));
        setParticipant('');
        setEmail('');
    };

    return (
        <div className="header">
            <div className="inputContainer">
                <input
                    type="text"
                    name="participant"
                    placeholder="Name"
                    value={participant}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <button onClick={addParticipant}>Add participant</button>
        </div>
    );
}

export default Header;