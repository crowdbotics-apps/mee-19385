import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList87603Navigator from '../features/NotificationList87603/navigator';
import Settings87602Navigator from '../features/Settings87602/navigator';
import Settings87594Navigator from '../features/Settings87594/navigator';
import UserProfile87592Navigator from '../features/UserProfile87592/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList87603: { screen: NotificationList87603Navigator },
Settings87602: { screen: Settings87602Navigator },
Settings87594: { screen: Settings87594Navigator },
UserProfile87592: { screen: UserProfile87592Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
