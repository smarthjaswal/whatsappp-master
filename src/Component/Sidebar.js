import React from 'react'
import "./Sidebar.css"
import SidebarChat from './SidebarChat';
import { Avatar, IconButton } from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import { useEffect } from 'react';
import db from '../firebase';

function Sidebar({id, name, addNewChat}) {
   const [rooms, setRooms] = useState([]);

   useEffect(()=>{
    db.collection("rooms").onSnapshot((snapshot)=>
    setRooms(
        snapshot.docs.map((doc)=>({
            id: doc.id,
            data:doc.data(),
        }))
    )
    
    );
   },[]);


    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />

                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or start a new chat" type="text" />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat />
                {rooms.map(rooms=>{
                    <SidebarChat key = {rooms.id} id = {rooms.id} name = {rooms.data.name}/>
                })}


            </div>




        </div>
    )
}

export default Sidebar
