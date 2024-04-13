import { projectsData } from '../../MockData/mockData'
import './Dashboard.css';
import { Image, Button, Modal, Pagination } from "antd";
import {
    PlusCircleFilled
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import coverImage from '../../assets/images/project.jpeg'

const limit = 6;

function Dashboard() {
    const [projects, setProjects] = useState([]);
    const [curPage, setCurPage] = useState(1);
    const [itemsCount, setitemsCount] = useState(0);

    useEffect(() => {
        setitemsCount(projectsData.length);
    }, [])

    useEffect(() => {
        changePageItems()
    }, [curPage])

    // method changes the project items based on changed page number
    const changePageItems = () => {
        let tempArr = projectsData.slice((curPage - 1) * limit, curPage * limit);
        setProjects(tempArr);
    }

    const changePage = (page) => {
        setCurPage(page);
    }

    return (
        <div className="app">
            <Header></Header>
            <div className='app-projects'>
                <div className='flex items-center'>
                    <h1 className='mt-3 mb-3 me-6 text-2xl font-bold'> Projects</h1>
                </div>

                {
                    projects.map((item) => (
                        <Link to={`/project/${item.id}`} key={item.id}>
                            <div className="content-box p-2 mt-4 mb-4 cursor-pointer">
                                <Image
                                    preview={false}
                                    width={150}
                                    height={150}
                                    src={coverImage}
                                />
                                <div className='pl-4'>
                                    <h2 className='text-lg font-semibold'>{item.title}</h2>
                                    <p className='text-base'>{item.desc}</p>
                                </div>
                            </div>
                        </Link>))
                }
            </div>
            <Pagination total={itemsCount} current={curPage} onChange={changePage} className='text-center pb-8' />

        </div>
    )
}

export default Dashboard
