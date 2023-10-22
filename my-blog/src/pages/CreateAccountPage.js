import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Password and confirm password don't match");
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/articles");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className='flex flex-col w-1/3 m-auto bg-white shadow-lg rounded-md border border-gray-200'>
      <h1 className='text-center text-2xl font-bold m-8'>Create Account</h1>
      {error && (
        <p className='w-auto mx-7 text-red-600 text-lg font-sans my-4'>
          {error}
        </p>
      )}
      <label
        htmlFor='email'
        className='block text-start m-2 text-lg font-semibold w-auto mx-7'
      >
        Email:
      </label>
      <input
        id='email'
        type='email'
        placeholder='Your Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='mx-7 bg-gray-50 border border-gray-300 text-gray-900 rounded block w-auto p-2.5'
      />
      <label
        htmlFor='password'
        className='inline-block text-start m-2 text-lg font-semibold w-auto mx-7 mt-8'
      >
        Password:
      </label>
      <input
        id='password'
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='mx-7 bg-gray-50 border border-gray-300 text-gray-900 rounded block w-auto p-2.5'
      />
      <label
        htmlFor='confirm'
        className='inline-block text-start m-2 text-lg font-semibold w-auto mx-7 mt-8'
      >
        Confirm Password:
      </label>
      <input
        id='confirm'
        type='password'
        placeholder='password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className='mx-7 bg-gray-50 border border-gray-300 text-gray-900 rounded block w-auto p-2.5'
      />
      <button
        onClick={createAccount}
        className='w-auto mx-7 bg-blue-700 text-white font-bold p-2.5 my-6 rounded-lg'
      >
        Log In
      </button>
      <div className='block w-auto mx-7 text-start text-md font-medium text-gray-500 mb-5'>
        Already have an account?
        <Link to='/login' className='px-1 text-blue-700 hover:underline'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default CreateAccountPage;
