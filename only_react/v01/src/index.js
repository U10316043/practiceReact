import React,{Component} from 'react'
import ReactDOM from 'react-dom'


class Examples extends Component {
  func01() {
    console.log("hahahahah!")
    return "hello func1!";
  }
  render() {
    const func02 = function() {
      console.log("func2!")
      return "Hello func2!"
    }
    return (
      <div>
        <div>simple react</div>
        <div style={{color:"red"}}>Hello world</div>
        <div>{1+1}</div>
        <div>{this.func01()}</div>
        <div>{func02()}</div>
      </div>
    )
  }
}



ReactDOM.render(
  <Examples/>,
  document.getElementById('root')
)
