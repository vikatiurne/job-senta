import { Routes, Route } from "react-router-dom";

import UserHome from "../Main/UserHome/UserHome.jsx";
import Builder from "../Main/Builder/Builder.jsx";
import BuilderLayout from "../../../hoc/layout/builderLayout/BuilderLayout.jsx";
import NewResume from "../Main/NewResume/NewResume.jsx";


const UserRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<UserHome />} />
      <Route path="builder" element={<BuilderLayout />}>
        <Route index element={<Builder />} />
        <Route path="create" element={<NewResume />} />
        <Route path="edit/:id" element={<NewResume />} />
        </Route>
      {/* <Route path="analyse" element={<Analyse/>}/>
              <Route path='contact' />
           <Route path='settings' /> */}
    </Routes>
  );
};


export default UserRoutes;
