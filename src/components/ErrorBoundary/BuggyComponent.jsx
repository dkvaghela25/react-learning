
import { ErrorBoundary } from "react-error-boundary";
import GithubLink from "../ui/GithubLink";
import ErrorFallback from "./ErrorBoundary";
const MainApp = () => {
    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <h1>Implementation of how error boundaries works</h1>
                <BuggyComponent />
            </ErrorBoundary>
            <br /><br />
            <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/ErrorBoundary/BuggyComponent.jsx" />
        </>
    )
}

const BuggyComponent = () => {
    throw new Error("I crashed!");
    return <div>Normal UI</div>;
}

export default MainApp
