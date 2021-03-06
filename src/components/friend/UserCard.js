import React from "react";
import img from "./friend.jpg"
import "./Friend.css";
import { Link } from "react-router-dom";

export const UserCard = ({user, handleAddFriend}) => {
    return (
        <section className="user-card">
            <img  src={img} alt="user-image"/>
            <h4>{user.name}</h4>
            <button className="add" type="button" onClick={() => handleAddFriend(user.id)}>Add</button>
        </section>
    )
}