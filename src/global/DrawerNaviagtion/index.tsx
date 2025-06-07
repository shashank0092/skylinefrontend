import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardBottomTab from '../BottomNavigation';
import CustomDrawer from './DrawerContent';

export type DrawerTabs = {
  options: undefined;
};
const DrawerNaviagtion = () => {
  const Drawer = createDrawerNavigator<DrawerTabs>();
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={() => <CustomDrawer />}>
      <Drawer.Screen name="options" component={DashboardBottomTab} />
    </Drawer.Navigator>
  );
};

export default DrawerNaviagtion;
