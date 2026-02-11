const BuggyComponent = () => {
    throw new Error("I crashed!");
    return <div>Normal UI</div>;
}

export default BuggyComponent
