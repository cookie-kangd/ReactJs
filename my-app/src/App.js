import React from "react";
import "./App.css";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dispaly: 'block',
      heroes: [
        {name: "张三",age: "22",saved: 0},
        {name: "李四",age: "24",saved: 1},
        {name: "王五",age: "26",saved: 0},
        {name: "赵六",age: "30",saved: 1},
        {name: "钱七",age: "18",saved: 0}
      ]
    };

    // 这个绑定是必要的，使`this`在回调中起作用
    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    this.setState({dispaly: "none"});
    var htmlstr = "<table border='1px' style='margin: 15% auto;text-align: center;'><tr><td>名字</td><td>年龄</td><td>是否保存资料</td></tr>";
    this.state.heroes.forEach(element => {
      htmlstr += "<tr><td>"+element.name+"</td><td>"+element.age+"</td><td>"+element.saved+"</td></tr>";
    });
    htmlstr += "</table>";
    document.write(htmlstr);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.renderTable} style={{display: this.state.display}}>点击渲染表格</button>
        </header>
      </div>
    )
  }
}

export default App;