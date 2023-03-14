import Image from 'next/image';
import boyCoder from 'assets/boyCoder.jpg';
import classNames from 'classnames';
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
  return (
    <div>
      <div
        className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
        onClick={handleClose}
        id="wrapper"
      >
        <div className="flex flex-col w-[1000px]">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => setShowModal(false)}
          >
            X
          </button>
          <div className="flex justify-center items-center bg-white p-0 flex-row rounded">
            <div className="w-full p-8">
              <div>
                <div className="mb-5">
                  <h1 className="text-4xl mb-4">Create your accont</h1>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <form className="w-full max-w-sm">
                  <div className="border-b border-amber-500 p-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Jane Doe"
                      id="first-name"
                    />
                  </div>
                  <div className="border-b border-amber-500 p-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      E-mail
                    </label>
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="email"
                      placeholder="Jane-Doe@mail.com"
                      id="email"
                    />
                  </div>
                  <div className="border-b border-amber-500 p-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Your password
                    </label>
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="password"
                      placeholder="Jane Doe"
                      id="password"
                    />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mt-5 p-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Architecto.
                    </p>
                  </div>
                  <button className=" bg-gray-800 hover:bg-amber-400 text-white hover:text-gray-800 font-bold py-2 px-4 w-full rounded">
                    Get Started !
                  </button>
                </form>
                <div>
                  <p className="text-gray-500 text-sm mt-5 p-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto.
                  </p>
                  <p>
                    Already Signed In ?{' '}
                    <button
                      onClick={openOtherModal}
                      className="text-bold underline text-amber-400"
                    >
                      Log in{' '}
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className={classNames('w-full h-full')}>
              <Image
                src={boyCoder}
                className="float-righ p-0 m-0"
                // height={500}
                // width={500}
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
