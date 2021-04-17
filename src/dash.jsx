
import axios from 'axios'
import React from 'react'

export default class dash extends React.Component {
  
    componentDidMount(){
        const config= {
            headers:{
                Authorization: 'Bearer '+localStorage.getItem('token')
            }
        };

        axios.get('http://127.0.0.1:3333/getuser',config).then(
            res=>{
                console.log(res)
            },
            err=>{
                console.log(err);
            }
            
        )
    }
    render(){
    return (
        <div>
            <h1>welcome </h1>
        </div>
    )
    }
    
}
