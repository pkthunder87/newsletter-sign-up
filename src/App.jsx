import Features from './components/Features';
import Header from './components/Header';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className=" grid h-[60rem] w-[95rem] grid-cols-[50%_50%]  rounded-[28px] bg-frontend-white px-8 pt-0">
      <div className="my-24 ml-16 mr-8">
        <Header />
        <Features />
        <SignUp />
      </div>
      <div className="grid">
        <img
          className="-mr-4 scale-95 self-center justify-self-end"
          src="./illustration-sign-up-desktop.svg"
          alt="Charts illustration"
        />
      </div>
    </div>
  );
}

export default App;
