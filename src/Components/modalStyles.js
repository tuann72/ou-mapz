// modalStyles.js
export const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)' // Semi-transparent black overlay
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#841617', // Background color for the modal content
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    width: '600px',
    height: '400px',
    color: 'white',
  },
};


export const inputFieldStyles = {
  marginTop: '5px',
  marginBottom: '5px',
  padding: '5px',
  width: '100%',
};

export const selectFieldStyles = {
  marginTop: '5px',
  marginBottom: '5px',
  padding: '5px',
  width: '100%',
};

export const closeButtonStyles = {
  position: 'absolute',
  backgroundColor: 'rgb(59 130 246)',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  color: 'white',
};


export const formGroupStyles = {
  marginBottom: '15px',
};
