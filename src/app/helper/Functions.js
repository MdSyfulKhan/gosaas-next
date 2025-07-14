import { toast } from 'react-toastify';

const handleFormSubmit = (e, { email, resetFn, successMessage = 'Thanks for subscribing!', errorMessage = 'Please enter a valid email address' }) => {
  e.preventDefault();

  const trimmedEmail = email.trim();

  if (!trimmedEmail) {
    toast.error('Email cannot be empty!');
    return;
  }

  const isValid = trimmedEmail.includes('@') && trimmedEmail.length > 5;

  if (isValid) {
    toast.success(successMessage);
    resetFn?.(); // Clear input
  } else {
    toast.error(errorMessage);
  }
};

export { handleFormSubmit };

