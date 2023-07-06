import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import loginImg from 'assets/login.png';
import classNames from 'classnames';
import { SlClose } from 'react-icons/sl';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';

const schema = yup
  .object({
    email: yup.string().email().required('Email obligatoire'),
    password: yup.string().required('Mot de passe obligatoire'),
  })
  .required();

const Login = ({ showLoginModal, setShowLoginModal, setShowModal }) => {
  const router = useRouter();
  const callbackUrl = router.query.callbackUrl as string;
  const { data: session, status } = useSession();
  const [errorAlert, setErrorAlert] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (credentials) => {
    setLoading(true);
    console.log(credentials);

    const { error } = await signIn('credentials', {
      ...credentials,
      redirect: false,
    });

    if (!!error) {
      setErrorAlert(true);
      setLoading(false);
      return;
    }
  };
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
        <div className="flex flex-col w-2/4 h-fit bg-slate-600 p-2 rounded-lg bg-opacity-50">
          <button
            className="text-black text-xl place-self-end mb-2 mr-2"
            onClick={() => setShowLoginModal(false)}
          >
            <SlClose />
          </button>
          <div className="flex flex-row justify-center items-center bg-white p-0  rounded">
            <div className="w-full h-full">
              <Image
                src={loginImg}
                layout="responsive"
                height={500}
                width={500}
                alt=""
              />
            </div>
            <div className="w-full p-8">
              <div>
                <div className="mb-5">
                  <h1 className="text-4xl mb-10">Sign into your accont</h1>
                </div>
                <form
                  className="w-full max-w-sm"
                  onSubmit={handleSubmit(onSubmit)}
                >
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

                  <button
                    type="submit"
                    className="bg-gray-800 hover:bg-lime-400 text-white hover:text-gray-800 font-bold hover:duration-200 py-2 px-2 w-full rounded-lg"
                  >
                    Log In
                  </button>
                </form>
                <div>
                  <p
                    className="text-gray-500 text-sm my-5"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    Forgot Password ?
                  </p>
                  <div className="flex">
                    <p>New Here ?</p>
                    <button
                      onClick={openOtherModal}
                      className="text-bold underline text-lime-400 ml-2"
                    >
                      Sign Up
                    </button>
                  </div>
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
