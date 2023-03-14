import Image from 'next/image';
import girlCoder from 'assets/girlCoder.jpg';
import classNames from 'classnames';
const Login = ({ showLoginModal, setShowLoginModal, setShowModal }) => {
  if (!showLoginModal) return null;
  const openOtherModal = () => {
    setShowModal(true);
    setShowLoginModal(false);
  };
  const handleClose = (e) => {
    if (e.target.id === 'wrapper') setShowLoginModal(false);
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
            onClick={() => setShowLoginModal(false)}
          >
            X
          </button>
          <div className="flex justify-center items-center bg-white p-0 flex-row">
            <div className={classNames('w-full h-full')}>
              <Image
                src={girlCoder}
                className="float-righ p-0 m-0"
                // height={500}
                // width={500}
                alt=""
              />
            </div>
            <div className="w-full p-8">
              <div>
                <div className="mb-5">
                  <h1 className="text-4xl mb-10">Sign into your accont</h1>
                </div>
                <form className="w-full max-w-sm">
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

                  <button className=" bg-gray-800 hover:bg-amber-400 text-white hover:text-gray-800 font-bold py-2 px-4 w-full rounded">
                    Log In
                  </button>
                </form>
                <div>
                  <p className="text-gray-500 text-sm mt-5 p-2">
                    Forgot Password ?
                  </p>
                  <p>
                    New Here ?
                    <button
                      onClick={openOtherModal}
                      className="text-bold underline text-amber-400"
                    >
                      Sign Up{' '}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
