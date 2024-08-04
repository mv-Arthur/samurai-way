import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { SideBar } from "./components/sidebar/SideBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dialogs } from "./pages/dialogs/Dialogs";
import { Profile } from "./pages/profile/Profile";
import { News } from "./pages/news/News";
import { Footer } from "./components/footer/Footer";
import { footerFilling } from "./data/footer";

function App() {
     return (
          <BrowserRouter>
               <div className="App">
                    <Header />
                    <SideBar />
                    <div className="content">
                         <Switch>
                              <Route path={"/dialogs"} component={Dialogs} />
                              <Route path={"/profile"} component={Profile} />
                              <Route path={"/news"} component={News} />
                         </Switch>
                         <Footer filling={footerFilling} />
                    </div>
               </div>
          </BrowserRouter>
     );
}

export default App;
