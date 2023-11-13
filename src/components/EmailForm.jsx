import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function EmailForm() {
  const [userEmail, setUserEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const isSubmitting = navigate.state === 'submitting';

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // if (!isValidEmail(userEmail)) return;

  //   // If no errors signup user and redirect
  //   setUserEmail('');

  //   navigate('/success');
  // }

  function onSubmit(data) {
    setUserEmail(data.email);
    navigate('/success');
  }

  return (
    <div className="mt-16">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label className="text-[1.6rem] font-bold" htmlFor="email">
          Email address
        </label>
        <input
          className="mt-4 h-20 cursor-pointer rounded-xl border px-10 ring ring-transparent ring-offset-[-2px] hover:ring-dark-slate-grey focus:outline-none focus:ring-dark-slate-grey"
          type="text"
          id="email"
          placeholder="email@company.com"
          {...register('email', {
            required: 'Email is required',
            validate: {
              // Email validation from https://catalins.tech/react-forms-with-react-hook-form/
              maxLength: (v) =>
                v.length <= 50 || 'The email should have at most 50 characters',
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                'Email address must be a valid address',
            },
          })}
        />
        {errors.email?.message && (
          <small className=" -mb-2 mt-2 text-center text-red-600">
            {errors.email.message}
          </small>
        )}

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
