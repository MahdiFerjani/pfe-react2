import React, { useState } from "react";
import ReactDOM from "react-dom";


function  Register() {
  const [currentPage, setPage] = useState(1);
  const nextPage = () => setPage((prev) => ++prev);
  const prevPage = () => setPage((prev) => --prev);

  const [Data,setData]= useState({
    username:"",
    email :"",
    password:"",
    matchpassword:"",
    currency:"",
    activity:""

})
function handle(e){
    const newData ={...Data}
    newData[e.target.id]=e.target.value
    setData(newData)
    console.log(newData)
}


  return (
    <div>
      {currentPage === 1 && (
          <>
           <div className="my-5">
           <h1 className="text-center"> S'inscrire </h1>
         </div>
         <div className="container contact_div">
           <div className="row">
             <div className="col-md-6 col-10 mx-auto">
               <form onSubmit={nextPage}>
                 <div className="mb-3">
                   <label  className="form-label">
                     Email
                   </label>
                   <input
                     type="text"
                     className="form-control"
                     id="email" onChange={e=>handle(e)} value={Data.email}
                    
                     placeholder="Entrer address email"
                   />
                 </div>
                 <div className="mb-3">
                   <label  className="form-label">
                     Mot de passe
                   </label>
                   <input
                     type="password"
                     className="form-control"
                     id="password" onChange={e=>handle(e)} value={Data.password}
                     placeholder="entrer mot de passe"
                   />
                 </div>
                 <div className="mb-3">
                   <label  className="form-label">
                     comfirmer mot de passe
                   </label>
                   <input
                     type="text"
                     className="form-control"
                     id="matchpassword" onChange={e=>handle(e)} value={Data.matchpassword}
                    
                     placeholder="comfirmer le mot de passe"
                   />
                 </div>
                 <div class="col-12">
                   <button className="btn btn-outline-primary" type="submit">
                     Next
                   </button>
                
                 </div>
               </form>
              
             </div>
        
           </div>
         </div>
         </>
        
      )}
      {currentPage === 2 && (
     <>
     <div className="my-5">
           <h1 className="text-center"> information sur l'entreprise </h1>
         </div>
         <div className="container contact_div">
           <div className="row">
             <div className="col-md-6 col-10 mx-auto">
               <form onSubmit={prevPage}>
               <div class="input-group mb-3">
                 <div class="input-group-prepend">
                   <label class="form-label" />
                 </div>
                 <select class="custom-select" id="inputGroupSelect01">
                   <option selected>Secteur D'activite</option>
                   <option value="1">industie</option>
                   <option value="2">Sass</option>
                    <option value="3">Restauration</option>
                  </select>
                        </div>
                
                 <div className="mb-3">
                   <label  className="form-label">
                     currency
                   </label>
                   <input
                     type="text"
                     className="form-control"
                     id="currency" onChange={e=>handle(e)} value={Data.currency}
                     placeholder="currency"
                   />
                 </div>
                 <div class="col-12">
                   <button className="btn btn-outline-primary" type="submit">
                     comfirmer
                   </button>
               
                 </div>
               </form>
              
             </div>
        
           </div>
         </div>
     </>
      )}
      
    </div>
  );
}
export default Register