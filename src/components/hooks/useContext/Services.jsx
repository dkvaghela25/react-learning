import { useBioContext } from '.';

const Services = () => {
    const { myName, myAge } = useBioContext();
    return (
        <div>
            Services : Hello My name is {myName}. I am {myAge} years old
        </div>
    )
}

export default Services
