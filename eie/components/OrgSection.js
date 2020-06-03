import React from 'react';
import Org from './Org';
import orgs from '../data/orgs';

export default class OrgSection extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            orgs
        }
      }
      
    render() {
        return (
            <div>
                {this.state.orgs.map((orgs) => (
                    <Org orgs={orgs} />
                ))}
            </div>
        )
    }
  }