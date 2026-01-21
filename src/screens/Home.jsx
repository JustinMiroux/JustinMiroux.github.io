import { Layout, ConfigProvider } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';

import MainHeader from '../components/mainHeader';
import MainFooter from '../components/mainFooter';

import '../styles/main.css';

export default function Home(){

    const antdTheme = {
        components: {
            Layout: {
                headerBg:'var(--subbackground)',
                bodyBg:'var(--background)',
                footerBg:'var(--subbackground)'
            }
        },
    }

    const contentStyle = {
        margin: '0.75%',
        padding: '0.75%',
    }

    return(
        <ConfigProvider theme={antdTheme}>
            <Layout>
                
                <MainHeader/>

                <Content style={contentStyle}>
                    <p>
                        This is test content
                    </p>
                </Content>
                
                <MainFooter/>

            </Layout>
        </ConfigProvider>
    )
}