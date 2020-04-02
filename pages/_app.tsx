import React from "react";
import App from "next/app";
class CoreApp extends App {
    public componentDidMount() {
        const { router: { query } } = this.props;
    }
    public render() {
  
        return (
          <div>
              hello
          </div>
        );
    }
}

export default CoreApp;
