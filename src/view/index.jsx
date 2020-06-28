import React from 'react';
import '../App.css';
import { Button } from 'antd';

import { AuthContext } from "../App";

function App() {
  const { state: authState,dispatch } = React.useContext(AuthContext);
  console.log(authState)
  return (
    <div className="App">
      <header className="App-header">
        用户：{ authState.user }
        <Button onClick={()=>{
            dispatch({
                type:'LOGOUT'
            })

        }}>
            退出</Button>
      </header>
    </div>
  );
}
export default App;
