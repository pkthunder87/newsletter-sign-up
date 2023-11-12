import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Valid email regex from https://www.abstractapi.com/guides/email-validation-regex-javascript

const isValidEmail = (email) =>
  /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm.test(email);

function EmailForm() {
  const [userEmail, setUserEmail] = useState('');

  const navigate = useNavigate();
  const isSubmitting = navigate.state === 'submitting';

  const errors = {};

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValidEmail(userEmail)) return;

    // If no errors signup user and redirect
    setUserEmail('');

    navigate('/success');
  }

  return (
    <div className="mt-16">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-[1.6rem] font-bold" htmlFor="email">
          Email address
        </label>
        <input
          className="mt-4 h-20 cursor-pointer rounded-xl border px-10 ring ring-transparent ring-offset-[-2px] hover:ring-dark-slate-grey focus:outline-none focus:ring-dark-slate-grey"
          type="text"
          id="email"
          placeholder="email@company.com"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <button
          className=" mt-8 h-20 rounded-xl bg-dark-slate-grey text-frontend-white hover:bg-gradient-to-r hover:from-pink   hover:to-orange"
          disabled={isSubmitting}
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default EmailForm;
