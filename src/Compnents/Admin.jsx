import React, { useState, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  Layout,
  Card,
  Input as FormItemInput,
  Badge,
  Button,
  Dropdown,
  Menu,
  Avatar,
  Table,
  Space,
  Tabs,
  Modal,
  Form,
  Input,
  Select,
} from 'antd';
import InputMask from 'react-input-mask';
import './Admin.css';
import {
  DashboardOutlined,
  ShopOutlined,
  SettingOutlined,
  CarOutlined,
  SearchOutlined,
  BellOutlined,
  DownOutlined,
  UserOutlined,
  EllipsisOutlined
} from '@ant-design/icons';
import Sidebar from './Common/Sidebar';
const { Sider, Content } = Layout;
const { Meta } = Card;
const { TabPane } = Tabs;
const { Option } = Select;
const cardsData = [
  // { icon: <DashboardOutlined />, title: 'Users ', value: 4002, avg: "16% vs 30Dni" },
  // { icon: <CarOutlined />, title: 'Obrót', value: 57820, avg: "26% vs 30Dni" },
  // { icon: <ShopOutlined />, title: 'Przecenione ', value: 12345, avg: "46% vs 30Dni" },
  { icon: <SettingOutlined />, title: 'Total points Earned', value: 9876, avg: "56% vs 30Dni" },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState('Active');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '' });
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };


  const handleFormSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((errorInfo) => {
        console.error('Validation failed:', errorInfo);
      });
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
  };



  const data = [
    { key: '1', user: 'John Doe', points: 150, userId: 'ABC123', role: 'admin', status: "Active" },
    { key: '2', user: 'Jane Smith', points: 200, userId: 'XYZ456', role: 'member', status: "Inactive" },
    { key: '3', user: 'zahid khan', points: 100, userId: "key41314", role: 'member', status: "Pending" },
    { key: '4', user: 'Ali ahmad', points: 90, userId: "key42213131", role: 'member', status: "Pending" },
    { key: '5', user: 'Hamza', points: 90, userId: "key4225242134", role: 'admin', status: "Active" },
    { key: '6', user: 'naveed', points: 90, userId: "key473252134", role: 'member', status: "Active" }
  ];

  const columns = [
    { title: 'Users', dataIndex: 'user', key: 'user', role: 'role' },
    { title: 'User ID', dataIndex: 'userId', key: 'userId', role: 'role' },
    { title: 'Earned Points', dataIndex: 'points', key: 'points', role: 'role' },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (text) => {
        if (text === 'admin') {
          // Render FontAwesome icon for admin
          return <><span>Admin</span> <FontAwesomeIcon icon={faUserTie} size='lg' /></>;
        } else if (text === 'member') {
          // Render FontAwesome icon for member
          return <><span>Member</span> <FontAwesomeIcon icon={faUser} size='lg' /></> ;
        } else {
          
          return text;
        }
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        const statusStyle = {
          color: text === 'Active' ? '#4BB543' : text === 'Inactive' ? '#ff0e0e' : text === 'Pending' ? '#f7cb73' : 'inherit',
          fontWeight: 'bolder'
        };
        return <span style={statusStyle}>{text}</span>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
              {record.status === 'pending' || record.status === 'inactive' ? (
                <>
                  <Menu.Item key="1">Delete</Menu.Item>
                  <Menu.Item key="2">Activate</Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item key="3">Delete</Menu.Item>
                  <Menu.Item key="4">Suspend</Menu.Item>
                  {record.role === 'member' && <Menu.Item key="5">Make Admin</Menu.Item>}
                </>
              )}
            </Menu>   
            }
            placement="bottomRight"
            trigger={['click']}
          >
            <Button icon={<EllipsisOutlined />} style={{ transform: 'rotate(90deg)' }} />
          </Dropdown>
        </Space>
      ),
    },
  ];

  const filteredData = data.filter(item => {
    if (activeTab === 'Active') {
      return item.status === "Active";
    } else if (activeTab === 'Inactive') {
      return item.status === "Inactive" || item.status === "Pending";
    }
    return true;
  });

  return (
    <div style={{ display: "flex" }}>
      <Sidebar setActiveTab={setActiveTab} />
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <Content>
            <div style={{ display: 'flex', justifyContent: "space-between", padding: '16px' }}>
              <div>
                <h2 style={{ fontFamily: "sans-serif" }}>Wellcome to Swagkash</h2>
              </div>
              <div>
                <div>
                  <Badge count={3} overflowCount={10} style={{ marginRight: '20px' }}>
                    <BellOutlined style={{ fontSize: '18px', color: 'black', marginTop: "5px", marginRight: "25px" }} />
                  </Badge>
                  <Button style={{ height: '50px' }}>
                    <Avatar icon={<UserOutlined />} style={{ marginRight: '10px' }} />
                    Zahid khan <DownOutlined></DownOutlined>
                  </Button>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '16px' }}>
              {cardsData.map((card, index) => (
                <Card key={index} style={{ width: '27%', height: "200px", marginBottom: '16px' }}>
                  <Meta
                    avatar={card.icon}
                    title={<span style={{ color: "Black" }}>{card.title}</span>}
                    description={
                      <>
                        <h2>{`${card.value}k`}</h2>
                      </>
                    }
                  />
                </Card>
              ))}
            </div>
            <div style={{ padding: "16px" }}>
              <Card>
                <Tabs
                  activeKey={activeTab}
                  onChange={handleTabChange}
                  tabBarExtraContent={
                    <Button type="primary" onClick={showModal}>
                      Add Member
                    </Button>
                  }
                >
                  <TabPane tab={<span> Active</span>} key="Active" >
                    <div style={{ padding: '16px' }}>
                      <Table dataSource={filteredData} columns={columns} />
                    </div>
                  </TabPane>
                  <TabPane tab={<span> Inactive</span>} key="Inactive">
                    <div style={{ padding: '16px' }}>
                      <Table dataSource={filteredData} columns={columns} />
                    </div>
                  </TabPane>
                </Tabs>
                <Modal
                  title="Add Member"
                  visible={isModalVisible}
                  onCancel={handleCancel}
                  footer={[
                    <Button key="cancel" onClick={handleCancel}>
                      Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleFormSubmit}>
                      Submit
                    </Button>,
                  ]}
                >
                  <Form form={form}>
                    <label htmlFor="Name">Name*</label>
                    <Form.Item
                      name="name"
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input />
                    </Form.Item>
                    <label htmlFor="Email">Email*</label>
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email address' },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <label htmlFor="Phone">Phone*</label>
                    <Form.Item
                      name="phone"
                      rules={[{ required: true, message: 'Please enter your phone number' }]}
                    >
                      <InputMask
                        mask="(999) 999-9999"
                        maskChar=""
                        alwaysShowMask={false}
                      >
                        {(inputProps) => (
                          <Input {...inputProps} placeholder="(999) 999-9999" />
                        )}
                      </InputMask>
                    </Form.Item>
                    <label htmlFor="Role">Role*</label>
                    <Form.Item
                      name="role"
                      rules={[{ required: true, message: 'Please select a role' }]}
                    >
                      <Select placeholder="Select a role">
                        <Option value="admin">Admin</Option>
                        <Option value="member">Member</Option>
                      </Select>
                    </Form.Item>
                  </Form>
                </Modal>
              </Card>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>

  );
};

export default Admin;
