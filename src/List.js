import { useEffect, useState } from "react"
import { executeListing,executeDeleting } from "./Constituencies"
 import { affect } from "./Constituencies"
import { Create } from "./Create"
import { Read } from "./Read"
import { Update } from "./Update"

export const List=()=>{
    const[temArr,setTemArr]=useState([])
    const[cview,setCview]=useState(false)
    const[rview,setRview]=useState()
    const[uview,setUview]=useState(false)
    const[specific,setSpecific]=useState(0)
    useEffect(()=>{
        //   affect()
         setTemArr(executeListing())
    },[])
    return(
        <>
        {(cview)?
        <>
        <Create/>
        <button className="btn btn-outline-info" onClick={()=>{
            setCview(false)
            window.location.assign("/")
        }}>
            <i class="bi bi-back"></i>
        </button>
        </>:
        (rview)? 
        <>
        <Read which={specific}/>
        <button className="btn btn-putline-info" onClick={()=>{
            setRview(false)
            window.location.assign('/')
        }}>
            <i class="bi bi-skip-backward-circle-fill"></i>
        </button>
        </>
        :    
        (uview)?
        <>
        <Update particular={specific}/>
        <button className="btn btn-outline-secondary" onClick={()=>{
            setUview(false)
            window.location.assign('/')
        }}>
            <i class="bi bi-arrow-left-short"></i>
        </button>
        </>
        :
        <>
            <button className="btn btn-outline-info" onClick={()=>{
                setCview(true)
            }}>
                <i class="bi bi-book"></i>
            </button>
                <table className="table table-bordered table-hover text-center col-lg-2 col-md-10 col=sm-12 shadow">
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Area</th>
                            <th>Winner</th>
                            <th>Party</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    
                    {
                        temArr.map((ele,ind)=>(
                            <tr>
                                <td>{ele.SNO}</td>
                                <td>{ele.Area}</td>
                                <td>{ele.Winner}</td>
                                <td>{ele.party}</td>
                                <td>
                                    <button className="btn btn-outline-warning col-2 me-2" onClick={()=>{
                                        setRview(true)
                                        setSpecific(ele.SNO)
                                    }}>
                                             <i class="bi bi-book-half"></i>
                                    </button>
                                    <button className="btn btn-outline-success col-2 me-2" onClick={()=>{
                                        setUview(true)
                                        setSpecific(ele.SNO)
                                    }}>
                                        <i class="bi bi-upload"></i>
                                    </button>
                                    <button className="btn btn-outline-danger col-2 me-2" onClick={()=>{
                                        executeDeleting(ele.SNO)
                                        window.location.assign('/')
                                    }}>
                                        <i class="bi bi-person-x-fill"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>

                </table>
            </>
            }
        </>
    )
}