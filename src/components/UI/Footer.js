import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          Copyright &copy; {new Date().getFullYear()} Julian Kobryński, Norbert
          Litkowski
        </div>
      </footer>
    );
  }
}

export default Footer;
