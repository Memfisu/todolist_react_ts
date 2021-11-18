import React, { FC } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import SubmitButton from './components/SubmitButton';
import ParticipantsList from './components/ParticipantsList';

const App: FC = () => {
  return (
      <Provider store={store}>
          <div className="App">
              <Header />
              <ParticipantsList />
              <SubmitButton />
          </div>
      </Provider>
  );
}

export default App;
