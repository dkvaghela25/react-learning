import React from 'react'
import GithubLink from './ui/GithubLink';

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
    const { name, age, greetings, children } = props;
    console.log(props)
    return (
        <div className='center'>
            <h1>Use of components's props and children properties</h1>
            <div>Name : {name}</div>
            <div>Age : {age}</div>
            {greetings}
            {children}
            <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/Profile.jsx" />
        </div>
    )
}

export default Profile
