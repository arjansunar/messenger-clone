import React, {forwardRef} from 'react'
import { Card,CardContent,Typography } from '@material-ui/core';
import './Message.css';
const Message= forwardRef(({userName, message} ,ref)=>  {
    const isUser = userName === message.userName;
    return (
        <div ref = {ref} className={`message ${isUser && 'message__user'}`}>
            {/* <h6>{ isUser ? `You:` : `${message.userName}:`}</h6> */}
            <Card  className={ isUser ? "message__userCard" : "message__guestCard"}>
            <CardContent>
            <Typography variant= "h5" component ="h2">
            {/* {message.message} */}
                { isUser ? message.message : `${message.userName || 'Unknown User'}: ${message.message}`}
            </Typography>
        
            </CardContent>
            </Card>
        </div>
        
    )
})

// function Message({userName, message}) {
//     const isUser = userName === message.userName;
//     return (
//         <div  className={`message ${isUser && 'message__user'}`}>
//             <Card  className={ isUser ? "message__userCard" : "message__guestCard"}>
//             <CardContent>
//             <Typography variant= "h5" component ="h2">
//                 {message.userName} : {message.message}
//             </Typography>
        
//             </CardContent>
//             </Card>
//         </div>
        
//     )
// }
export default Message
