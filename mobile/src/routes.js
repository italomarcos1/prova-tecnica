import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import After from './pages/After';

const routes = createAppContainer(createSwitchNavigator({ Main, After }));

export default routes;
