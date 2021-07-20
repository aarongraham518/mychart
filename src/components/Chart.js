import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class Chart extends Component{
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    // console.log(this.props.arrayData);

    let myArray = this.props.arrayData;
    let tempArray = 0;

    for(let i = 0; i< myArray.length; i++){
      tempArray += myArray[i];
      console.log(tempArray);
    }
    return (
      <div className="chart">
          <Doughnut 
          data={this.props.chartData}
          key={Math.random()}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />   

        <div className="coverageCap">
          <span className="coverageHeader">Coverage</span>
          <span>${tempArray}</span>
        </div>
             
      </div>
    )
  }
}

export default Chart;


