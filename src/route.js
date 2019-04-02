import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';
import CoursePage from './components/course/CoursesPage';
import AboutMe from './components/about/AboutMe';
import ManageCoursePage from './components/course/ManageCoursePage';
import ManageAuthorsPage from './components/authors/manageAurhorsPage';
import EditAuthorsPage from './components/authors/editAuthorsPage';
import LoginPage from './components/user/loginsPage';
import PlanetPage from './components/planets/planetsPage';
import PlanetPageDetails from './components/planets/PlanetPageDetails';
import LoggedIn from './components/common/LoggedIn';



// function requireAuth(nextState, replace){
// console.log("nss", nextState);
//  if (!loggedIn()) {
//     replace({
//       pathname: '/login'
//     });
//   }
// }


export default (
        <Route path="/" component={App}>
                <IndexRoute component={HomePage} />
                <Route path="about" component={AboutPage} />
                <Route path="course" component={CoursePage} />
                <Route path="managecourse" component={ManageCoursePage} />
                <Route path="managecourse/:id" component={ManageCoursePage} />
                <Route path="knowme" component={AboutMe} />
                <Route path="authors" component={ManageAuthorsPage} />
                <Route path="editAuthor/:id" component={EditAuthorsPage} />
                <Route path="addAuthor" component={EditAuthorsPage} />
                <Route path="login" component={LoginPage} />

                <Route component={LoggedIn}>
                        <Route path="planets" component={PlanetPage} />
                        <Route path="planets/:id" component={PlanetPageDetails} />
                </Route>
        </Route>

);