import GithubLink from "../ui/GithubLink";
import ErrorBoundary from "./ErrorBoundary";

const MainApp = () => {
    return (
        <>
            <ErrorBoundary>
                <h1>Implementation of how error boundaries works</h1>
                <BuggyComponent />
                <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/ErrorBoundary/BuggyComponent.jsx" />
            </ErrorBoundary>
        </>
    )
}

const BuggyComponent = () => {
    throw new Error("I crashed!");
    return <div>Normal UI</div>;
}

export default MainApp
