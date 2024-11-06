import React, { useState, lazy, Suspense, useEffect, useCallback } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
// import ModalComponent from './components/ModalComponent';
import { useSelector } from 'react-redux';

// Lazy-load Counter component
 const Counter = lazy(() => import('./components/Counter'));
 const ThemeToggler = lazy (() => import('./components/ThemeToggler'));
 
// import Counter from './components/Counter';

function App() {
  const currentTheme = useSelector(state => state?.theme?.value);
  const [showCounter, setShowCounter] = useState(false);

  const toggleShowCounter = () => {
    setShowCounter(!showCounter);
  };

  //dake API call
  const statusCode = 200;
  const fakeApiCall = useCallback(async() => new Promise((resolve, reject) => {
    if (statusCode === 200) {
       resolve([{
         firstName : "David",
         lastName: "Ensor",
         id : 123
       }])
    }
    else {
      reject({message : "Unauthorized", statusCode })
    }
 }),[])

  useEffect(() => {
    setTimeout(() => {
      fakeApiCall().then(results => {
        console.log(results)
      })
    }, 2000)
  }, [fakeApiCall])

  const TestJSEventSlope = useCallback(() => {
    setTimeout(() => {
      console.log("timeOutCalled")
    }, 10)
    
    fakeApiCall().then(results => {
      console.log("Api Called")
    })

    console.log("Some method called")
  }, [fakeApiCall]) 

  useEffect(() => {
    TestJSEventSlope()
  }, [TestJSEventSlope])
   
  return (
    <div className="App" style={{backgroundColor: currentTheme === "light" ? "white" : "black"}}>
      <button onClick={toggleShowCounter}>Show Counter</button>
        
        {/* <ModalComponent /> */}

         {showCounter && <ErrorBoundary>
          <Suspense fallback={<div>Loading Counter...</div>}>
            <Counter />
          </Suspense>
        </ErrorBoundary>}

          <Suspense fallback={<div>Toggler is Loading ...</div>}>
             <ThemeToggler/>
          </Suspense>

      
    </div>
  );
}

export default App;
