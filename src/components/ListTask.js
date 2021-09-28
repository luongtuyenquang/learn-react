import React from "react";
import { Component } from "react";

class ListTask extends Component {

    render(){
        return  (
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Đi chơi Đi chơi Đi chơi</td>
                    <td>Kích hoạt</td>
                    <td>
                        <button type="button" className="btn btn-warning btn-right">Sửa</button>
                        <button type="button" className="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            </tbody>
        )
    }
}

export default ListTask;
