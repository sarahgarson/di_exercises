import React, { Component } from 'react';

//changed the function to class and added shouldComponentUpdate

//exercise 3
//2. Add a Class component named Child to the same file. This new component will render a ‘Hello World!’ message in a header tag.
export class Child extends Component {
  //3. This new component uses the componentWillUnmount method to alert an unmounted message.
  componentWillUnmount() {
    alert('The component name Header is about to be unmounted');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}


class ColorClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      //exercise 3
      //1. Add a new property named show to the state object. Set the value of this property to true.
      show: true,
    };
  }

  //returning false the red color doesnt change! 
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

   // 2. When the component has been mounted, a timer changes the state, and the color becomes “yellow”. You will see :
   componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 3000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  //Part II
   //1. When the component is mounting, it will be rendered with the favorite color “red”:
   componentDidUpdate(prevProps, prevState) {
    //3. In the componentDidUpdate method, add a console.log("after update"). Open the Dev Tools, to see when this message is displayed.
    console.log('after update');
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      console.log('Color has been updated to:', this.state.favoriteColor);
    }
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  render() {
    return (
      <div>
        
        <h2>My favorite color is {this.state.favoriteColor}</h2>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

export default ColorClass;
