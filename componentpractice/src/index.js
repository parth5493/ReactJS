import ReactDOM from 'react-dom/client';
import HomePage from './homepage';
import FooterPage from './footer';
import HomePageDup from './homepage_dup';
import  './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><HomePage/><FooterPage/><HomePageDup/></>);


