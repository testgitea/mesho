import { useEffect, useState } from "react"
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

function Leptop()
{
    const[apidata,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/").then((result)=>{
            result.json().then((data)=>{
                 console.log(data)
               setData(data)
            })
        })
    },[])
    return(
        <div>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
              {
                apidata.map((item)=>
                    item.pcat=="Cloths"?

                  <MDBCol>
                    <br></br>
                <MDBCard className='h-100'>
                  <MDBCardImage
                    src={item.pimage}
                    alt='...'
                    position='top'
                    style={{width:"100px",height:"100px"}}
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{item.pname}</MDBCardTitle>
                    <MDBCardTitle style={{color:"red"}}>{item.pprice}</MDBCardTitle>
                    <MDBCardTitle>{item.pcat}</MDBCardTitle>
                    <MDBCardTitle>{item.pdesc}</MDBCardTitle>
                    <MDBCardText></MDBCardText>
                    <MDBBtn>Show Details</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>:null
              )
              }
      
     </MDBRow>
        </div>
    )
}
export default Leptop