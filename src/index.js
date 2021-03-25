import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './routers/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist//js/bootstrap.bundle.min.js'
import './styles/styles.scss';
import './styles/components/SocialLinks.scss';
import './styles/components/Home.scss';
// import './styles/components/AsidePage.scss';
import './styles/components/Navigation.scss';
import './styles/components/Project.scss';
import './styles/components/ShowProject.scss';
import './styles/components/About.scss';
import './styles/components/Contact.scss';
// import './styles/components/DashBoard.scss';
// import './styles/components/ProjectCreate.scss';
// import './styles/components/ProjectUpdate.scss';
// import './styles/components/AppRoutes.scss';
// import './styles/components/Login.scss';
import './styles/components/devices.scss';

ReactDOM.render(
  <React.StrictMode>
      <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
