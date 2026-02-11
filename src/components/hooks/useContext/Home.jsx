import { useBioContext } from '.';

const Home = () => {
    const {myName, myAge} = useBioContext();
  return (
    <div>
      Home : Hello My name is {myName}. I am {myAge} years old
    </div>
  )
}

export default Home
