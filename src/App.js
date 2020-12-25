import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Users from './components/Users'
import Pagination from './components/Pagination'
import { ITEM_PER_PAGE }  from './components/utils/ConstantVariable'
import logo from './giphy.gif'

const App = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState()

    useEffect(() => {
        const fetchUsers = async() => {
            setLoading(true);
            const res = await axios.get('https://randomuser.me/api/?page=1&results=50&nat=us');
            setLoading(false);
            setUsers(res.data.results);
            console.log(res.data.results)
            setTotalPages(Math.ceil(res.data.results.length/ITEM_PER_PAGE))
        };
        fetchUsers();
    }, [])

    const handleClick = num => {
        setPage(num);
    }


    return (
        <div>
            <h1 style={{padding: '20px', display: 'flex',   justifyContent: 'center'}}>Pagination</h1>
            {loading ? <img src={logo} alt="Logo" /> : <>
                <Users users={users} page={page} />
                <Pagination totalPages={totalPages} handleClick={handleClick} />
            </>
            }
        </div>
    )
}

export default App
