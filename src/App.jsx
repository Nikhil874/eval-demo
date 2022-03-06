import logo from './logo.svg';
import './App.css';
import { Menu } from './menu';
import { Counter } from './counter';

function App() {
  const initial=0;
  return (
<div className='App'><h1>Hotel Menu</h1>
<img src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg" alt="" />
<Menu/>
<Counter initial={initial}/>

</div>

  );
}

export default App;
