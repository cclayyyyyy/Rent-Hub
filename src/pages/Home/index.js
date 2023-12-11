import React from 'react';
import { Route, Routes, useNavigate, useLocation, Link } from 'react-router-dom';
import News from '../News';
import { NavBar, TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import styles from './demo2.less';



function HomeContent() {
  return <div>首页</div>;
}

function Todo() {
  return <div>待办</div>;
}

function Message() {
  return <div>消息</div>;
}

function PersonalCenter() {
  return <div>我的</div>;
}

export default function Home() {
    const Bottom = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const { pathname } = location;
        const setRouteActive = (value) => {
          navigate(`/Home${value}`);
        };
        const tabs = [
          {
            key: '/Home',
            title: '首页',
            icon: <AppOutline />,
          },
          {
            key: '/todo',
            title: '待办',
            icon: <UnorderedListOutline />,
          },
          {
            key: '/message',
            title: '消息',
            icon: <MessageOutline />,
          },
          {
            key: '/me',
            title: '我的',
            icon: <UserOutline />,
          },
        ];

        return (
          <TabBar activeKey={location.pathname} onChange={(value) => setRouteActive(value)}>
            {tabs.map((item) => (
                <TabBar.Item
                    key={item.key}
                    icon={item.icon}
                    title={item.title}
                    selected={pathname === `/Home${item.key}` || (item.key === '/Home' && pathname === '/')}
                    onPress={() => setRouteActive(item.key)}
                />
            ))}
          </TabBar>
        );
      };
  return (
    <div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<h2>首页内容</h2>} />
        <Route path="/news" element={<News />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/message" element={<Message />} />
        <Route path="/me" element={<PersonalCenter />} />
      </Routes>
      <div className={styles.app}>
        <div className={styles.top}>
          <NavBar>配合路由使用</NavBar>
        </div>
        <div className={styles.body}></div>
        <div className={styles.bottom}>
          <Bottom />
        </div>
      </div>
    </div>
  );
}
