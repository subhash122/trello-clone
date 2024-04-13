import React, { useState } from 'react'
import './Board.css';
import Card from '../Card/Card';
import { Button, Form, Input, Modal } from 'antd';

function Board({ board, onDragEnd, onDragEnter, addCard, }) {
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const handleCancel = () => {
    setShowModal(false);
  };
  const onSubmit = (values) => {
    addCard(board.id, values)
    setShowModal(false)
  }
  return (
    <>
      {showModal && <Modal title="Create Task" open={showModal} onCancel={handleCancel} footer={null}>
        <Form layout="vertical" form={form}
          onFinish={onSubmit}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              { required: true, message: 'Title is required' },
            ]}
            style={{ marginBottom: 15 }}
          >
            <Input name="title" type="title" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Description is required' }]}
            style={{ marginBottom: 15 }}
          >
            <Input name="description" type='description' />
          </Form.Item>
          <Form.Item>
            <Button className='w-full' type="primary" htmlType="submit" id="login-submit">
              Create task
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      }
      <div className="board">
        <div className="board-inner" key={board?.id}>
          <div className="board-header">
            <p className="board-header-title">
              {board?.title}
              <span>{board?.cards?.length || 0}</span>
            </p>
          </div>

          <div className="board-cards custom-scroll"
          >
            {board?.cards?.map((item) => (
              <Card
                key={item.id}
                card={item}
                boardId={board.id}

                onDragEnter={onDragEnter}
                onDragEnd={onDragEnd}

              />
            ))}

            <div className="custom-input" onClick={() => setShowModal(true)}>
              <p className="custom-display board-add-card">+ Add Task</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Board
