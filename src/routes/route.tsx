
import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import SettingAdd from "../pages/setting/components/SettingAdd";
import SettingEdit from "../pages/setting/components/SettingEdit";
import SettingList from "../pages/setting/components/SettingList";
import Spaces from "../pages/spaces/Spaces";
import ListEdit from "../pages/setting/components/ListEdit";
import Layouts from "../Layouts/main/Layouts";
import Main from "../pages/main/Main";
import Setting from "../pages/setting/Setting";

// const MainPage = React.lazy(() => import("../page/MainPage/MainPage"));


export default function Router() {
    return useRoutes([
      {
        path: "/",
        element: <Main/>,
        children: [
          {
            path: "/",
            element:
              <Layouts pageshow={<Dashboard />} />
            ,
          },
          {
            path: "/login",
            element: <Login/>
            ,
          },       
          {
            path: "/settingAdd",
            element:  <Layouts pageshow={<SettingAdd />} />
            ,
          },       
          {
            path: "/settingEdit",
            element:  <Layouts pageshow={<SettingEdit/>} />
            ,
          },       
          {
            path: "/settingList",
            element:  <Layouts pageshow={<SettingList />} />
            ,
          },       
          {
            path: "/spaces",
            element:  <Layouts pageshow={<Spaces />} />
            ,
          },       
          {
            path: "/listEdit",
            element:  <Layouts pageshow={<ListEdit />} />
            ,
          },       
          {
            path: "/setting",
            element:  <Layouts pageshow={<Setting />} />
            ,
          },       
       
        ],
      },
    ]);
  }
  