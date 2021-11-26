import './assets/css/app.css';

import Sidebar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <ContentWrapper />
    </div>
  );
}

export default App;