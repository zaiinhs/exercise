import * as React from 'react';
import { Route, Routes} from "react-router-dom"

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Error404 = React.lazy(() => import('./components/Error404'));

const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <React.Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </React.Suspense>
  );
}

export default App;
