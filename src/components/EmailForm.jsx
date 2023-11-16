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
    'mt-4 md:pb-[.2rem] h-[5.5rem] md:h-[5.6rem]  md:mt-[.9rem] cursor-pointer rounded-xl border border-[#bbb] px-[2.32rem] ring ring-transparent ring-offset-[-2px] hover:ring-dark-slate-grey focus:outline-none focus:ring-dark-slate-grey';

  const inputErrorClasses =
    'mt-4 md:pb-[.2rem] h-[5.5rem] md:h-[5.6rem] md:mt-[.9rem] cursor-pointer rounded-xl border border-[#bbb] bg-red-100 px-[2.32rem] ring ring-transparent ring-offset-[-2px] hover:ring-dark-slate-grey focus:outline-none focus:ring-red-500 text-red-500';

  function onSubmit(data) {
    toast.success('Monthly subscription successful!');
    setUserEmail(data.email);
    navigate('/success');
  }

  function onError(data) {
    toast.error(data.email.message);
  }

  return (
    <div className="mt-[3.5rem] md:mt-16">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-col"
      >
        <div className="flex justify-between">
          <label
            className="text-[1.4rem] font-bold md:text-[1.2rem]"
            htmlFor="email"
          >
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
          className=" mt-8 h-[5.5rem] rounded-xl bg-dark-slate-grey font-bold text-frontend-white hover:bg-gradient-to-r hover:from-pink hover:to-orange   md:mt-[2.4rem] md:h-[5.6rem]"
          disabled={isSubmitting}
        >
          <p className="md:mt-1">Subscribe to monthly newsletter</p>
        </button>
      </form>
    </div>
  );
}

export default EmailForm;
