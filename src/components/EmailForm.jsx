import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function EmailForm({ setUserEmail }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const isSubmitting = navigate.state === 'submitting';

  const inputNoErrorClasses =
    'mt-4 h-20 cursor-pointer rounded-xl border px-10 ring ring-transparent ring-offset-[-2px] hover:ring-dark-slate-grey focus:outline-none focus:ring-dark-slate-grey';

  const inputErrorClasses =
    'mt-4 h-20 cursor-pointer rounded-xl border bg-red-100 px-10 ring ring-transparent ring-offset-[-2px] hover:ring-dark-slate-grey focus:outline-none focus:ring-red-500 text-red-500';

  function onSubmit(data) {
    toast.success('Monthly subscription successful!');
    setUserEmail(data.email);
    navigate('/success');
  }

  function onError(data) {
    toast.error(data.email.message);
  }

  return (
    <div className="mt-16">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-col"
      >
        <div className="flex justify-between">
          <label className="text-[1.4rem] font-bold" htmlFor="email">
            Email address
          </label>
          {errors.email?.message && (
            <small className="  text-center  font-bold text-red-500">
              {errors.email.message}
            </small>
          )}
        </div>
        <input
          className={
            errors.email?.message ? inputErrorClasses : inputNoErrorClasses
          }
          type="text"
          id="email"
          placeholder="email@company.com"
          {...register('email', {
            required: 'Email is required',
            validate: {
              // Email validation from https://catalins.tech/react-forms-with-react-hook-form/
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                'Valid email required',
            },
          })}
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
