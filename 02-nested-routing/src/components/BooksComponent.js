import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

const Books = ({match}) => {
    console.log(match)
    return (
      <div>
        <div className="jumbotron">
            <h1 className="display-3">My Books</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
                <ul>
                  <li><Link to={`${match.url}/html`}>HTML</Link></li>
                  <li><Link to={`${match.url}/css`}>CSS</Link></li>
                  <li><Link to={`${match.url}/react`}>React</Link></li>
                </ul>
            </div>
            <div className="col-md-9">
              <Route path={`${match.url}/html`} render={() => { return <h1>HTML by Ducket book</h1> }}/>
              <Route path={`${match.url}/css`} render={() => { return <h1>CSS by Racheal Andrews</h1> }}/>
              <Route path={`${match.url}/react`} render={() => { return <h1>React by Fullstack.io book</h1> }}/>
            </div>
          </div>
          </div>
      </div>
    );
}

export default Books;