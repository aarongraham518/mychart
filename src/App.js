import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import Slider from './components/Slider';

class App extends Component {
  constructor(){
    console.log('constructor render');
    super();
    this.state = {
      chartData:{
              // labels: ['Funeral', 'Healthcare', 'Housing', 'Groceries', 'FakeName'],
              datasets:[
                {
                  data:[10,10,10,10],
                  backgroundColor:[
                    '#a994d8',
                    '#ffd58e',
                    '#ff969f',
                    '#96dea3'
                  ],
                  cutout: "80%"
                }
              ]
            }
    }
  }

  componentWillMount(){
    // console.log('component will mount render');
  }

  handleChange = ({currentTarget: input}) => {
    const slider = {...this.state.slider}

    slider[input.name] = input.value;
    // console.log(slider[input.name], " this is a test")
    setTimeout(() => {
      this.setState({slider})
    }, 2000);

    this.getChartData();
};

  onChange = ({currentTarget: input}) => {
    const dataSets = {...this.state.chartData.datasets};
    // console.log(dataSets[0], " is what we are working with");
    console.log(input.value, " value from child");
    console.log(input.name, " name from child");
    
    if(input.name === 'Funeral'){      
      this.setState({
        dataSets: dataSets[0].data[0] = (parseInt(input.value))         
      })
    }else if(input.name === 'Healthcare'){
      this.setState({
        dataSets: dataSets[0].data[1] = (parseInt(input.value))
          // this.state.chartData.datasets.data.push(input.value);
        })
    }else if(input.name === 'Housing'){
      this.setState({
        dataSets: dataSets[0].data[2] = (parseInt(input.value))
          // this.state.chartData.datasets.data.push(input.value);
        })
    }else if(input.name === 'Groceries'){
      this.setState({
        dataSets: dataSets[0].data[3] = (parseInt(input.value))
          // this.state.chartData.datasets.data.push(input.value);
        })
    }
  }
  render() {
    return (
      <>
      <h1>Calculating the coverage you may need</h1>

      <p>
        We all have different needs. The right amount of coverage for you depends on how much
        you'd like to leave behind. Take a look at some <a href="#">average annual costs</a> and use the sliders
        below to think about how much you might need.
      </p>
      <div className="dContainer">

      <div className="layout3 box1">
          <Slider 
            sliderTextColor={"purple"}
            headingText={"Funeral"}
            onChange={this.onChange}
            sliderAmount={this.state.chartData.datasets[0].data[0]}
          />

          <Slider 
            sliderTextColor={"yellow"}
            headingText={"Healthcare"}
            onChange={this.onChange}
            sliderAmount={this.state.chartData.datasets[0].data[1]}
          />

          <Slider 
            sliderTextColor={"pink"}
            headingText={"Housing"}
            onChange={this.onChange}
            sliderAmount={this.state.chartData.datasets[0].data[2]}
          />

          <Slider
            sliderTextColor={"green"} 
            headingText={"Groceries"}
            onChange={this.onChange}
            sliderAmount={this.state.chartData.datasets[0].data[3]}
          />
          

      </div>
      
      <div className="layout3">
        <Chart 
          chartData={this.state.chartData} 
          location="Massachusetts" 
          legendPosition="bottom"
          arrayData={this.state.chartData.datasets[0].data}
        />
      </div> 

      <div className="layout3">
      <Slider 
            sliderTextColor={"oceanblue"}
            headingText={"Marley's Care"}
            onChange={this.onChange}
            
          />

          <Slider
            sliderTextColor={"oceanblue"} 
            headingText={"Jon's sky dive"}
            onChange={this.onChange}
            
          />
      </div>

        

                
      </div>
      </>
    );
  }
}

export default App;