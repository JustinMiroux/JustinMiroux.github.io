import { Footer } from 'antd/es/layout/layout';

import '../styles/HF.css';


export default function MainFooter() {

    const footerStyle = {
        margin: '0.75%',
        padding: '0.75%',
        border: 'none',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }

    return (
        <Footer style={{...footerStyle}}>
            <p>Made by Miroux Justin</p>
        </Footer>
    )
}