// import logo from './logo.svg';
// import './App.scss';


function PostList(props){
    const { posts } = props
    const render = posts.map(post => {
        return <ul key={post.id}>
                    <li>{post.title}</li>
                </ul>
    })
    return (
        <div>
            {render}
        </div>
    )
}

export default PostList;
