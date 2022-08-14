import React from 'react'
import styles from './styles/index.module.css'
import {Row,Col, Menu} from 'antd'

const Index = () => (
  <div className={styles.header}>
    <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className={styles.header_logo}>Major_'s Blog</span>
            <span className={styles.header_txt}>年轻无为, 买码为生</span>
        </Col>

        <Col className={styles.memu_div} xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu  mode="horizontal">
                <Menu.Item key="home">
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                    视频
                </Menu.Item>
                <Menu.Item key="life">
                    生活
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)

export default Index