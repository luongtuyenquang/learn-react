import React from "react";
import { useHistory } from "react-router";


function NotFound(){
    const history = useHistory()

    //goBack: quay trở lại trang trước đó
    return (
        <div className='container'>
            <h3>404 - This Page is Not Found</h3>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    )
}
export default NotFound