import React, { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [keyPhrases, setKeyPhrases] = useState([]);
  const [tries, setTries] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleKeyPhraseChange = (e) => {
    setKeyPhrases(e.target.value.split(',').map(phrase => phrase.trim()));
  };

  const handleResetPassword = () => {
    // Check if account is locked
    if (isLocked) {
      alert('Your account is locked. Please contact Customer Care to unlock it.');
      return;
    }

    // Check if key phrases match
    if (keyPhrases.length === 12) {
      // Perform login logic here
      alert('Login successful!');
    } else {
      // Increment tries count
      setTries(tries + 1);

      // Lock the account after 5 tries
      if (tries === 4) {
        setIsLocked(true);
        alert('You have reached the maximum number of tries. Your account is now locked.');
        return;
      }

      alert('Key phrases do not match. Please try again.');
    }
  };

  return (
    <div>
      <h1>RESET PASSWORD MECHANISM</h1>
      <button onClick={handleResetPassword}>Forgot Password</button>
      <br />
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <br />
      <input type="text" placeholder="Enter 12 key phrases separated by commas" value={keyPhrases.join(', ')} onChange={handleKeyPhraseChange} />
    </div>
  );
};

export default ResetPassword;