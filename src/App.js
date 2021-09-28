import { Layout } from 'antd';

import HeaderMenu from './components/HeaderMenu'
import SiderMenu from './components/SiderMenu'
import ContentMain from './components/ContentMain'
import Login from './pages/Login'

import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    // <Layout>
    //   <HeaderMenu></HeaderMenu>
    //   <Layout>
    //     <SiderMenu></SiderMenu>
    //     <ContentMain></ContentMain>
    //   </Layout>
    // </Layout>
    <Login></Login>
  );
}

export default App;
