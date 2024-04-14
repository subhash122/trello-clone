import React from 'react'
import './Header.css'
import { Dropdown, Menu, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'


function Header() {
    
    const logout = () => {
        localStorage.clear();
        window.location.reload()
    }
    const items = [
        {
            label: <Menu>
                <Menu.Item key="0">
                    <div type="button" onClick={logout}>
                        Logout
                    </div>
                </Menu.Item>
            </Menu>,
            key: '0',
        },
    ]
    return (
        <div className="app-nav">
            <h1 className='text-3xl font-bold'>Trello - clone</h1>
            <div className='flex align-center'>
                <p className="user-email">Hello {localStorage.getItem("email")}</p>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                ><div className="cursor-pointer ml-5 me-4">
                    <UserOutlined style={{ fontSize: '1.5rem'}} />
                    </div>
                </Dropdown>

            </div>

        </div>
    )
}

export default Header
