import { useEffect, useState } from "react"
import { executeReading, executeUpdating } from "./Constituencies"

export const Update=(praba)=>{
    const[one,setOne]=useState({})

    useEffect(()=>{
        //alert("use effect "+praba.particular)
        setOne(executeReading(praba.particular))
    },[])

    const onTrack=(sil)=>{
        const{name,value}=sil.target
        setOne((remain)=>{
            return{
                ...remain,
                [name]:value
            }
        })
    }
    const change=()=>{
        executeUpdating(one)
        alert(one.Winner + "has updated")

    }
    return(
        <>
        <h1>Update Component</h1>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12">
                    <input type="text" name="SNO" onChange={onTrack} readOnly="true" value={one.SNO} className="form-control" placeholder="S.NO"/>
                    <input type="text" name="Area" onChange={onTrack} value={one.Area} className="form-control" placeholder="Area"/>
                     <input type="text" name="Winner" onChange={onTrack} value={one.Winner} className="form-control" placeholder="Winner"/>
                     <input type="text" name="party" onChange={onTrack} value={one.party} className="form-control" placeholder="Party"/>
                     <div className="row justify-content-around mt-3">
                     <button className="btn btn-outline-primary col-1" onClick={change}>
                        <i class="bi bi-save2-fill"></i>
                        </button>
                     </div>
                </div>

            </div>

        </div>
        </>
    )
}