import React, {useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async() => {
            setLoading(true);
            const res = await axios.get('https://randomuser.me/api/?page=1&results=50&nat=us');
            setLoading(false);
            setUsers(res.data.results);
        };
        fetchUsers();
    }, [])


    return (
        <div>
            Pagination
            {loading ? <p>Loading..</p> : <>
                Data
            </>
            }
        </div>
    )
}

export default App
