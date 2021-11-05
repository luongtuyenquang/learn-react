import React from "react";
import { Route, NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router";

function FormValue(){

    return (
        <div className='container'>
            <form>
                <label>Nhập tên:</label>
                <input type='text'></input>
            </form>
        </div>
    )
}
export default FormValue