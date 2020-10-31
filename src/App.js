import Main from "./pages/Main";
import 'antd/dist/antd.css';
import styled from 'styled-components'
import {StoreContext} from "./StoreContext";

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`

export const WrapperStyles = styled.div`
  background-color: #fff;
  padding: 24px;
  margin-bottom: 24px;
`

function App() {
  return (
    <StoreContext>
      <div className="beer-app">
        <Main />
      </div>
    </StoreContext>
  );
}

export default App;
