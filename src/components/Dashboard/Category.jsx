import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import AddCircle from "@material-ui/icons/AddCircle";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button'
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        background: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    }
});


class Category extends React.Component {
    state = {data:[],
        cid:'',
        sid:'',
        name:'',
         update:'',
         type:1
};
/*handleClickMenu (event) {
    event.preventDefault();
    this.setState({anchorEl:event.currentTarget});
  };

  handleCloseMenu (e) {
      e.preventDefault();
    this.setState({anchorEl:false});
  };*/
  componentDidMount(){
    axios.get(`http://127.0.0.1:3333/cat?type=${this.state.type}`).then(res=>{
        console.log(res.data)
     this.setState({data: res.data.list,cid:parseInt(res.data.ids.cid),sid:parseInt(res.data.ids.sid)})
       })  
  }
    
      
    handleSubmit = event => {
        event.preventDefault();
        let types;
        if(this.state.type==1)
        types="decaissement"
        if(this.state.type==0)
        types="encaissement"
        
        const cat = {
            user_id:"1",
          nom: this.state.name,
          show:false,
          type:types  
        }
    
        let id=(parseInt(this.state.cid,10)+1)
        this.setState({cid:id});
       
        axios.post('http://127.0.0.1:3333/cat', cat )
          .then(res=>{
            let objcat={
                nom:this.state.name,
                id:(parseInt(this.state.cid,10)),
                show:false,
                subcategories:[]
            }
            this.setState({data:[...this.state.data,objcat]});
            this.setState({name:''})
            console.log(this.state.data)
          })
      }
      handleSubmitSubcat(event,id) {
        event.preventDefault();
        let subcat = {
            user_id:"1",
            cat_id:id,
          nom: this.state.name,
        }

        let myid=(parseInt(this.state.sid,10)+1)
        this.setState({sid:myid});
        axios.post('http://127.0.0.1:3333/subcat', subcat )
          .then(res=>{
              let objsub={
                  cat_id:id,
                  id:myid,
                  nom:this.state.name,
                  show:false
              }
              let tab=this.state.data
            for (let i of tab)
            {
                if(i.id===id)
                {
                    
                    i.subcategories.push(objsub)
                    i.add=false
                }
             continue;   
            }
            this.setState({data:tab})
            this.setState({name:''})
            console.log(this.state.data)
          })
      }
    handleChange (event){
        event.preventDefault();
        this.setState({ name: event.target.value});
      }
      handleChangetab = (event, newValue) =>{
        this.setState({type: newValue});
        axios.get(`http://127.0.0.1:3333/cat?type=${this.state.type}`).then(res=>{
            console.log(res.data)
         this.setState({data: res.data.list,cid:parseInt(res.data.ids.cid),sid:parseInt(res.data.ids.sid)})
           }) 

      };

      handleUpdate(id,e){
          e.preventDefault();
          const cat = {
          nom: this.state.name
        }
        axios.put(`http://127.0.0.1:3333/cat/${id}`,cat).then(res=>{
       let tab=this.state.data;     
        for (let i of tab)
            { if(i.id===id){
                i.nom=this.state.name
                i.show=false
                continue;
            }
            }
            this.setState({data:tab,name:''})
            console.log(this.state.data)
        })
      }
      handleUpdateSub(sid,id,e){
        e.preventDefault();
        const subcat = {
        nom: this.state.name
      }
      axios.put(`http://127.0.0.1:3333/subcat/${sid}`,subcat).then(res=>{
     let tab=this.state.data;     
      for (let i of tab)
           if(i.id===id){
              for(let j of i.subcategories)
              if (j.id===sid)
              {j.nom=this.state.name  
              j.show=false           
              continue;}
              continue;
          }
          
          this.setState({data:tab,name:''})
          console.log(this.state.data)
      })
    }
    
    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };
      
   
   

    
    deleteRow(id,e){  
        axios.delete(`http://127.0.0.1:3333/cat/${id}`)  
          .then(res => {  
            
        
            const data = this.state.data.filter(item => item.id !== id);  
            this.setState({ data });  
          })  
        
      }  
      deleteSub(e,sid,id){  
          e.preventDefault();
        axios.delete(`http://127.0.0.1:3333/subcat/${sid}`)  
          .then(res => {  
            let tab=this.state.data
            for ( let i of tab)
            {
                if(i.id===id)
                {
                    i.subcategories=i.subcategories.filter(item=> item.id !==sid);
                    continue;
                }
            }
            this.setState({ data:tab });  
            console.log(tab)


          })  
        
      }
    handleshowCat(e,id){
        e.preventDefault();
        const tab=this.state.data;     
        for (let i of tab)
            { if(i.id===id){
                i.show=true
                continue;
            }
            }
            
            this.setState({data:tab})
            console.log(this.state.data)
        
        
    }
    handleShowUpdateSub(e,id,sid){
        e.preventDefault();
        let tab=this.state.data
        for (let i of tab)
            if(i.id===id){
                for(let j of i.subcategories)
                if(j.id===sid){
                    j.show=true
                    continue;
                }
                continue;
            }
            this.setState({data:tab})
        console.log(this.state.data)


    }
    handleshowSubCat(e,id,item){
        e.preventDefault();
        const tab=this.state.data;     
        for (let i of tab)
            { if(i.id===id){
                i.add=true
                continue;
            }
            }
            
            this.setState({data:tab})
            console.log(this.state.data)
        
        
    }

      
  render() {
          const items = this.state.data;
          const { classes } = this.props;
          console.log(this.state.type)
          return (
            <>
            <Tabs
            value={this.state.type}
            onChange={this.handleChangetab}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Encaissement" ></Tab>
            <Tab label="Décaissement" />
        
          </Tabs>
              <div>
                  <div>
                      <form>
                          <input type="text" name = "name" onChange={(e)=>this.handleChange(e)}  placeholder="saisir catégorie"/>
                          <button type="submit" onClick = { this.handleSubmit }>valider</button>
                      </form>
                  </div>
                  {items.map(item => {
                      return (
                        <div key={item.id}>
                          <List>
                                  
                                          {item.subcategories.length != 0 ? (
                                              <div>
                                                  <ListItem key={item.id}
                                                  >
                                                      {item.show ===false ?(<ListItemText
                                                          primary={item.nom}
                                                      />):(<form key={item.id} onSubmit={(e)=>this.handleUpdate(item.id,e)}><input type="text" class="form-control form-control-sm" name="update" defaultValue={this.state.name} onChange={(e)=>this.handleChange(e)} />
                                                      <button type="cancel">cancel</button>
                                                      </form>)}
                                                     <div >
                                                         
                                                   <Button key={item.id} onClick={(e)=>this.handleshowSubCat(e,item.id)}><AddCircle/></Button>
                                                   <Button key={item.id} onClick={(e)=>this.handleshowCat(e,item.id)}><Edit/></Button>
                                                   <Button key={item.id} onClick={(e)=>this.deleteRow(item.id,e)}><Delete/></Button>
                                              
                                                   
                                                      {this.state[item.nom] ? (
                                                         
                                                          <ExpandLess  button
                                                          onClick={this.handleClick.bind(
                                                              this,
                                                              item.nom
                                                          )}
                                                          key={item.id}/>
                                                      ) : (
                                                          <ExpandMore  button
                                                          onClick={this.handleClick.bind(
                                                              this,
                                                              item.nom
                                                          )}
                                                          key={item.id}/>
                                                      )}
                                                      </div>
                                                  </ListItem>
                                                  
                                                  <Collapse
                                                      key={item.id}
                                                      component="li"
                                                      in={this.state[item.nom]}
                                                      timeout="auto"
                                                      unmountOnExit
                                                  >
                                                      <List disablePadding>
                                                          {item.subcategories.map(
                                                              sitem => {
                                                                  return (
                                                                      <ListItem
                                                                          button
                                                                          key={
                                                                              sitem.id
                                                                          }
                                                                          className={
                                                                              classes.nested
                                                                          }
                                                                      >{sitem.show===false?(<ListItemText
                                                                        key={
                                                                            sitem.id
                                                                        }
                                                                        primary={
                                                                            sitem.nom
                                                                        }
                                                                    />)
                                                                    :(<form key={sitem.id} onSubmit={(e)=>this.handleUpdateSub(sitem.id,item.id,e)}><input type="text" class="form-control form-control-sm" name="updatesub" defaultValue={sitem.nom}onChange={(e)=>this.handleChange(e)}/></form>)
                                                                    }
                                                                         
                                                                          
                                                                          <div >
                                                               <Button key={sitem.id} onClick={(e)=>this.handleShowUpdateSub(e,item.id,sitem.id)}><Edit/></Button>
                                                   <Button key={sitem.id} onClick={(e)=>this.deleteSub(e,sitem.id,item.id)}><Delete/></Button>
                                                   </div>
                                                                      </ListItem>
                                                                      
                                                                  );
                                                              }
                                                          )
                                                          
                                                          }
                                                          
                                                        {item.add===true ?
                                                        ( <ListItem>
                                                         <form key={item.id} onSubmit={(e)=>this.handleSubmitSubcat(e,item.id)}>
                                                             <input type="text" class="form-control form-control-sm" name="addsub" onChange={(e)=>this.handleChange(e)}placeholder="ajouter sous-catégorie"/></form></ListItem>)
                                                             :(<area/>)}
                                                             


                                                      </List>
                                                  </Collapse>{" "}
                                              </div>
                                          ) : (<List>
                                                  <ListItem key={item.id}
                                                  >
                                                      {item.show ===false ?(<ListItemText
                                                          primary={item.nom}
                                                      />):(<form key={item.id} onSubmit={(e)=>this.handleUpdate(item.id,e)}><input type="text" name="update" defaultValue={item.nom} onChange={(e)=>this.handleChange(e)}/></form>)}
                                                     <div >
                                                         
                                                     <Button key={item.id} onClick={(e)=>this.handleshowSubCat(e,item.id)}><AddCircle/></Button>
                                                   <Button key={item.id} onClick={(e)=>this.handleshowCat(e,item.id)}><Edit/></Button>
                                                   <Button key={item.id} onClick={(e)=>this.deleteRow(item.id,e)}><Delete/></Button>
                                                   
                                                                            </div>
                                                                            </ListItem>
                                                                            {item.add===true ?
                                                        ( <ListItem>
                                                         <form key={item.id} onSubmit={(e)=>this.handleSubmitSubcat(e,item.id)}>
                                                             <input type="text" class="form-control form-control-sm" name="addsub" onChange={(e)=>this.handleChange(e)}placeholder="ajouter sous-catégorie"/></form></ListItem>)
                                                             :(<area/>)}
                                                                            </List>   
                                                                            
                                          )}
                                      <Divider key={item.id} absolute />
                          </List>
                                      </div>
                                 
                              
                             
                      );
                  })}
              </div>
              </>
          );
      }
}
Category.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Category);

