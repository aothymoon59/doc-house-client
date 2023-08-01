import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
    const [showPass, setShowPass] = useState(false);
    // const { loading, setLoading, signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;

        console.log(data)

        // signIn(email, password)
        //     .then(() => {
        //         reset();
        //         toast.success("Successfully sign in!");
        //         setLoading(false);
        //         navigate(from, { replace: true });
        //     })
        //     .catch((err) => {
        //         console.log(err.message);
        //         toast.error(err.message);
        //         setLoading(false);
        //     });
    };

    return (
        <div className='w-full lg:w-[70%]'>
            <Link to='/' className='flex gap-2 items-center mb-5'><FaArrowLeft /> Go to home</Link>
            <div className='border border-gray-300 p-5 rounded-md w-full'>
                <h2 className='font-bold text-2xl xl:text-[30px] text-center mb-8'>Sign In to Doc House</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text font-medium">Email Address</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            name="email"
                            placeholder="email"
                            className="input input-bordered w-full"
                        />
                        {errors.email && (
                            <span className="text-red-600 mt-2">Email is required</span>
                        )}
                    </div>
                    <div className="form-control mb-6 relative">
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input
                            type={showPass ? "text" : "password"}
                            {...register("password", {
                                required: true,
                            })}
                            name="password"
                            placeholder="password"
                            className="input input-bordered w-full"
                        />
                        {errors.password?.type === "required" && (
                            <p className="text-red-600 mt-2">Password is required</p>
                        )}
                        <p
                            className="absolute top-[54px] right-[15px]"
                            onClick={() => setShowPass(!showPass)}
                        >
                            <small>{showPass ? <FaEye /> : <FaEyeSlash />}</small>
                        </p>
                        <button
                            // onClick={handleResetPassword}
                            className="text-right mt-2 text-[#F7A582] hover:underline"
                        >
                            <small>Forgot password?</small>
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#F7A582] py-4 rounded-md text-white transition-all duration-200 ease-in-out"
                    >
                        {/* {loading ? (
                        <ImSpinner9 className="m-auto animate-spin" size={24} />
                    ) : (
                        "Sign In"
                    )} */}
                        Sign In
                    </button>
                    <p className="text-center mt-4 mb-6">
                        <small>
                            Please register at first. Go to{" "}
                            <Link to="/register" className="font-semibold text-[#F7A582]">
                                SIGN UP
                            </Link>
                        </small>

                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;