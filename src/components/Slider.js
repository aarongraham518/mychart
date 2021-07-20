import React, {Component} from 'react'
import './Slider.css';

class Slider extends Component {
    state = {
        slider:{
            funeral: '',
            heathCare: '',
            housing: '',
            groceries: '',
        }
    }

    handleChange = ({currentTarget: input}) => {
        const slider = {...this.state.slider}

        slider[input.name] = input.value;
        console.log(slider[input.name], " this is a test")
        this.setState({slider});
    };
    render(){

    let {headingText} = this.props;

    return(        
        <div className="box">
              <div className="slider">
                  <div className={`sliderHeading ${this.props.sliderTextColor}`}>
                    <span>$0</span>
                    <span className="headingText">{headingText}: 
                      <span className="headingNumber"> ${this.props.sliderAmount}.00</span>
                    </span>
                    <span>$100k</span>
                  </div>
                  
                  <input 
                      name={this.props.headingText}
                      type="range" 
                      min="0" 
                      max="100000"
                      onChange={this.props.onChange}    
                  />
              </div>
          </div>
    )
}
}

export default Slider;