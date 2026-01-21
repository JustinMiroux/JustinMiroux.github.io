import { Dropdown } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { DownOutlined } from '@ant-design/icons';

import '../styles/HF.css';


export default function MainHeader() {

    const items = [
        {
            label: (
                <a href='/'>Accueil</a>
            ),
            key: '0',
        },
        {
            label: (
                <a href='/projects'>Projects</a>
            ),
            key: '1',
        }
    ]

    const headerStyle = {
        margin: '0.75%',
        padding: '0.75%',
        border: 'none',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    return (
        <Header style={{...headerStyle}}>
            <h1>miroux.<span className="accent">dev</span></h1>

            <Dropdown menu={{ items }} trigger={['click']} placement="bottom">
                <a onClick={e => e.preventDefault()}><DownOutlined /></a>
            </Dropdown>
        </Header>
    )
}