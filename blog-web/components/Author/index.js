
import {Avatar,Divider} from 'antd'
import {GithubOutlined,QqOutlined, WechatOutlined} from '@ant-design/icons';
import styles from './styles/index.module.css'

const Index =()=>{
    return (
        <div className={`${styles.author_div} comm-box`}>
            <div> <Avatar size={100} src="https://major9506.github.io/images/avatar.png"  /></div>
            <div className={styles.author_introduction}>
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className={styles.account}  />
                <Avatar size={28} icon={<QqOutlined />}  className={styles.account} />
                <Avatar size={28} icon={<WechatOutlined />}  className={styles.account}  />

            </div>
        </div>
    )

}

export default Index