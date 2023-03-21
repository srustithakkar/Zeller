import React from "react";

const Card = (props) => {
    return (
        <div>
            <h3>{props.userType} Data</h3>
            {props.data
                .filter((e) => e.role.includes(props.userType))
                .map((filteredName, index) => (
                    <li key={index}>{filteredName.email}</li>
            ))}
        </div>
    );
};

export default Card;
