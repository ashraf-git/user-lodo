import React, { useState } from 'react';

const User = (props) => {
    const {name, email, picture, website, phone} = props.user;
    const addMember = props.addMember;
    const [mobile, setMobile] = useState('')
    const fullName = name.first + ' ' + name.last
    const userStyle={
        margin: '5px',
        padding: '10px',
        border: '1px solid red'
    }
    const showPhone= () => setMobile(phone);

    return (
        <div style={userStyle}>
            <div style={{marginTop: '25px'}}>
                <img src={picture.large} alt=""/>
            </div>
            <div style={{marginLeft: '20px'}}>
                <h1>Name: {fullName}</h1>
                <p>Email: {email}</p>
                <a target = '_blank' href={website}>Learn About Me</a>
                <p>Phone: {mobile} </p>
                <button onClick={showPhone}>show Phone Number</button>
                <button onClick={() => addMember(fullName)}>Add Me</button>
            </div>
        </div>
    );
};

export default User;