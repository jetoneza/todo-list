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

import { connect } from 'react-redux'
import {
  createTask,
  setActiveTask,
  completeTask,
  editTask,
} from '../../actions';

class TodoList extends React.Component {
  handleAddTaskClick = () => {
    this.props.createTask();
  }

  handleTaskClick = (taskId) => {
    this.props.setActiveTask(taskId);
  }

  handleCompleteTaskClick = (taskId) => {
    this.props.completeTask(taskId);
  }

  handleOnTextTaskChange = (taskId, value) => {
    this.props.editTask(taskId, value);
  }

  renderList = () => {
    const { list, activeTask } = this.props;

    const keys = Object.keys(list);

    return (
      <List>
        { keys.map(key => {
          const item = list[key];
          return (
            <Task
              onTextChange={this.handleOnTextTaskChange}
              onCompleteClick={this.handleCompleteTaskClick}
              onClick={this.handleTaskClick}
              key={key}
              item={item}
              activeTask={activeTask}/>
          );
        }) }
      </List>
    );
  }

  getListLength = (list) => {
    const keys = Object.keys(list);

    return keys.length;
  }

  render() {
    const { classes, list } = this.props;

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
                My Simple List ({ this.getListLength(list) })
              </Typography>
            </div>
            <Divider />

            <div className={classes.buttonWrapper}>
              <Button className={classes.addTaskButton} onClick={this.handleAddTaskClick}>
                <AddIcon className={classes.addIcon} color="primary"/>
                Add a task
              </Button>
            </div>

            { this.renderList() }

          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
  createTask: PropTypes.func.isRequired,
  setActiveTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

const mapActionCreators = {
  createTask,
  setActiveTask,
  completeTask,
  editTask,
};

const mapStateToProps = (state) => ({
  list: state.list,
  activeTask: state.activeTask,
})

export default withStyles(styles)(connect(mapStateToProps, mapActionCreators)(TodoList));
