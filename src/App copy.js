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
                  label:'Population',
                  data:[
                      32,
                      44,
                      223,
                      221,
                      233
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
  // state = {
  //   chartData:{},
  //   slider:{
  //     funeral: 1,
  //     healthCare: 1,
  //     housing: 1,
  //     groceries: 1,
  //     fakeName: 1
  //   }
  // }


  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    // this.getChartData();
    // console.log('component will mount render');

  }

  // getChartData(){
  //   this.setState({
  //     chartData:{
  //       labels: ['Funeral', 'Healthcare', 'Housing', 'Groceries'],
  //       datasets:[
  //         {
  //           label:'Population',
  //           data:[
  //             // this.state.slider.funeral,
  //             // this.state.slider.healthCare,
  //             // this.state.slider.housing,
  //             // this.state.slider.groceries,
  //             // this.state.chartData.datasets.data[4]
  //           ],
  //           backgroundColor:[
  //             'rgba(255, 99, 132, 0.6)',
  //             'rgba(54, 162, 235, 0.6)',
  //             'rgba(255, 206, 86, 0.6)',
  //             'rgba(75, 192, 192, 0.6)',
  //             'rgba(39, 13, 88, 0.6)',
  //           ]
  //         }
  //       ]
  //     }
  //   });
  // }

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
    console.log(dataSets, " is what we are working with");

    this.setState({
        // dataSets.data: dataSets.push(input.value)
        // this.state.chartData.datasets.data.push(input.value);
    })
    // console.log(this.state.chartData)
    // dataSets[input.name] = input.value;
                  // this.state.chartData.datasets.data[4]

    console.log(input.value, " value from child");
    console.log(input.name, " name from child");

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
          />

          <Slider 
            headingText={"RealName"}
            onChange={this.onChange}
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