import * as React from 'react';
import { Route } from 'react-router';
import { withStyles, StyleRules, StyleRulesCallback, WithStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import HomeIcon from 'material-ui-icons/Home';
import SearchIcon from 'material-ui-icons/Search';
import NotificationsIcon from 'material-ui-icons/Notifications';
import MessageIcon from 'material-ui-icons/Message';

import HomeHeader from '../Home/Header';

const styles: StyleRules | StyleRulesCallback = {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999
  }
};

interface StateType {
  value: number;
}

interface PropsType {
  loadUserInfo: () => void;
  loadEmotions: () => void;
}

class TopBar extends React.Component<PropsType & WithStyles, StateType> {
  state = {
    value: 0,
  };

  componentDidMount() {
    this.props.loadUserInfo();
    this.props.loadEmotions();
  }
  
  handleChange = (event: React.ChangeEvent<{}>, value: number) => {
    this.setState({ value });
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Route path="/home" component={HomeHeader} />
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth={true}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<HomeIcon />} />
          <Tab icon={<SearchIcon />} />
          <Tab icon={<NotificationsIcon />} />
          <Tab icon={<MessageIcon />} />
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(styles)(TopBar);
