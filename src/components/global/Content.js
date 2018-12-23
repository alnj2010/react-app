import React, {Component} from 'react'
import './css/Content.css'

class Content extends Component{
  constructor(){
    super();
    this.state={
      count:0,
      num1:0,
      num2:0
    }
    this.handleCountClick=this.handleCountClick.bind(this);
    this.handleSumChange=this.handleSumChange.bind(this);
  }

  componentDidMount(){
    this.setState({
      count: 1
    })
  }

  handleCountClick(e){
    if(e.target.id === 'add'){
      this.setState({
        count:this.state.count + 1
      })

    }else if(e.target.id === 'subt'){
      this.setState({
        count:this.state.count - 1
      })

    }else{
      this.setState({
        count:0
      })
    }
  }

  handleSumChange(e){
    if(e.target.id === 'sum1'){
      this.setState({
        num1:Number(e.target.value)
      })

    }else if(e.target.id === 'sum2'){
      this.setState({
        num2:Number(e.target.value)
      })

    }
  }

  render(){
    return (
      <div className="content">
        <div className="App-intro">
          <h2>Counter {this.state.count}</h2>
          <input type="button" id="add" value="+" onClick={this.handleCountClick}/>
          <input type="button" id="subt" value="-" onClick={this.handleCountClick}/>
          <input type="button" id="reset" value="reset" onClick={this.handleCountClick}/>

          <h2>Calculator</h2>
          <input type="number" id="sum1" onChange={this.handleSumChange} />
          <input type="number" id="sum2" onChange={this.handleSumChange} />
          <h2>Resultado {this.state.num1 + this.state.num2}</h2>

        </div>
      </div>
    );
  }
}

export default Content;