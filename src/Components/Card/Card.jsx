import React, { useState } from 'react'
import './Card.css'
import { CalendarOutlined, ClockCircleFilled, DashOutlined, FontSizeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { formatDate, trimDesc } from "../../Helper/Util";
import { Dropdown, Menu, Modal } from 'antd';

function Card({ card, boardId, onDragEnd, onDragEnter,deleteCard }) {
    const { id, title, desc, date } = card;
    const [showModal, setShowModal] = useState(false);
    const handleCancel = () => {
        setShowModal(false);
    };

    const deleteHandler=(e,boardId,cardId)=>{
        e.stopPropagation();
        deleteCard(boardId,cardId);
    }

    const items = [
        {
            label: <Menu >
                <Menu.Item key="0">
                    <div type="button" onClick={(e)=>deleteHandler(e,boardId,id)}>
                        Delete task
                    </div>
                </Menu.Item>
            </Menu>,
            key: '0',
        },
    ]

    return (
        <>
            <Modal title="Task details" open={showModal} onCancel={handleCancel} footer={null}>
                <div className="cardinfo">
                    <div className="cardinfo-box">
                        <div className="cardinfo-box-title">
                            <FontSizeOutlined />
                            <h5>Title</h5>
                        </div>
                        <p className='text-lg text-regular custom-input-display'>{title}</p>
                    </div>
                </div>
                <div className="cardinfo">
                    <div className="cardinfo-box">
                        <div className="cardinfo-box-title">
                            <UnorderedListOutlined />
                            <h5>Description</h5>
                        </div>
                        <p className='text-lg text-regular custom-input-display'>{desc}</p>
                    </div>
                </div>
                {date && <div className="cardinfo">
                    <div className="cardinfo-box">
                        <div className="cardinfo-box-title">
                            <CalendarOutlined />
                            <h5>Due Date</h5>
                        </div>
                        <p className='text-lg text-regular custom-input-display'>{formatDate(date)}</p>
                    </div>
                </div>
                }
            </Modal>

            <div
                className="card"
                key={card.id}
                draggable
                onDragEnd={() => onDragEnd(boardId, id)}
                onDragEnter={() => onDragEnter(boardId, id)}
                onClick={() => setShowModal(true)}
            >
                <div className="card-top">
                    <div className="card-title">{title}</div>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                        onClick={(e)=>e.stopPropagation()}
                    ><div className="cursor-pointer ml-5 me-4">
                            <DashOutlined style={{ fontSize: '1.5rem' }} />
                        </div>
                    </Dropdown>
                </div>


                <div className="card-description">{trimDesc(desc)}</div>
                <div className="card-footer">
                    {date && (
                        <p className="card-footer-item">
                            <ClockCircleFilled className="card-footer-icon" />
                            {formatDate(date)}
                        </p>
                    )}
                </div>

            </div>
        </>

    )
}

export default Card
