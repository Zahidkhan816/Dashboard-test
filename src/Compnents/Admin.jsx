import React from 'react';
import { Layout, Card, Input, Badge, Button, Dropdown, Menu, Progress, Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Admin.css';
import {
    DashboardOutlined,
    CalendarOutlined,
    CheckCircleOutlined,
    ShopOutlined,
    TagsOutlined,
    TableOutlined,
    ToolOutlined,
    SettingOutlined,
    CarOutlined,
    SearchOutlined,
    BellOutlined,
    DownOutlined,
    UserOutlined
} from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart } from 'recharts';

const { Sider, Content } = Layout;
const { Meta } = Card;

const cardsData = [
    { icon: <DashboardOutlined />, title: 'zamówienia ', value: 4002, avg: "16% vs 30Dni" },
    { icon: <CarOutlined />, title: 'Obrót', value: 57820, avg: "26% vs 30Dni" },
    { icon: <ShopOutlined />, title: 'Przecenione ', value: 12345, avg: "46% vs 30Dni" },
    { icon: <SettingOutlined />, title: 'Sesjed ', value: 9876, avg: "56% vs 30Dni   " },
]
const chartData = [
    { name: "January", data: 65 },
    { name: "February", data: 59 },
    { name: "March", data: 80 },
    { name: "April", data: 81 },
    { name: "May", data: 56 },
    { name: "June", data: 55 },
];


const Admin = () => {
    const getIconByTitle = (title) => {
        switch (title.toLowerCase()) {
            case 'dashboard':
                return <DashboardOutlined />;
            case 'drivers':
                return <CarOutlined />;
            case 'restaurants':
                return <ShopOutlined />;
            case 'coupons & loyalty':
                return <TagsOutlined />;
            case 'fare management':
                return <CalendarOutlined />;
            case 'table management':
                return <TableOutlined />;
            case 'stock management':
                return <ToolOutlined />;
            case 'settings':
                return <SettingOutlined />;
            case 'integrations':
                return <CheckCircleOutlined />;
            default:
                return null;
        }
    };

    // ... (previous code)

    const chartData = [
        { name: "January", data1: 65, data2: 25 },
        { name: "February", data1: 59, data2: 30 },
        { name: "March", data1: 80, data2: 40 },
        { name: "April", data1: 81, data2: 35 },
        { name: "May", data1: 56, data2: 20 },
        { name: "June", data1: 55, data2: 18 },
        { name: "July", data1: 70, data2: 55 },
        { name: "August", data1: 75, data2: 50 },
        { name: "September", data1: 85, data2: 65 },
        { name: "October", data1: 90, data2: 60 },
        { name: "November", data1: 78, data2: 45 },
        { name: "December", data1: 95, data2: 75 },
    ];


    // ... (rest of the code)

    const progressData = [
        { percent: 85, color: '#8CE382' },
    ];
    const getRandomValue = () => {
        return (Math.random() * 100).toFixed(1);
    };
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    const color = getRandomColor();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={250} style={{ backgroundColor: "#FFFFFF", color: "#8B0000" }}>
                <div style={{ textAlign: "center", padding: "16px" }}>
                    <h2 style={{ color: "black", fontWeight: "bolder" }}>Yummy</h2>
                    <p style={{ color: "black", textAlign: "left" }}>Home</p>
                </div>
                <Menu style={{ color: "#894567", fontSize: "15px", fontWeight: "600" }} mode="vertical" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={getIconByTitle("Dashboard")}>
                        <span>Dashboard</span>
                    </Menu.Item>
                    <Menu.Item key="2" icon={getIconByTitle("Drivers")}>
                        <span>Drivers</span>
                    </Menu.Item>
                    <Menu.Item key="3" icon={getIconByTitle("Restaurants")}>
                        <span>Restaurants</span>
                    </Menu.Item>
                    <Menu.Item key="4" icon={getIconByTitle("Coupons & Loyalty")}>
                        <span>Coupons & Loyalty</span>
                    </Menu.Item>
                    <Menu.Item key="5" icon={getIconByTitle("Fare Management")}>
                        <span>Fare Management</span>
                    </Menu.Item>
                    <Menu.Item key="6" icon={getIconByTitle("Table Management")}>
                        <span>Table Management</span>
                    </Menu.Item>
                    <Menu.Item key="7" icon={getIconByTitle("Stock Management")}>
                        <span>Stock Management</span>
                    </Menu.Item>
                    <Menu.Item key="8" icon={getIconByTitle("Settings")}>
                        <span>Settings</span>
                    </Menu.Item>
                    <Menu.Item key="9" icon={getIconByTitle("Integrations")}>
                        <span>Integrations</span>
                    </Menu.Item>

                </Menu>
            </Sider>
            <Layout>
                <Content>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
                        <h3 style={{ margin: 0 }}>Tablica </h3>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Input
                                placeholder="Search"
                                style={{ width: 400, marginRight: '400px' }}
                                suffix={<SearchOutlined style={{ color: '#8B0000' }} />}
                            />
                            <Badge count={3} overflowCount={10} style={{ marginRight: '20px', }}>
                                <BellOutlined style={{ fontSize: '18px', color: 'black', marginRight: '23px', marginTop: "5px" }} />
                            </Badge>
                            <Button style={{ height: '50px' }}>
                                <Avatar icon={<UserOutlined />} style={{ marginRight: '10px' }} />
                                Kamila Jench <DownOutlined />
                                <p style={{ textAlign: 'left', color: 'red', marginTop: '5px' }}>Admin</p>
                            </Button>
                        </div>
                    </div>
                    <div style={{ padding: '16px' }}>
                        <h3>Witaj, Tomek</h3>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ marginLeft: "10px" }}><span style={{ fontWeight: "500" }}>Poniedziałek, 17 Maja 2023</span>  Macie 5 zamówień dziś  <a href="#" style={{ color: "#E16FA8", marginLeft: "10px" }}>Zobacz raporty w PDF</a></p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '16px' }}>
                        {cardsData.map((card, index) => (
                            <Card key={index} style={{ width: '25%', height: "200px", marginBottom: '16px' }}>
                                <Meta
                                    avatar={card.icon}
                                    title={<span style={{ color: color }}>{card.title}</span>}
                                    description={
                                        <>
                                            <h2>{`${card.value}k`}</h2>
                                            <br />
                                            <p>{`${card.avg}`}</p>
                                        </>
                                    }
                                />

                            </Card>
                        ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: 'wrap', padding: '16px' }}>
                        <Card style={{ width: '730px', height: "350px", marginBottom: '16px' }}>

                            <Meta
                                title="Sprzedaż"
                                description={
                                    <>
                                        <p>Porównaj sprzedaż w danych okresach</p>
                                        <LineChart width={670} height={300} data={chartData}>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="data1" stroke="#E16FA8" strokeWidth={3} name="Obecny" />
                                            <Line type="monotone" dataKey="data2" stroke="#0080FF" strokeWidth={3} name="Poprzedni" />
                                        </LineChart>
                                    </>

                                }
                            />
                        </Card>
                        <Card style={{ width: '350px', height: '350px', marginBottom: '16px', display: 'flex' }}>
                            <Meta
                                style={{ display: 'flex', flexDirection: 'column' }}
                                title="Sprzedaż"

                                description={
                                    <>
                                        <p>Porównaj sprzedaż w danych okresach</p>
                                        <div style={{ display: 'flex' }}>

                                            {progressData.map((progress, index) => (
                                                <Progress
                                                    key={index}
                                                    type="circle"
                                                    percent={progress.percent}
                                                    width={120}
                                                    format={() => `Wszystk 160`}
                                                    strokeColor={progress.color}
                                                    style={{ marginRight: '16px' }}
                                                />
                                            ))}
                                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '16px' }}>
                                                <div style={{ display: 'flex' }}>
                                                    <span style={{ width: '12px', height: '12px', background: 'lightgreen', marginRight: '4px' }}></span>
                                                    <p>Zakończone</p>
                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <span style={{ width: '12px', height: '12px', background: 'yellow', marginRight: '4px' }}></span>
                                                    <p>Trakcie</p>

                                                </div>
                                                <div style={{ display: 'flex' }}>
                                                    <span style={{ width: '12px', height: '12px', background: 'red', marginRight: '4px' }}></span>
                                                    <p>Hakrjsu</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }
                            />
                            <hr />
                            <p>Restauracja w Krakowie generuje najwięcej zamówień.</p>
                        </Card>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: 'wrap', padding: '16px' }}>
                        <Card style={{ width: '540px', height: "440px", marginBottom: '16px' }}>
                            <h3>
                                Raporty
                                <span style={{ marginLeft: '8px', backgroundColor: 'white', padding: '4px', borderRadius: '50%' }}>
                                    <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: "20px" }} />
                                </span>
                            </h3>

                            <p>Kliknij w boxy, aby zmienić graf</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                {[1, 2, 3].map((cardIndex) => (
                                    <Card key={cardIndex} style={{ width: '150px', height: '90px', marginBottom: '16px' }}>
                                        <Meta
                                            title={"Klienci"}
                                            description={
                                                <>
                                                <h3>{getRandomValue()}k</h3>
                                                </>
                                            }
                                        />
                                    </Card>
                                ))}
                            </div>
                            <Meta
                                description={
                                    <>

                                        <div style={{ backdropFilter: 'blur(6px)' }}>
                                            <AreaChart width={400} height={250} data={chartData}>
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                                <Tooltip />
                                                <Legend />
                                                <Area type="monotone" dataKey="data1" fill="rgba(225, 111, 168, 0.10)" stroke="#FF0000" name="Data 1" />
                                            </AreaChart>
                                        </div>
                                    </>
                                }
                            />
                        </Card>

                        {/* New Card with Input Fields */}
                        <Card style={{ width: '600px', height: '500px', marginBottom: '16px' }}>
                            <h3>Pochodzenie zamówienia</h3>
                            <p>Kliknij w źródło, aby wyświetlić więcej</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div className="custom-progress-container">
                                    <label>Website:</label>
                                    <div className="custom-progress" style={{ width: '25.34%' }}></div> <span>25.34%%</span>
                                </div>
                                <div className="custom-progress-container">
                                    <label>Ohone</label>
                                    <div className="custom-progress" style={{ width: '16.2%' }}></div> <span>16.2%</span>
                                </div>
                                <div className="custom-progress-container">
                                    <label>Uber Eats</label>
                                    <div className="custom-progress" style={{ width: '12.3%' }}></div> <span>12.3%</span>
                                </div>
                                <div className="custom-progress-container">
                                    <label>Pyszne</label>
                                    <div className="custom-progress" style={{ width: '11.4%' }}></div> <span>11.4%%</span>
                                </div>
                            </div>
                        </Card>



                    </div>


                    {/* Additional main content goes here */}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Admin;
