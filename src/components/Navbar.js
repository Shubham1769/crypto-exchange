import React, { Component } from 'react'
import Identicon from 'identicon.js';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-blue fixed-top bg-blue flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://www.youtube.com/channel/UCw8l5E8oKrAWlun-M_OSfFA"
          target="_blank"
          rel="noopener noreferrer"
        >
          DEXO-SWAP
        </a>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <big className="text-secondary">
              <strong>
              <small id="account">{this.props.account}</small>
              </strong>
            </big>

            { this.props.account
              ? <img
                className="ml-2"
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                alt=""
              />
              : <span></span>
            }

          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
