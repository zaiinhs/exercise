import * as React from 'react';
import { Route, Routes} from "react-router-dom"

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));

const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <React.Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </React.Suspense>
  );
}

export default App;
