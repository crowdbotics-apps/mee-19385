import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings87644Navigator from '../features/Settings87644/navigator';
import UserProfile87632Navigator from '../features/UserProfile87632/navigator';
import Tutorial87631Navigator from '../features/Tutorial87631/navigator';
import NotificationList87603Navigator from '../features/NotificationList87603/navigator';
import Settings87602Navigator from '../features/Settings87602/navigator';
import Settings87594Navigator from '../features/Settings87594/navigator';
import UserProfile87592Navigator from '../features/UserProfile87592/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings87644: { screen: Settings87644Navigator },
UserProfile87632: { screen: UserProfile87632Navigator },
Tutorial87631: { screen: Tutorial87631Navigator },
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
