import axios from "axios"
import { useState } from "react"

function Upload()
{
    const[pid,setid]=useState()
    const[pname,setname]=useState()
    const[pprice,setprice]=useState()
    const[pcat,setcat]=useState()
    const[pdesc,setdesc]=useState()
    const[pimage,setimage]=useState()
    function submitForm(e)
    {
        e.preventDefault()
        //console.log(pid,pname,pprice,pdesc,pcat)
        const url="http://localhost:4000/"
        const Formdata=new FormData()
        Formdata.append ("pid",parseInt(pid))
        Formdata.append ("pname",pname)
        Formdata.append ("pprice",parseInt(pprice))
        Formdata.append ("pdesc",pdesc)
        Formdata.append ("pcat",pcat)
        Formdata.append ("pimage",pimage)
        axios.post(url,Formdata).then((result)=>{
            console.log(result.data)
            alert("Data Save ")
        })

        
    

    }
    return(
        <div>   
            <br></br>
            <center>
            <form >
            <input type="number" placeholder="Product ID" onChange={(e)=>setid(e.target.value)}/><br></br>
            <input type="text" placeholder="Product Name"onChange={(e)=>setname(e.target.value)}/><br></br>
            <input type="number" placeholder="Product Price" onChange={(e)=>setprice(e.target.value)}/><br></br>
            <input type="text" placeholder="Product Description" onChange={(e)=>setdesc(e.target.value)}/><br></br>
            select Category:<select onChange={(e)=>setcat(e.target.value)}>
                <option>Mobile</option>
                <option>Leptop</option>
                <option>Cloths</option>
                <option>Shoes</option>
                <option>Electronics</option>
            </select>
            <input type="file" onChange={(e)=>setimage(e.target.files[0])}/><br></br><br></br>
            <button onClick={submitForm}>Submit</button>
          </form>
            </center>
        </div>
    )
}
export default Upload