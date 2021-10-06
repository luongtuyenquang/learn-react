// import logo from './logo.svg';
// import './App.scss';
import { useEffect, useState } from 'react';
import PostList from './hooks/PostList';

function Test(){
    const [postList, setPostList] = useState([])
    useEffect(() => {
        async function fetchAPI(){
            const url = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
            const responsive = await fetch(url)
            const responsiveJSON =  await responsive.json()
            setPostList(responsiveJSON.data)
        }
        fetchAPI()
    }, [])
    return (
        <div>
            <PostList posts={postList}/>
        </div>
    )
}

export default Test;
