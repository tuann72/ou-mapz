// modalStyles.js
export const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent black overlay
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff', // Background color for the modal content
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    width: '600px',
  },
};


export const inputFieldStyles = {
  marginBottom: '10px',
  padding: '5px',
  width: '100%',
};

export const selectFieldStyles = {
  marginBottom: '10px',
  padding: '5px',
  width: '100%',
};

export const closeButtonStyles = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: '#ccc',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};


export const formGroupStyles = {
  marginBottom: '15px',
};
