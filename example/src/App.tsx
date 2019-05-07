import * as React from "react";
import ScaleController from "netless-scale-controller";
import "./App.less";

export type AppStates = {
  scale: number;
};

export default class App extends React.Component<{}, AppStates> {
    public constructor(props: {}) {
        super(props);
        this.state = {
          scale: 1,
        };
    }


    private zoomChange = (scale: number): void => {
      this.setState({scale: scale});
    }

    private getSlider(): React.ReactNode {
        return <ScaleController style={{color: "black"}} zoomChange={this.zoomChange} zoomScale={this.state.scale}/>;
    }

    public render(): React.ReactNode {
        return (
            <div className="container">
                <h1>React Scale Controller</h1>
                {this.getSlider()}
                <div className="test-box" style={{transform: `scale(${this.state.scale})`}}/>
            </div>
        );
    }
}
