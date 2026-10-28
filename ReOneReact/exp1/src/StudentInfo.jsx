function StudentInfo(props){

     //   let mainArray=[]

     // mainArray.push(props)
return(<>


     <div className="card">
    
        <li>{props.name}</li>
        <li>{props.Rollno}</li>
        <li>{props.Age}</li>
  
       {/* {mainArray.map((element,index)=>{<ol key={index}>{element.name}</ol>})} */}
     </div>
</>)

}

export {StudentInfo}