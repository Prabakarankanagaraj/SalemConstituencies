import { useState } from "react"
import { executeCreating } from "./Constituencies"

export const Create=()=>{
    const[mydata,setMydata]=useState({
        "SNO" :0,
        "Area" :"",
        "Winner":"",
        "party":""

     } )
     const onTrack=(sil)=>{
        const{name,value}=sil.target
        setMydata((remain)=>{
            return{
                ...remain,
                [name]:value
            }
        })

     }
     const verify=()=>{
        alert(JSON.stringify(mydata))
        executeCreating(mydata)        
     }
    return(
        <>
        <h1>Create component</h1>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <input type="text" onChange={onTrack} value={mydata.SNO} name="SNO" className="form-control" placeholder="S.No"/>
                    <input type="text" onChange={onTrack} value={mydata.Area} name="Area" className="form-control" placeholder="Area"/>
                    <input type="text" onChange={onTrack} value={mydata.Winner} name="Winner" className="form-control" placeholder="Winner"/>
                    <input type="text" onChange={onTrack} value={mydata.party} name="party" className="form-control" placeholder="party"/>
                    <div className="row justify-content-around mt-3">
                        <button className="btn btn-outline-info col-1" onClick={verify}>
                    <i class="bi bi-save2-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
