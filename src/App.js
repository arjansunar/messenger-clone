import React ,{ useState,useEffect} from 'react';
import { FormControl,InputLabel,Input } from '@material-ui/core';
import firebase from 'firebase';
import './App.css';
import Message from './components/Message';
import db from './firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {

  const [input,setInput]= useState('');
  const [messages,setMessages]=useState([{}]);
  const [userName,setUserName]= useState('');
  useEffect(() => {
    db.collection('Messages')
    .orderBy('timestamp',"desc")
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ( {id : doc.id, ...doc.data()})))
    })
  }, []);
 
// console.log(messages);
  useEffect(() => {
    setUserName(prompt("Please enter your name "))
  }, []);

  const sendMessage = (event)=> {
    event.preventDefault();
    db.collection('Messages').add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    setInput("");
  };
  return (
    <div className="App">
      <div className="app__logo">
      <img className="app__image"src="https://image.flaticon.com/icons/svg/733/733604.svg" height="80px" ></img>
      <h1>Arjan's Messenger</h1>
      </div>
      <h3>Welcome: {userName || 'Who are you ?'}</h3>
      <form className="app__form">
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder="Enter a message..." value = {input} onChange= {event=> setInput(event.target.value)} />
        <IconButton className="app__iconButton" disabled={!input} color="primary" variant="outlined" type = "submit" onClick={sendMessage}>
          <SendIcon></SendIcon>
        </IconButton>


      </FormControl>
     </form>
     <div className="app__messages">
     <FlipMove>
      {
        messages.map((message) => {
          console.log(message.id)
        return <Message key={message.id} userName={userName} message={message}></Message>
        }
        )
      }
     </FlipMove>
     </div>
    </div>

  );
}

export default App;
