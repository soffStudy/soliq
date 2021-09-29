// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';
// import ModalCard from './modalCard';


// const drinks=[
//     {name:"kampot",nomer:554},
//     {name:"choy",nomer:554},
//     {name:"kampot",nomer:554}

// ]

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 10;
//   const left = 31;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//   };
// }

// const styles = theme => ({
//   paper: {
//     position: 'absolute',
//     backgroundColor: theme.palette.background,
//     padding: theme.spacing.unit * 4,
//     outline: 'none',
//   },
// });

// class SimpleModal extends React.Component {
//   state = {
//     open: false,
//   };

//   handleOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <div>
//         <Button onClick={this.handleOpen} className='text-light'>Ordering</Button>
//         <Modal
//           aria-labelledby="simple-modal-title"
//           aria-describedby="simple-modal-description"
//           open={this.state.open}
//           onClose={this.handleClose}
//         >
//           <div style={getModalStyle()} className={classes.paper}>
//             <Typography variant="h6" id="modal-title">
//             </Typography>
//             <Typography variant="subtitle1" id="simple-modal-description">

//             <ModalCard/>

//             </Typography>
//             <SimpleModalWrapped />
//           </div>
//         </Modal>
//       </div>
//     );
//   }
// }

// SimpleModal.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// // We need an intermediary variable for handling the recursive nesting.
// const SimpleModalWrapped = withStyles(styles)(SimpleModal);

// export default SimpleModalWrapped;