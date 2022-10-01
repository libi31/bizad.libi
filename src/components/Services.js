import Title from "./Title";
import { useState } from "react";
import ServiceNavBar from "./ServiceNavBar";
import Message from "./Message";
import Table from "./Table";

function Services() {
    
    const [usersData, setUsersData] = useState([]);

    function addUser(newUser) {
        newUser.id = Math.random() + '';
        
        const updated = [...usersData, newUser];
        setUsersData(updated);
    }

    function deleteUser(user) {
        const updated = usersData.filter(userItem => userItem.id !== user.id);
        setUsersData(updated);
    }

    return (
        <>
            <Title
                mainTxt="Services">
                <p classNameName="fs-4">Choose services that you would like to <br></br> get from BizAd</p>
            </Title>

            <ServiceNavBar addUser={addUser} />
            {
                usersData.length === 0 &&
                <Message />
            }
            <Table users={usersData} deleteUser={deleteUser} />
        </>
    );
}

export default Services;