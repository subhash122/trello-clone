import { boardsData, projectsData } from '../../MockData/mockData'
import './Project.css';
import Board from '../Board/Board';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { toast } from 'react-toastify';


function Project() {
    const [projectData, setProjectData] = useState(null);
    const [boards, setBoards] = useState([]);
    const [targetCard, setTargetCard] = useState({
        boardId: null,
        cardId: null,
    });
    let { id } = useParams();

    useEffect(() => {
        setBoards([...boardsData])
        let data = projectsData.find((item) => item.id == id)
        setProjectData({ ...data })
    }, []);

    // adds the newly created task to appropiate board using boardId
    const addCardHandler = (boardId, values) => {
        const boardIndex = boards.findIndex((item) => item.id === boardId);
        const tempBoard = [...boards];
        tempBoard[boardIndex].cards.push({
            id: Date.now() + Math.random() * 10,
            title: values.title,
            date: values.date,
            desc: values.description,
        });
        setBoards(tempBoard);
        toast.success("task added successfully");
    }

    const onDragEnd = (boardId, cardId) => {
        // console.log(boardId, cardId)
        const sourceBoardIndex = boards.findIndex((item) => item.id === boardId);
        if (sourceBoardIndex < 0)
            return;
        const sourceCardIndex = boards[sourceBoardIndex]?.cards?.findIndex((item) => item.id === cardId)
        if (sourceCardIndex === undefined || sourceCardIndex < 0)
            return;
        const targetBoardIndex = boards.findIndex((item) => item.id === targetCard.boardId);
        if (targetBoardIndex < 0)
            return;

        const targetCardIndex = boards[targetBoardIndex]?.cards?.findIndex((item) => item.id === targetCard.cardId);
        if (targetCardIndex === undefined || targetCardIndex < 0)
            return;

        const tempBoards = [...boards];
        const sourceCard = tempBoards[sourceBoardIndex].cards[sourceCardIndex];
        tempBoards[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
        tempBoards[targetBoardIndex].cards.splice(targetCardIndex, 0, sourceCard);
        setBoards(tempBoards);
        setTargetCard({
            boardId: null,
            cardId: null,
        });
    }

    const onDragEnter = (boardId, cardId) => {
        
        if (targetCard.cardId === cardId)
            return;
        setTargetCard({
            boardId: boardId,
            cardId: cardId,
        });
    }
    return (
        <>
            <Header></Header>
            <div className="app">

                <div className="app-boards-container">
                    <div className='project-info'>
                        <h1 className='text-xl font-bold m-3 ml-7'>{projectData?.title}</h1>
                        <h6 className='text-lg font-regular m-3 ml-7'>{projectData?.desc}</h6>

                    </div>
                    <h2 className='text-xl font-bold ml-7 mb-4'>Tasks</h2>
                    <div className="app-boards">

                        {boards.map((item) => (
                            <Board
                                key={item.id}
                                board={item}
                                addCard={addCardHandler}
                               
                                onDragEnd={onDragEnd}
                                onDragEnter={onDragEnter}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
