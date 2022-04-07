import React, { Component } from 'react';
import { View,TextInput,Button } from 'react-native-web';

export default class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={Num1:0,Num2:0};
  }
  Sum=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var R=N1+N2;
    alert(R);
  }

  Sub=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var R=N1-N2;
    alert(R);
  }
  Mul=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var R=N1*N2;
    alert(R);
  }
  Div=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var R=N1/N2;
    alert(R);
  }
 render()
 {
   return(
     <View>
       <TextInput style={{borderWidth:1,margin:10}} placeholder="Num1" onChangeText={Num1=>this.setState({Num1})}/>
       <TextInput style={{borderWidth:1,margin:10}} placeholder="Num2" onChangeText={Num2=>this.setState({Num2})}/>
       <Button title="Addition" onPress={this.Sum}/>
       <Button title="Subtraction" onPress={this.Sub}/>
       <Button title="Multiplication" onPress={this.Mul}/>
       <Button title="Division" onPress={this.Div}/>

     </View>
   );
 } 
}
