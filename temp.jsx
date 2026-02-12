import './App.css'

import Profile from './components/Profile.jsx'
import EventHandlers from './components/EventHandlers/EventHandlers.jsx'
import EventProps from './components/EventHandlers/EventProps.jsx'
import EventPropagation from './components/EventHandlers/EventPropagation.jsx'
import State, { Sibling } from './components/hooks/useState/State.jsx'
import DerivedState from './components/Optimization/DerivedState.jsx'
import LiftStateUp from './components/hooks/useState/LiftStateUp.jsx'
import RegistrationForm from './components/hooks/useState/registrationForm.jsx'
import ToggleButton from './components/hooks/useState/ToggleButton.jsx'
import LoginForm from './components/hooks/useState/LoginForm.jsx'
import ContactForm from './components/hooks/useState/ContactForm.jsx'
import UseEffect from './components/hooks/useEffect/UseEffect.jsx'
import Challenge from './components/hooks/useEffect/Challenge.jsx'
import CleanUp from './components/hooks/useEffect/CleanUp.jsx'
import FetchApi from './components/hooks/useEffect/FetchApi.jsx'
import UseRef from './components/hooks/useRef/UseRef.jsx'
import ForwardRefs from './components/hooks/useRef/ForwardRefs.jsx'
import UseId from './components/hooks/useId/UseId.jsx'
import PropDrilling from './components/PropsDrilling.jsx'
import ContextApi from './components/hooks/useContext/ContextApi.jsx'
import LightDark, { ThemeProvider } from './components/hooks/useContext/LightDark.jsx'
import UseReducer from './components/hooks/useReducer/UseReducer.jsx'
import ReactMemo from './components/Optimization/Memoization/ReactMemo.jsx'
import UseMemo from './components/Optimization/Memoization/UseMemo.jsx'
import UseCallback from './components/Optimization/Memoization/UseCallback.jsx'
import UseEffectEvent from './components/hooks/useEffect/UseEffectEvent.jsx'
import ReactHookForm from './components/ReactHookForm/ReactHookForm.jsx'
import IntegratingUiLibraries from './components/ReactHookForm/IntegratingUiLibraries.jsx'
import SchemaValidationYup from './components/ReactHookForm/SchemaValidationYup.jsx'
import Zustand from './components/Zustand/Zustand.jsx'
import FormikComponent from './components/ReactHookForm/FormikComponent.jsx'
import ClassComponent from './components/ClassComponent.jsx'
import HOC from './components/HOC.jsx'
import BuggyComponent from './components/ErrorBoundary/BuggyComponent.jsx'
import LazyLoading from './components/Optimization/LazyLoading/LazyLoading.jsx'
import Debounce from './components/Optimization/SearchTechniques/Debounce.jsx'
import Throttling from './components/Optimization/SearchTechniques/Throttling.jsx'
import Practice from './components/Practice.jsx'
import ShortCircuit from './components/hooks/useState/ShortCircuit.jsx'
import AdvancedCounter from './components/hooks/useState/advancedCounter.jsx'
import ComponentSwitcher from './ComponentSwitcher.jsx'

const App = () => {
  return (
    <>
      <Practice />
      <Profile />
      <EventHandlers />
      <EventProps />
      <EventPropagation />
      <State />
      <Sibling />
      <DerivedState />
      <LiftStateUp />
      <ToggleButton />
      <ShortCircuit />
      <AdvancedCounter />
      <RegistrationForm />
      <LoginForm />
      <ContactForm />
      <UseEffect />
      <Challenge />
      <CleanUp />
      <FetchApi />
      <UseRef />
      <ForwardRefs />
      <UseId />
      <PropDrilling />
      <ContextApi />
      <LightDark />
      <UseReducer />
      <ReactMemo />
      <UseMemo />
      <UseCallback />
      <UseEffectEvent />
      <ReactHookForm />
      <IntegratingUiLibraries />
      <SchemaValidationYup />
      <Zustand />
      <FormikComponent />
      <ClassComponent message="How Are You!!!" />
      <HOC />
      <BuggyComponent />
      <LazyLoading />
      <Debounce />
      <Throttling />
      <ComponentSwitcher />
    </>
  )
}

export default App
