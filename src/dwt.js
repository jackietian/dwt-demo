import React from "react";
import Dynamsoft from "dwt";

export default class DWT extends React.Component {
  state = { webTwain: null };
  DWObject = null;
  containerId = "dwtcontrolContainer";
  componentDidMount() {
    Dynamsoft.DWT.RegisterEvent("OnWebTwainReady", () => {
      this.Dynamsoft_OnReady();
    });
    Dynamsoft.DWT.ProductKey = "";
    Dynamsoft.DWT.ResourcesPath = "/dwt-resources";
    Dynamsoft.DWT.Containers = [
      {
        WebTwainId: "dwtObject",
        ContainerId: this.containerId,
        Width: "800px",
        Height: "400px",
      },
    ];
    Dynamsoft.DWT.CustomizableDisplayInfo.loaderBarSource = "./logo.svg";
    Dynamsoft.DWT.Load();
  }
  Dynamsoft_OnReady() {
    this.DWObject = Dynamsoft.DWT.GetWebTwain(this.containerId);
    const webTwain = Dynamsoft.DWT.GetWebTwain(this.containerId);
    console.log(webTwain);

    const sourceList = webTwain?.Addon.Webcam.GetSourceList();
    console.log(sourceList);
    const scannerName = sourceList.find((source) =>
      source.toLowerCase().includes("solo")
    );

    webTwain?.Addon.Webcam.SelectSource(scannerName);
    webTwain?.Addon.Webcam.PlayVideo(webTwain, 100);
    this.setState({
      webTwain,
    });
  }
  acquireImage() {
    const onSuccess = () => {
      setTimeout(async () => {
        this.state.webTwain?.Addon.Webcam.StopVideo();
      }, 50);
    };

    const onFail = () => {
      setTimeout(() => {
        this.state.webTwain?.Addon.Webcam.StopVideo();
        return;
      }, 50);
    };
    this.state.webTwain?.Addon.Webcam.CaptureImage(onSuccess, onFail);
  }
  render() {
    return (
      <>
        <button onClick={() => this.acquireImage()}> Scan </button>
        <div id={this.containerId}> </div>
      </>
    );
  }
}
