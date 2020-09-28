import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">

          <Cell col={6}>
            <h2>Contact Info</h2>
            <hr />

            <div className="contact-list">
              <List>
                

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    briansoldani@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (408) 202-0401
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    linkedin.com/in/brian-soldani
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fab fa-github-square" aria-hidden="true" />
                    https://briansoldani.github.io/
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;