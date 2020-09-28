import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projecttours extends Component {
  constructor(props) {
    super();
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://briansoldani.github.io/images/portitem11.jpg) center / cover' }} ></CardTitle>
            <CardText>
              Team Project #1: About Your Birthday!
            </CardText>
            <CardActions border>
              <Button colored><a href="https://briansoldani.github.io/About-Your-Birthday/">View App</a></Button>
              <Button colored></Button>
              <Button colored><a href="https://github.com/BrianSoldani/About-Your-Birthday">Github</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Image 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://briansoldani.github.io/images/project2.jpg) center / cover' }} ></CardTitle>
            <CardText>
              Team Project #2: Party Planning Committee
            </CardText>
            <CardActions border>
              <Button colored><a href="https://partyplanningcommittee.herokuapp.com/">View APP</a></Button>
              <Button colored></Button>
              <Button colored><a href="https://github.com/KeithBillings/Party-Planner">Github</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.northernsun.com/images/image16x16/576x576/3702.png) center / cover' }} ></CardTitle>
            <CardText>
              Project #3 Coming soon!
            </CardText>
            <CardActions border>
              <Button colored>View App</Button>
              <Button colored></Button>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://briansoldani.github.io/images/portitem11.jpg) center / cover' }} ></CardTitle>
            <CardText>
              Team Project #1: About Your Birthday!
            </CardText>
            <CardActions border>
              <Button colored><a href="https://briansoldani.github.io/About-Your-Birthday/">View App</a></Button>
              <Button colored></Button>
              <Button colored><a href="https://github.com/BrianSoldani/About-Your-Birthday">Github</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Weather Dashboard */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://github.com/BrianSoldani/06-homework-assignment-06/blob/master/images/weather-dashboard.jpg?raw=true) center / cover' }} ></CardTitle>
            <CardText>
              Weather Dashboard with OpenWeather API
            </CardText>
            <CardActions border>
              <Button colored><a href="https://briansoldani.github.io/06-homework-assignment-06/">View APP</a></Button>
              <Button colored></Button>
              <Button colored><a href="https://github.com/BrianSoldani/06-homework-assignment-06">Github</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Readme Generator */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://github.com/BrianSoldani/09-homework-assignment-09/raw/master/Develop/assets/images/readme1.jpg)' }} ></CardTitle>
            <CardText>
              Automated Readme Generator
            </CardText>
            <CardActions border>
              <Button colored><a href="https://drive.google.com/file/d/1svAbgYE_ACZcYuiM4I0NgMGu_Es-hfcd/view">View App</a></Button>
              <Button colored></Button>
              <Button colored><a href="https://github.com/BrianSoldani/09-homework-assignment-09">Github</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Readme Generator */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://github.com/BrianSoldani/11-homework-assignment-11/raw/master/Develop/images/notetaker.jpg) center / cover' }} ></CardTitle>
            <CardText>
              Notetaker App Deployed on Heroku
            </CardText>
            <CardActions border>
              <Button colored><a href="https://notetakerforuofo.herokuapp.com/">View App</a></Button>
              <Button colored></Button>
              <Button colored><a href="https://github.com/BrianSoldani/11-homework-assignment-11">Github</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Employee Tracker */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://github.com/BrianSoldani/12-homework-assignment-12/raw/master/Assets/images/bymanager.jpg) center / cover' }} ></CardTitle>
            <CardText>
              MySQL Employee Tracker
            </CardText>
            <CardActions border>
              <Button colored><a href="https://drive.google.com/file/d/1vqO2DSx1UffrOxrxDZ1mt5VYVwpqCHuU/view">View APP</a></Button>
              <Button colored></Button>
              <Button colored><a href="https://github.com/BrianSoldani/12-homework-assignment-12">Github</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Password Generator */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://github.com/BrianSoldani/03-homework-assignment-03/raw/master/images/password_generator.jpg) center / cover' }} ></CardTitle>
            <CardText>
              Secure Random Password Generator
            </CardText>
            <CardActions border>
              <Button colored><a href="https://briansoldani.github.io/03-homework-assignment-03/">View App</a></Button>
              <Button colored></Button>
              <Button colored><a href="https://github.com/BrianSoldani/03-homework-assignment-03">Github</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Professional Site */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://briansoldani.github.io/images/profile.jpg) center / cover' }} ></CardTitle>
            <CardText>
              My Professional Portfolio Site
            </CardText>
            <CardActions border>
              <Button colored><a href="https://briansoldani.github.io/">View APP</a></Button>
              <Button colored></Button>
              <Button colored><a href="https://github.com/BrianSoldani/briansoldani.github.io">Github</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Work Day Scheduler */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://briansoldani.github.io/images/portitem33.jpg) center / cover' }} ></CardTitle>
            <CardText>
              Day Planner / Work Day Scheduler
            </CardText>
            <CardActions border>
              <Button colored><a href="https://briansoldani.github.io/05-homework-assignment-05/">View App</a></Button>
              <Button colored></Button>
              <Button colored><a href="https://github.com/BrianSoldani/05-homework-assignment-05">Github</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Team Projects</Tab>
          <Tab>Server Side API's</Tab>
          <Tab>Node | ES6 | SQL</Tab>
          <Tab>JS | HTML5 | CSS3</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projecttours;