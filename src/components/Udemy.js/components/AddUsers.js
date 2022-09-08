import React from "react";

import Card from "./Card";
import classes from "../components/AddUsers.module.css"
import Button from "./Button";

const AddUser = props =>{
    const addUserhandler = (event)=>{
        event.preventDefault();
    };
return(
    <Card className={classes.input}>
    <form onSubmit={addUserhandler}>
        <label htmlFor="Username">Username</label>
        <input type='text' id='Username'></input>
        <label htmlFor="Age">Age</label>
        <input type='number' id='Age'></input>
        <Button type="submit">Submit</Button>
    </form>
    </Card>
);
};

export default AddUser