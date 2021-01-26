import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './routers/AppRoutes';
import { Provider } from 'react-redux'
import { store } from './redux/redux';
import 'bootstrap/dist/css/bootstrap.min.css'
// import './styles/styles.scss';
// import './styles/components/Home.scss';
// import './styles/components/AsidePage.scss';
// import './styles/components/AsideNav.scss';
// import './styles/components/Project.scss';
// import './styles/components/About.scss';
// import './styles/components/Contact.scss';
// import './styles/components/DashBoard.scss';
// import './styles/components/ProjectCreate.scss';
// import './styles/components/ProjectUpdate.scss';
// import './styles/components/AppRoutes.scss';
// import './styles/components/Login.scss';
// import './styles/components/devices.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
