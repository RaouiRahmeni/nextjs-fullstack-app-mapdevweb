import Image from 'next/image';
import signupImg from 'assets/signup.png';
import FormText from 'components/Form/FormText';

import { SlClose } from 'react-icons/sl';
import style from './Register.module.css';
const Register = ({ showModal, setShowModal, setShowLoginModal }) => {
  if (!showModal) return null;
  const openOtherModal = () => {
    setShowLoginModal(true);
    setShowModal(false);
  };
  const handleClose = (e) => {
    if (e.target.id === 'wrapper') setShowModal(false);
  };
  console.log();

  return (
    <div>
      <div
        className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
        onClick={handleClose}
        id="wrapper"
      >
        <div className="flex flex-col w-2/4 bg-slate-600 p-2 rounded-lg bg-opacity-50">
          <button
            className="text-black text-xl place-self-end mb-2 mr-2"
            onClick={() => setShowModal(false)}
          >
            <SlClose />
          </button>
          <div className="flex flex-row  justify-center items-center bg-white p-0 rounded-lg">
            <div className="w-full p-8">
              <div className="mb-5">
                <h1 className="text-lg font-bold mb-4">Create your accont</h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <form className="w-full max-w-sm">
                <div className="relative my-5">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="peer h-10 w-full border-b-4 rounded border-lime-500 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-500"
                    placeholder="john@doe.com"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-300 peer-focus:text-sm"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative my-5">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-4 rounded border-lime-500 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-500"
                    placeholder="john@doe.com"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-300 peer-focus:text-sm"
                  >
                    E-mail
                  </label>
                </div>
                <div className="relative my-5">
                  <input
                    id="password"
                    name="password"
                    type="text"
                    className="peer h-10 w-full border-b-4 rounded  border-lime-500 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-500"
                    placeholder="john@doe.com"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-300  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-300 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div>
                  <p className="text-gray-500 text-xs my-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto.
                  </p>
                </div>
                <button className="bg-gray-800 hover:bg-lime-400 text-white hover:text-gray-800 font-bold hover:duration-200 py-2 px-2 w-full rounded-lg">
                  Get Started !
                </button>
              </form>
              <div>
                <p className="text-gray-500 text-xs my-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Architecto.
                </p>
                <div className="flex">
                  <p>Already Signed In ?</p>
                  <button
                    onClick={openOtherModal}
                    className="text-bold underline text-lime-400 ml-2"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <Image
                src={signupImg}
                layout="responsive"
                height={500}
                width={500}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
