
import axios from 'axios';
import React, {Component} from 'react' ;
import { Bar} from 'react-chartjs-2';
import hello from "../../images/hello.svg";
import "../../Styles/Main.css"

class Chart extends React.Component{
getEncaissement=(year)=>{
  let encaisse=`http://127.0.0.1:3333/encaisse/?year=${year}`
  let decaisse=`http://127.0.0.1:3333/decaisse/?year=${year}`
  let decaissement=[]
  axios.get(decaisse).then(res=>{
  
    for(let i of res.data)
    decaissement.push(i.montant)})
  axios.get(encaisse).then(res => {
    let encaissement=[]
    for (let dataObj of res.data) 
      encaissement.push(dataObj.montant);

      this.setState({chartData:{     
        labels:["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin"
      ,"Juillet","Aout","septembre","octobre","novombre", "decembre"], 
     datasets:[
          {
label: 'Décaissement',
type:'bar',
data:decaissement,
  backgroundColor:'#FF0000',
  borderWidth: 8,
      
    } ,
    { label: 'Encaissement',
    data:encaissement,

      backgroundColor:'#159605',
      borderWidth: 8,
                      
        },
        {
         label: 'Trésorerie',
         type:'line',
       
         data:encaissement,
           backgroundColor:'Transparent',
           borderColor: '#4DA5E8'

             }
    
    
  ]}})
      
    })
}

    constructor(props){
    super(props)
    
    this.state={
         chartData:{} ,
         isLoading: false,  
         error: null, 
      } 
    
    }
   

componentDidMount(){
 let date=new Date().getFullYear()
   this.getEncaissement(date)
 
}
handleYear=(e)=> {
    const year= e.target.value
  this.getEncaissement(year)
}

render(){
  const classes = this.props
 
  
return(
<>
<main>
      <div className="main__container">
      

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello Code Hut</h1>
            <p>bienvenue à votre tableau de board</p>
          </div>
        </div>

     
        <div className="main__cardds">
          <div className="cardd">
            <i
              className="fa fa-money aria-hidden=true fa-2x text-lightblue"
              aria-hidden="true"></i>
            <div className="cardd_inner">
              <p className="text-primary-p">Trésorerie</p>
              <span className="font-bold text-title">57K</span>
            </div>
          </div>

       

          <div className="cardd">
            <i
              className="fa fa-line-chart fa-2x text-red"
              aria-hidden="true"
            ></i>
            <div className="cardd_inner">
              <p className="text-primary-p">Décaissement</p>
              <span className="font-bold text-title">200K</span>
            </div>
          </div>

          <div className="cardd">
            <i
              className="fa fa-line-chart fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="cardd_inner">
              <p className="text-primary-p">Encaissement</p>
              <span className="font-bold text-title">645M</span>
            </div>
          </div>
          <div className="cardd">
            <i
              className="fas fa-lightbulb fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="cardd_inner">
              <p className="text-primary-p">Estimation </p>
              <span className="font-bold text-title">645K</span>
            </div>
          </div>
          
          
        </div>
      
      </div>
    </main>
<div  className="inline"style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
  <form>
<label for="years"> veuillez choisir l'année:</label>
<select id="years" name="years" onChange={this.handleYear} >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021" selected>2021</option>
      </select>
      </form>
      </div>
 
    <div className="chart">
   
     <Bar 
      data={this.state.chartData}
      options={{
        responsive: true,
        title: { text: "THICCNESS SCALE", display: true },
        scales: {
          yAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        }
      }}
        
/>
    </div>
    </>
    )
          }

}

export default Chart ;
/*
import React, { useState, useEffect } from "react";
import { Line,Bar} from "react-chartjs-2";
import axios from "axios";

const Chart = () => {
  const [chartData, setChartData] = useState({}); 
  const [year,setYear]=useState(2020);
  const chart = () => {
    let encaissement = [];
    let decaissement = [];
    axios
      .get(`http://127.0.0.1:3333/encaisse?year=${year}`)
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          encaissement.push(dataObj.montant);
        }
        setChartData({
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"
          ,"July","Aug","sept","oct","nov", "december"],
          datasets: [
            {
              label: "Encaissement",
              data: encaissement,
              backgroundColor: "green",
              borderWidth: 4,
              stack:'stack 0',
            },
            {
              label: 'Decaissement',
              data: decaissement,
              backgroundColor: "red",
              stack:'stack 1',
            },
            
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    
  };

  useEffect(() => {
   
    chart();
    
  }, []);
  const changeyear=()=>{
setYear(2019)
  }
  return (
    <div className="App">
      <h1>Trésorerie</h1>
      <button onclick={changeyear}>changeyear</button>
        
     
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
*/