let Constituencies=[
    {   
        "SNO":1,
        "Area":"81-Gangavalli(sc)",
        "Winner":"A.Marimuthu",
        "party":"AIADMK"
    },
    {   
        "SNO":2,
        "Area":"82-Attur",
        "Winner":"R.M.Chinnathambi",
        "party":"AIADMK"
    },
    {   
        "SNO":3,
        "Area":"83 Yercaud(ST)",
        "Winner":"G.Chitra",
        "party":"AIADMK"
    },
    {   
        "SNO":4,
        "Area":"84-Omalur",
        "Winner":"S.Vetrivel",
        "party":"AIADMK"
    },
    {   
        "SNO":5,
        "Area":"85-Mettur",
        "Winner":"S.Semmalai",
        "party":"AIADMK"
    },
    {   
        "SNO":6,
        "Area":"86-Edapadi",
        "Winner":"K.Palaniswami",
        "party":"AIADMK"
    },
    {   
        "SNO":7,
        "Area":"87-Sankari",
        "Winner":"S.Raja",
        "party":"AIADMK"
    },
    {   
        "SNO":8,
        "Area":"88-Salem(West)",
        "Winner":"G.Venkatachalam",
        "party":"AIADMK"
    },
    {   
        "SNO":9,
        "Area":"89-Salem(North)",
        "Winner":"R.Rajendiran",
        "party":"DMK"
    }
      
]
  const affect=()=>{
    localStorage.setItem("Memory",JSON.stringify(Constituencies))
}
const loading=()=>{
    const tmp=localStorage.getItem("Memory")
    Constituencies=JSON.parse(tmp)
}
 export const executeCreating=(obj)=>{
     loading()
     Constituencies.push(obj)
     affect()
 }
 export const executeDeleting=(key)=>{
  loading()
  Constituencies=Constituencies.filter((ele,ind)=>{
    return ele.SNO!==key
  })  
  affect()
  alert(key+" has been terminated")
 }
 export const executeUpdating=(obj)=>{
    loading()
    for(var ind=0;ind<Constituencies.length;ind++)
    {
        if(Constituencies[ind].SNO==obj.SNO)
        {
            Constituencies[ind]=obj
            affect()
            return ;
        }
    }
    alert("Invalid ID")

 }
 export const executeReading=(key)=>{
    loading()
    for(var ind=0;ind<Constituencies.length;ind++){
        if(Constituencies[ind].SNO===key)
            return Constituencies[ind]
    }
    return{}
 }
export const executeListing=()=>{
    // loading()
    return Constituencies
}
