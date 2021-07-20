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
      // chartData:{}
      chartData:{
              labels: ['Funeral', 'Healthcare', 'Housing', 'Groceries', 'FakeName'],
              datasets:[
                {
                  data:[
                      1,1,1,1,1
                  ],
                  backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(39, 13, 88, 0.6)',
                  ]
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
    //update the index x based on name 
    //index by [0 to 4] 0 === 'fakeName' for quick test
    if(input.name === 'FakeName'){
      console.log(dataSets[0].data[4], " is index 4 data");
      this.setState({
        dataSets: dataSets[0].data[4] = (parseInt(input.value))
          // this.state.chartData.datasets.data.push(input.value);
        })
    }else if(input.name === 'RealName'){
      this.setState({
        dataSets: dataSets[0].data[5] = (parseInt(input.value))
          // this.state.chartData.datasets.data.push(input.value);
        })
    }
    // this.setState({
    //     dataSets: dataSets[0].data.push(parseInt(input.value))
    //     // this.state.chartData.datasets.data.push(input.value);
    // })
    // console.log(this.state.chartData)
    // dataSets[input.name] = input.value;
                  // this.state.chartData.datasets.data[4]



  }
  render() {
    return (
      <div className="dContainer">

      <div className="layout3 box1">

          <div className="box">
              <div className="slider">
                  <div className="sliderHeading">
                    <span>$0</span>
                    <span className="headingText">Funeral: 
                      {/* <span className="headingNumber"> ${this.state.slider.funeral}.00</span> */}
                    </span>
                    <span>$100k</span>
                  </div>
                  
                  <input 
                      name='funeral'
                      type="range" 
                      min="0" 
                      max="100000"
                      onChange={this.handleChange}
                  />
              </div>
          </div>

          <div className="box">
              <div className="slider">
                  <div className="sliderHeading">
                    <span>$0</span>
                    <span className="headingText">Healthcare: 
                      {/* <span className="headingNumber"> ${this.state.slider.healthCare}.00</span> */}
                    </span>
                    <span>$100k</span>
                  </div>
                  
                  <input 
                      name='healthCare'
                      type="range" 
                      min="0" 
                      max="100000"
                      onChange={this.handleChange}
                  />
              </div>
          </div>

          <div className="box">
              <div className="slider">
                  <div className="sliderHeading">
                    <span>$0</span>
                    <span className="headingText">Housing: 
                      {/* <span className="headingNumber"> ${this.state.slider.housing}.00</span> */}
                    </span>
                    <span>$100k</span>
                  </div>
                  
                  <input 
                      name='housing'
                      type="range" 
                      min="0" 
                      max="100000"
                      onChange={this.handleChange}
                  />
              </div>
          </div>

          <div className="box">
              <div className="slider">
                  <div className="sliderHeading">
                    <span>$0</span>
                    <span className="headingText">Groceries: 
                      {/* <span className="headingNumber"> ${this.state.slider.groceries}.00</span> */}
                    </span>
                    <span>$100k</span>
                  </div>
                  
                  <input 
                      name='groceries'
                      type="range" 
                      min="0" 
                      max="100000"
                      onChange={this.handleChange}
                  />
              </div>
          </div>

          <Slider 
            headingText={"FakeName"}
            onChange={this.onChange}
            index4={this.state.chartData.datasets[0].data[4]}
          />

          <Slider 
            headingText={"FakeName"}
            onChange={this.onChange}
            index4={this.state.chartData.datasets[0].data[4]}
          />

          <Slider 
            headingText={"FakeName"}
            onChange={this.onChange}
            index4={this.state.chartData.datasets[0].data[4]}
          />

          <Slider 
            headingText={"RealName"}
            onChange={this.onChange}
            index4={this.state.chartData.datasets[0].data[4]}
          />
          

      </div>
      
      <div className="layout3">
        <Chart 
          chartData={this.state.chartData} 
          location="Massachusetts" 
          legendPosition="bottom"
        />
      </div> 

      <div className="layout3">

      </div>

        

                
      </div>
    );
  }
}

export default App;