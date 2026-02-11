import React from 'react'

const Profile = () => {
    return (
        <>
            <ProfileCard
                name='Alice'
                age={30}
                greetings={
                    <div>
                        <strong>Hi Alice, Have wonderful day</strong>
                    </div>
                }
            >
                <p>Hobbies : Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>
        </>
    )
}

const ProfileCard = (props) => {
    const { name, age, greetings, children} = props;
    console.log(props)
    return (
        <>
            <div>Name : {name}</div>
            <div>Age : {age}</div>
            {greetings}
            {children}
        </>
    )
}

export default Profile
