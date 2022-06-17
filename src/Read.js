import { useEffect, useState } from "react"
import { executeReading } from "./Constituencies"

export const Read=(get)=>{
    const[single,setSingle]=useState({})
    useEffect(()=>{
            const t=executeReading(get.which)
            setSingle(t)
    },[])

    return(
        <div className="container">
            <div className="mt-3 row justify-content-center">
                <div className="card text-center col-lg-6 col-md-10 col-sm-12 shadow bg-secondary">
                    <h1 className="card-title display-3">{single.Winner}</h1>
                    <div className="card-body">
                        <p className="card-text float-start">{single.party}</p>
                        <p className="card-text float-end">{single.Area}</p>
                    
                         <h6>Thanks for Watching</h6>

                    </div>

                </div>

            </div>

        </div>
    )
}