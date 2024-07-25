import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/Store/appStore';

const App = ()=> {
  const [userName, setUserName] = useState('');

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedinUser : userName, setUserName}}>
        <div className="h-[100%] bg-gradient-to-tr from-[#d16ba5] via-[#c777b9] via-[#ba83ca] via-[#aa8fd8] via-[#9a9ae1] via-[#8aa7ec] via-[#79b3f4] via-[#69bff8] via-[#52cffe] via-[#41dfff] via-[#46eefa]  to[#5ffbf1]">
          <Header/>
          <Outlet/>
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
