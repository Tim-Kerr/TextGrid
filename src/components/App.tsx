import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addText, clearText } from '../actions/TextActions';
import TextBox from './TextBox';
import { IAppState } from '../reducers/TextReducer';

interface IAppProps {
  dispatch: Function;
  text?: string[]
}

const App: React.FC<IAppProps> = (props: IAppProps) => {
  const [text, setText] = useState('');

  const renderText = () => (props.text) ? props.text.map((text, i) => <TextBox key={i} text={text} />) : [];

  const pushText = () => {
    props.dispatch(addText(text));
    setText('');
  }

  return (
    <div className="App">
      <div>
        <h1>Enter Text</h1>
        <input type="text" name="textbox"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyPress={(event) => event.key === 'Enter' && pushText()}
        />
        <button type="submit" onClick={() => text && pushText()}>Add</button>
        <button onClick={() => props.dispatch(clearText())}>Clear</button>
      </div>
      <div className="textContainer">
        {renderText()}
      </div>
    </div>
  );
}

const mapStateToProps = (state: IAppState) => ({ text: state.text });

export default connect(mapStateToProps)(App)
