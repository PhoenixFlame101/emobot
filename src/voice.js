import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <hr />
      <p style={{ color: "#FFF" }}>Microphone: {listening ? 'on' : 'off'}</p>
      <h4 style={{ color: "#FFF" }}>Voice Input:</h4>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p style={{ color: "#FFF" }}>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
