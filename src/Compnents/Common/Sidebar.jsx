import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import MenuItems from './Menuitems'; // Assuming this is correctly importing MenuItems
import {
  DashboardOutlined,
  ShopOutlined,
  CarOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const iconByTitle = {
  dashboard: <DashboardOutlined />,
  userpoints: <CarOutlined />,
  redeem: <ShopOutlined />,
};

const getIconByTitle = (title) => {
  const icon = iconByTitle[title.toLowerCase()];
  if (!icon) {
    console.warn(`No icon found for title: ${title}`);
  }
  return icon || null;
};

const Sidebar = () => {
  return (
    <>
      <Sider width={250} style={{ backgroundColor: '#fff', color: '#8B0000' }}>
        <div style={{ textAlign: 'center', padding: '16px' }}>
          <h2 style={{ color: 'black', fontWeight: 'bolder' }}>Swagkash</h2>
        </div>
        <Menu
          style={{ color: '#894567', fontSize: '15px', fontWeight: '600' }}
          mode="vertical"
          defaultSelectedKeys={['1']}
        >
          {MenuItems.map((item) => (
            <Menu.Item key={item.key} icon={getIconByTitle(item.key)}>
              <Link to={`/${item.key}`}>{item.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
