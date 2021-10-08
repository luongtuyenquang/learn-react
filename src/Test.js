// import logo from './logo.svg';
// import './App.scss';
import { useEffect, useState } from 'react';
import PostList from './hooks/PostList';
import Pagination from './hooks/Pagination';
import queryString from 'query-string'
import PostFilter from './hooks/PostFilter';

function Test(){
    const [postList, setPostList] = useState([])
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRow: 50
    })
    const [filter, setFilter] = useState({
        _limit: 10,
        _page: 1,
    })
    useEffect(() => {
        async function fetchAPI(){
            const paramString = queryString.stringify(filter)
            const url = `http://js-post-api.herokuapp.com/api/posts?${paramString}`
            const responsive = await fetch(url)
            const responsiveJSON =  await responsive.json()
            setPostList(responsiveJSON.data)
            setPagination(responsiveJSON.pagination)
        }
        fetchAPI()
    }, [filter])
    function handlePageChange(newPage){
        setFilter({
            ...filter,
            _page: newPage
        })
    }
    function handleChange(value){
        setFilter({
            ...filter,
            _page: 1,
            title_like: value
        })
    }
    return (
        <div>
            <PostFilter change={handleChange}/>
            <PostList posts={postList}/>
            <Pagination 
                pagination={pagination}
                pageChange={handlePageChange}
            />
        </div>
    )
}

export default Test;
