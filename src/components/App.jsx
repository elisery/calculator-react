import React, { Component } from "react";
import Display from "./Display";
import ButtonPad from "./ButtonPad";
import Footer from "./Footer";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    const { loading } = this.state;

    // if (loading) {
    //   return(
    //     <div>
    //       <h3>Loading...</h3>
    //     </div>
    //   )
    // }
    return(
      <main className="main-layout main-shadow main-border">
        <Display />
        <ButtonPad />
        <Footer />
      </main>
    )
  }
}

export default App;

