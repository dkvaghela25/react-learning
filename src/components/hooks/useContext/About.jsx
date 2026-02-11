import { useBioContext } from '.';

const About = () => {
    const {myName, myAge} = useBioContext();
  return (
    <div>
      About : Hello My name is {myName}. I am {myAge} years old
    </div>
  )
}

export default About
