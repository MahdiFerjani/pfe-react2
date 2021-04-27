import React, {Component} from 'react' ;
import { Bar} from 'react-chartjs-2';

class Chart extends Component{


    constructor(props){
      
 

        super(props);
        this.state = {
           chartData:{
              labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun"
             ,"July","Aug","sept","oct","nov", "december"], 
            datasets:[
                 {
       label: 'Décaissement',
       type:'bar',
       data:[
         217594,
         181045,
         153060,
         106519,
         105162,
         95072],

         backgroundColor:'#FF0000'
             
           } ,
           { label: 'Encaissement',
           data:[
             500000,
             300000,
             123060,
             196519,
             19162,
             145072],
    
             backgroundColor:'#159605',
                             
               },
               {
                label: 'Trésorerie',
                type:'line',
              
                data:[382406,
                  501361,
                  471361,
                  561361,
                  49060
                ],
                  backgroundColor:'Transparent',
                  borderColor: '#4DA5E8'

                    }
           
           
         ]
       }  
      
     } 
   }
      render(){
return(
    <div className="chart">
     Tresorie :500000$
     <Bar 
      data={this.state.chartData}
      // eslint-disable-next-line
      options={{ maintainAspectRatio: false} ,{responsiveAnimationDuration:true}    
      
}
      />
  
        
      
      
      
    </div>
    )
          }

}

export default Chart ;