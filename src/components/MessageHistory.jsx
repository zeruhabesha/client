import React from 'react'
import { useSelector } from 'react-redux'
import ScrollableFeed from "react-scrollable-feed"
import { isSameSender, isSameSenderMargin, isSameUser, isLastMessage } from '../utils/logics'
import { Tooltip } from "@chakra-ui/tooltip";
import { Avatar } from "@chakra-ui/avatar";
import "../pages/home.css"
function MessageHistory({ messages }) {
 
   // Get the active user from the Redux store

  const activeUser = useSelector((state) => state.activeUser)
  const markAsSeen = (messageId) => {
    // Implement the logic to mark the message as seen in your application's state or database
    // dispatch an action to update the message's seen status in Redux
  }
  return (
    <>
 <ScrollableFeed className='scrollbar-hide'>
        {messages &&
          messages.map((m, i) => (
            <div className='yesw flex items-center gap-x-[6px]' key={m._id} >
  
             
        {/* Render the sender's avatar if it's a new sender or the last message */}

        {(isSameSender(messages, m, i, activeUser.id) ||
                isLastMessage(messages, i, activeUser.id)) && (
                  <Tooltip label={m.sender?.name} placement="bottom-start" hasArrow>
                    <Avatar
                      style={{ width: "32px", height: "32px" }}
                      mt="43px"
                      mr={1}
                      cursor="pointer"
                      name={m.sender?.name}
                      src={m.sender?.profilePic}
                      borderRadius="25px"
                    />
                  </Tooltip>
                )}


            {/* Render the message */}

            <p
                className={`${m.sender._id === activeUser.id ? "send1 tracking-wider text-[15px]  font-medium" : "receive1 tracking-wider text-[15px]  font-medium" }`}
                style={{
                  backgroundColor: `${m.sender._id === activeUser.id ? "#3ec59b" : "#f06e6e"}`,
                  marginLeft: isSameSenderMargin(messages, m, i, activeUser.id),
                  marginTop: isSameUser(messages, m, i, activeUser.id) ? 3 : 10,
                  borderRadius: `${m.sender._id === activeUser.id ? "" : ""}`,
                  padding: "10px 18px",
                  maxWidth: "460px",
                  color: `${m.sender._id === activeUser.id ? "#ffff" : "#ffff"}`,
                  fontWeight: m.seen ? "normal" : "bold", // Add styling for seen and unseen messages
                }}
              //  onClick={() => markAsSeen(m._id)}  Add an onClick event to mark the message as seen
              >
                {m.message}<br/>  <span>today</span>  <input style={{display:`inline`}} type="checkbox" checked/>
              </p>
            
            </div>
          ))
        }

      </ScrollableFeed >
    </>
  )
}

export default MessageHistory