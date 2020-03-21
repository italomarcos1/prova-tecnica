import React from 'react';
import CodePush from 'react-native-code-push';
import './config/ReactotronConfig';
import Routes from './routes';

function App() {
  return <Routes />;
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);

/**
 * class App extends Component {
 *  constructor(props){
 *    super(props);
 *    OneSignal.init('d9443cbd-9e87-48e7-88be-3c183f4e1bdb);
 *
 *    OneSignal.addEventListener('received', this.onReceived);
 *    OneSignal.addEventListener('opened', this.onOpened);
 *    OneSignal.addEventListener('ids', this.onIds);
 *  }
 *
 *  componentWillUnmount(){
 *    OneSignal.removeEventListener('received', this.onReceived);
 *    OneSignal.removeEventListener('opened', this.onOpened);
 *    OneSignal.removeEventListener('ids', this.onIds);
 * }
 *
 *  onReceived = (data) => {
 *
 * };
 *  onOpened = (notification) => {
 * };
 *  onIds = (id) => {
 * };
 *  render (){
 *    // code
 *  }
 * }
 */
