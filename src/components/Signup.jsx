
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import {useState} from 'react'

 export function Signup(props) {

    const url="http://127.0.0.1:3333/signup"
    const [Data,setData]= useState({
        username:"",
        email :"",
        password:"",
        matchpassword:""
    
    })
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            username: Data.username,
            email: Data.email,
            password: Data.password,
            matchpassword:Data.matchpassword
    
        })
        .then(res=>{
            console.log(Data)}
           
        )
      
    }
    
    
    function handle(e){
        const newData ={...Data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
    
    }
   

    
    return (
      <>
      <Modal
        {...props}
     
      >
        <Modal.Header closeButton>
          <Modal.Title>
           Créer compte
          </Modal.Title>
        </Modal.Header>
        <form  onSubmit={(e)=>submit(e)}>
        <Modal.Body>
        <div class="form-group">
    <label for="exampleInputEmail1">nom d'utilisateur</label>
    <input type="text" class="form-control"  onChange={e=>handle(e)} id="username" value={Data.username}  placeholder="entrer nom d'utilisateur"/>
  </div>
        <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="email" onChange={e=>handle(e)} value={Data.email} placeholder="Entrer email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Mot de passe</label>
    <input type="password" class="form-control" id="password" onChange={e=>handle(e)} value={Data.password} placeholder="entrer mot de passe"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"> comfirmer Mot de passe</label>
    <input type="password" class="form-control" id="matchpassword" onChange={e=>handle(e)} value={Data.matchpassword} placeholder="entrer mot de passe"/>
  </div>
  
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">J'ai lu et j'accepte les conditions générales d'utilisation</label>
  </div>


<br/>
        </Modal.Body>
        <Modal.Footer>
        <Button  type="submit"  bg ="primary"variant="primary" onClick={props.onHide}>
                    se connecter
                 </Button>
        </Modal.Footer>
        </form>
      </Modal>
     
      </>
    );
  }

export default Signup;