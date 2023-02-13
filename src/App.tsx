import { StuffContextProvider } from './contexts/StuffContext';

import NamesPanel from './components/NamesPanel';
import Header from './components/Header';


function App() {
  return (
    <StuffContextProvider>
      <Header />
      <NamesPanel />
    </StuffContextProvider>
  );
}

export default App;
