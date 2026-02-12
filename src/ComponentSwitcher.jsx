import { useState } from "react";


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

const componentsMap = {
  // Practice: <Practice />,
  Profile: <Profile />,
  EventHandlers: <EventHandlers />,
  EventProps: <EventProps />,
  EventPropagation: <EventPropagation />,
  State: <State />,
  // Sibling: <Sibling />,
  DerivedState: <DerivedState />,
  LiftStateUp: <LiftStateUp />,
  ToggleButton: <ToggleButton />,
  ShortCircuit: <ShortCircuit />,
  AdvancedCounter: <AdvancedCounter />,
  // RegistrationForm: <RegistrationForm />,
  // LoginForm: <LoginForm />,
  // ContactForm: <ContactForm />,
  UseEffect: <UseEffect />,
  // Challenge: <Challenge />,
  // CleanUp: <CleanUp />,
  // FetchApi: <FetchApi />,
  UseRef: <UseRef />,
  ForwardRefs: <ForwardRefs />,
  UseId: <UseId />,
  PropDrilling: <PropDrilling />,
  ContextApi: <ContextApi />,
  // LightDark: <LightDark />,
  UseReducer: <UseReducer />,
  ReactMemo: <ReactMemo />,
  UseMemo: <UseMemo />,
  UseCallback: <UseCallback />,
  UseEffectEvent: <UseEffectEvent />,
  ReactHookForm: <ReactHookForm />,
  IntegratingUiLibraries: <IntegratingUiLibraries />,
  SchemaValidationYup: <SchemaValidationYup />,
  Zustand: <Zustand />,
  FormikComponent: <FormikComponent />,
  ClassComponent: <ClassComponent message="How Are You!!!" />,
  HOC: <HOC />,
  BuggyComponent: <BuggyComponent />,
  LazyLoading: <LazyLoading />,
  Debounce: <Debounce />,
  Throttling: <Throttling />
};

const ComponentSwitcher = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="">

      {/* Buttons Section */}
      <div className="grid grid-cols-6 gap-5">
        {Object.keys(componentsMap).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className="w-full! p-2! cursor-pointer"
          >
            {key}
          </button>
        ))}
      </div>

      {/* Component Render Section */}
      <div style={{ marginTop: "20px" }}>
        {selected ? componentsMap[selected] : <h3>Select a component</h3>}
      </div>
    </div>
  );
};

export default ComponentSwitcher;
