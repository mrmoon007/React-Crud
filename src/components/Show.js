import React from 'react'

export default function Show(props) {
    return (
        <>
            <tr>
            <td>{props.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.email}</td>
            <td>{props.data.p_number}</td>
            <td className="">
                <button className="btn btn-primary " onClick={()=>props.editHandler(props.data,props.id)} >Edit</button>
                <button className="btn btn-danger m-1" onClick={(id)=>props.deleteHandler(id)} >Delete</button>
            </td>
            </tr>

        </>
    )
}
