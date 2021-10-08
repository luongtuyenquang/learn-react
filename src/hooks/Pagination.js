// import logo from './logo.svg';
// import './App.scss';


function Pagination(props){
    const { pagination, pageChange } = props
    const { _page } = pagination
    // const totalPage = Math.ceil(_totalRow / _limit)
    // console.log(totalPage);
    function handlePageChange(newPage){
        pageChange(newPage)
    }
    return (
        <div>
            <button
                disabled={_page === 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                previous
            </button>
            <button
                disabled={_page === 5}
                onClick={() => handlePageChange(_page + 1)}
            >
                next
            </button>
        </div>
    )
}

export default Pagination;
