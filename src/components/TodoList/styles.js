const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(360 + theme.spacing.unit * 2 * 2)]: {
      width: 360,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.up(360 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
    },
  },
  header: {
    padding: theme.spacing.unit,
    [theme.breakpoints.up(360 + theme.spacing.unit * 3 * 2)]: {
      padding: theme.spacing.unit * 2,
    },
  },
  subtitle: {
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: '#80868b',
  },
  buttonWrapper: {
    padding: `10px 13px`,
  },
  addTaskButton: {
    width: '100%',
    textTransform: 'none',
    justifyContent: 'normal',
    borderRadius: 20,
    padding: 0,
    marginRight: 10,
    fontSize: '1em',
  },
  addIcon: {
    marginLeft: 10,
    marginRight: 20,
  },
});

export default styles;
