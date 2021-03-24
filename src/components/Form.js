import React,{useState} from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Show from './Show'

export default function Form() {
    const [state,setState]=useState({
        name:null,
        email:null,
        p_number:null,
        id:null,
        list:[]
    })

    const [status,setStatus]=useState(false)

    const onChangeHandler=(value,name)=>{
        const stateData ={...state}
        stateData[name]=value
        setState(stateData)
        console.log(value)

    }

    const submitHendeler=(e)=>{
        e.preventDefault();
        const clonestate={...state}
        const data={
            name:state.name,
            email:state.email,
            p_number: state.p_number
        }
        clonestate.list.push(data)
        setState(clonestate)
        const clonestate1={...state}
        clonestate1.name=''
        clonestate1.email=''
        clonestate1.p_number=''

        setState(clonestate1)
    }

    const deleteHandler=(id)=>{
        const clonedata={...state}
        clonedata.list.splice(id,1)
        setState(clonedata)
    }
    

    const editHandler=(data,id)=>{
        
        setStatus(true)
        const cloneEditdata={...state}
        cloneEditdata.name=data.name
        cloneEditdata.email=data.email
        cloneEditdata.p_number=data.p_number
        cloneEditdata.id=id
        setState(cloneEditdata)
        
    }

    const updateHandler=(e)=>{
        e.preventDefault();
        const cloneUpdateData={...state}
        for (let index = 0; index < cloneUpdateData.list.length; index++) {
            const element=cloneUpdateData.list[index]
            if(index===state.id){
                element.name=state.name
                element.email=state.email
                element.p_number=state.p_number
            }
            
        }
        setState(cloneUpdateData)
        console.log(state)
        setStatus(false)

    }

    return (
        <div className="">
            <form onSubmit={(e)=> status ? updateHandler(e):submitHendeler(e)}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name : </label>
                    <div className="col-sm-10">
                        <input type="text" name="name" value={state.name} onChange={(e)=>onChangeHandler(e.target.value,'name')} className="form-control-plaintext" placeholder="Enter your name" ></input>
                    </div>    
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email : </label>
                    <div className="col-sm-10">
                        <input type="email" name="email" value={state.email} onChange={(e)=>onChangeHandler(e.target.value,"email")} className="form-control-plaintext" placeholder="Enter your Email" ></input>
                    </div>    
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Phone Number : </label>
                    <div className="col-sm-10">
                        <input type="text" name="p_number" value={state.p_number} onChange={(e)=>onChangeHandler(e.target.value,'p_number')} className="form-control-plaintext" placeholder="Enter your Phone Number" ></input>
                    </div>    
                </div>
                {
                    status? <button className="btn btn-info" >Update</button>  : <button type="submit" className="btn btn-primary">Save</button>
                }
                
            </form>

            <div>
                <table class="table mt-3">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            
                            state.list.map((data,id)=>(
                                <> 
                                    <Show data={data} 
                                        id={id+1}
                                        deleteHandler={()=>deleteHandler(id)} 
                                        editHandler={()=>editHandler(data,id)}
                                        
                                    />
                                </>
                            ))
                            
                        }
                    </tbody>
                </table>

                
            </div>
            
        </div>
    )
}
