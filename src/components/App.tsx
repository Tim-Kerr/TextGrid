import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addText, clearText } from '../actions/TextActions';
import TextElement from './TextElement';
import { IAppState } from '../reducers/TextReducer';

interface IAppProps {
  dispatch: Function;
  text?: string[];
  msgQueue: any;
}

const App: React.FC<IAppProps> = (props: IAppProps) => {
  const [text, setText] = useState('');

  const renderText = () => (props.text) ? props.text.map((text, i) => <TextElement key={i} text={text} />) : [];

  const pushText = () => {
    props.msgQueue.send(text); // Send the text onto the Microsoft MSMQ
    props.dispatch(addText(text));
    setText('');
  }

  // Push new text element when a new message from the queue is received
  props.msgQueue.on('receive', (msg: any) => typeof msg.body === 'string' && props.dispatch(addText(msg.body)));

  return (
    <div className="App">
      <h1>Enter Text</h1>
      <input type="text" name="textbox"
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyPress={(event) => event.key === 'Enter' && pushText()}
      />
      <button type="submit" onClick={() => text && pushText()}>Add</button>
      <button onClick={() => props.dispatch(clearText())}>Clear</button>
      <div className="textContainer">
        {renderText()}
      </div>
    </div>
  );
}

const mapStateToProps = (state: IAppState) => ({ text: state.text });

export default connect(mapStateToProps)(App)
