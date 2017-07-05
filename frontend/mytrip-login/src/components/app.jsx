import React from "react";
import { BrowserRouter, Link, Match, Miss, Redirect } from "react-router";
import HomePage from "./homePage";
import LoginPageWithRPC from "../containers/loginPageWithRPC";
import CreateBookingPageContainer
  from "../containers/createBookingPageContainer";
import MyTripPage from "./myTripPage";
import NoPageFoundPage from "./noPageFoundPage";
import { isAuthenticated } from "../utils/authUtil";
import { Left, Right } from "../../utils/generalUtils";

const pageDecider = isAuthorized =>
  (isAuthorized ? Right(isAuthorized) : Left(isAuthorized));

export default props => (
  <BrowserRouter>
    <div>
      <nav className="mytrip-navbar">
        <ul className="mytrip-navbar__items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create booking</Link></li>
          {!props.isAuthenticated && <li><Link to="/login">Login</Link></li>}
          {props.isAuthenticated && <li><Link to="/mytrip">MyTrip</Link></li>}
          {props.isAuthenticated &&
            <li>
              <Link to="/logout" onClick={props.onLogout}>
                Logout
              </Link>
            </li>}
        </ul>
      </nav>
      <section className="mytrip-content">
        <Match exactly pattern="/" component={HomePage} />
        <Match pattern="/create" component={CreateBookingPageContainer} />
        <Match
          pattern="/login"
          render={props =>
            pageDecider(isAuthenticated()).fold(
              () => <LoginPageWithRPC />,
              () => (
                <Redirect
                  to={{
                    pathname: "/mytrip",
                    state: { from: props.location }
                  }}
                />
              )
            )}
        />
        <Match
          pattern="/logout"
          render={props => (
            <Redirect
              {...props}
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )}
        />
        <Match
          pattern="/mytrip"
          render={props =>
            pageDecider(isAuthenticated()).fold(
              () => (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location }
                  }}
                />
              ),
              () => <MyTripPage />
            )}
        />

        <Miss component={NoPageFoundPage} />
      </section>
    </div>
  </BrowserRouter>
);
