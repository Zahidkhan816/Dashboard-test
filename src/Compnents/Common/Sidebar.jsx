    import React from 'react';
    import { Layout, Menu } from 'antd';
    import Menuitem from './Menuitems'; // Assuming this is correctly importing MenuItems
    import {
    DashboardOutlined,
    ShopOutlined,
    CarOutlined,
    } from '@ant-design/icons';

    const { Sider } = Layout;

    const getIconByTitle = (title) => {
    switch (title.toLowerCase()) {
        case 'dashboard':
        return <DashboardOutlined />;
        case 'drivers':
        return <CarOutlined />;
        case 'restaurants':
        return <ShopOutlined />;
        default:
        console.warn(`No icon found for title: ${title}`);
        return null;
    }
    };

    const Sidebar = () => {
    return (
        <>
        <Sider width={250} style={{ backgroundColor: '#fff', color: '#8B0000' }}>
            <div style={{ textAlign: 'center', padding: '16px' }}>
            <h2 style={{ color: 'black', fontWeight: 'bolder' }}>Swagkash</h2>
            </div>
            <Menu style={{ color: '#894567', fontSize: '15px', fontWeight: '600' }} mode="vertical" defaultSelectedKeys={['1']}>
            {
                Menuitem.map((item) => (
                <Menu.Item key={item.key} icon={getIconByTitle(item.name)}>
                    {item.name}
                </Menu.Item>
                ))
            }
            </Menu>
        </Sider>
        </>
    );
    };

    export default Sidebar;
