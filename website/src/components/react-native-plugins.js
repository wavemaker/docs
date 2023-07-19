const React = require('react');
import { useColorMode } from '@docusaurus/theme-common';
const WidgetTabItems = () => {
  const widgetsData = [
    {
      "tab": "Security Plugins",
      "value": "securityPlugins",
      "content": [
        {
          "lightIcon": "/learn/img/cards.svg",
          "darkIcon": "/learn/img/cardsDark.svg",
          "label": "LocalAuthentication",
          "body": "Integrating Biometric Authentication such as facial recognition and fingerprint scanning for imporved security and user convenience. ",
          "overview": "/learn/react-native/integrating-biometric-authentication",
          "Plugin": "https://docs.expo.dev/versions/latest/sdk/local-authentication/"
        },
        {
          "lightIcon": "/learn/img/cards.svg",
          "darkIcon": "/learn/img/cardsDark.svg",
          "label": "ScreenCapture",
          "body": "Integrating Biometric Authentication such as facial recognition and fingerprint scanning for imporved security and user convenience. ",
          "overview": "/learn/react-native/integrating-biometric-authentication",
          "Plugin": "https://docs.expo.dev/versions/latest/sdk/local-authentication/"
        },
        {
          "lightIcon": "/learn/img/cards.svg",
          "darkIcon": "/learn/img/cardsDark.svg",
          "label": "Device",
          "body": "Integrating Biometric Authentication such as facial recognition and fingerprint scanning for imporved security and user convenience. ",
          "overview": "/learn/react-native/detect-rooted-device",
          "Plugin": "https://docs.expo.dev/versions/latest/sdk/local-authentication/"
        },
        {
          "lightIcon": "/learn/img/cards.svg",
          "darkIcon": "/learn/img/cardsDark.svg",
          "label": "SecureStore",
          "body": "Integrating Biometric Authentication such as facial recognition and fingerprint scanning for imporved security and user convenience. ",
          "overview": "/learn/react-native/integrating-secure-store",
          "Plugin": "https://docs.expo.dev/versions/latest/sdk/securestore/"
        }
      ]
    }
  ]
  let data = []
  for (let props in widgetsData) {
    data.push(<>
      <h2 className="widget-header" key={props}>{widgetsData[props].tab}</h2>
      <Widgets content={widgetsData[props].content} />
    </>);
  }
  return (<>
    {data}
  </>);
}

const Widgets = (props) => {
  const { colorMode } = useColorMode();
  let data = []
  for (let ind in props.content) {
    data.push(
      <div className="col padding-horiz-sm" key={ind}>
        <div className="card-content">
          <div className="card-header">
            <img src={colorMode != "dark" ? props.content[ind].lightIcon : props.content[ind].darkIcon} /><label>{props.content[ind].label}</label>
          </div>
          <div className="card-body">{props.content[ind].body}</div>
          <div className="card-footer card_links">
            <a href={props.content[ind].overview}>Overview,</a>&nbsp;&nbsp;<a
              href={props.content[ind].api}>Plugin</a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="row card-group widget-cards">
      {data}
    </div>
  );
}

const WidgetTabs = (props) => {
  return (
    <>
      <WidgetTabItems />
    </>
  );
}
export default WidgetTabs;