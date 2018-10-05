import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  Paper,
  Typography,
  List,
  Button,
  CssBaseline,
  Divider,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import styles from './styles';

import Task from '../Task';

class TodoList extends React.Component {
  state = {
    list: [],
  };

  handleAddTaskClick = () => {
    const id = Date.now();

    const task = {
      id,
      task: `Task ${id}`,
      isCompleted: false,
    }

    this.setState({
      list: [
        ...this.state.list,
        task,
      ],
    });
  }

  render() {
    const { classes } = this.props;
    const { list } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <div className={classes.header}>
              <Typography className={classes.subtitle}>
                TASKS
              </Typography>
              <Typography variant="title" gutterBottom>
                My Simple List ({ list.length })
              </Typography>
            </div>
            <Divider />

            <div className={classes.buttonWrapper}>
              <Button className={classes.addTaskButton} onClick={this.handleAddTaskClick}>
                <AddIcon className={classes.addIcon} color="primary"/>
                Add a task
              </Button>
            </div>

            <List>
              { list.map(item => {
                return (
                  <Task key={item.id} item={item}/>
                );
              }) }
            </List>

          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoList);
