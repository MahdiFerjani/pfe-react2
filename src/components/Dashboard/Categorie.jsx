import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import AddCircle from "@material-ui/icons/AddCircle";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Button from '@material-ui/core/Button'
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Save, Delete } from "@material-ui/icons";
import { Grid, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";

const styles = theme => ({
  root: {
      width: "100%",
     
  },
  nested: {
      paddingLeft: theme.spacing.unit * 4
  },
  Icon: {
    marginLeft: "auto",
    width: "10%"
  },
  Paper: {
    margin: "auto",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    width: 500
  }

});


class Categorie extends React.Component {
  deleteRow(id,e){  
    axios.delete(`http://127.0.0.1:3333/cat/${id}`)  
      .then(res => {  
        const data = this.state.data.filter(item => item.id !== id);  
        this.setState({ data });  
      })  
  }
    state = {data:[]};
    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };
      
  
    componentDidMount(){
      axios.get('http://127.0.0.1:3333/cat').then(res=>{this.setState({data:res.data})})
      
      }
     
      render() {
          const items = this.state.data;
          const { classes } = this.props;
          return (
            <>
            
              <div>
    
                  {items.map(item => {
      return (
        <div key={item.id}>
          
          <List  className={classes.root}>
                  
               {item.subcategories.length != 0 ? (
                 <div key={item.id}>
                     <ListItem>
                    <ListItemText
            primary={item.nom}
         />
        
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
          <Delete button onClick={(e) => this.deleteRow(item.id, e)} />
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
                  >
                      <ListItemText
                          key={
                              sitem.id
                          }
                          primary={
                              sitem.nom
                          }
                      />
                         </ListItem>
                     );
                 }
             )}
         </List>
     </Collapse>{" "}
                     </div>
                 ) : (
                     <ListItem
                     >
                         <ListItemText
                             primary={item.nom}
                         />
                     </ListItem>
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
Categorie.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Categorie);



class EditTodo extends React.Component {
  inputRef = React.createRef();
  render() {
    return (
      
        <Paper elevation={2} style={styles.Paper}>
          <form
            onSubmit={() => {
              this.props.saveTodo(
                this.props.index,
                this.inputRef.current.value
              );
            }}
            style={{ display: "flex" }}
          >
            <Input
              style={{ width: "90%" }}
              defaultValue={this.props.todo}
              inputRef={this.inputRef}
            />
            <IconButton
              type="submit"
              color="primary"
              aria-label="Add"
              style={styles.Icon}
            >
              <Save fontSize="small" />
            </IconButton>
          </form>
        </Paper>
      
    );
  }
}

