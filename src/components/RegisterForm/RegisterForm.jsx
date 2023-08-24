import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
import { ImSpinner9 } from "react-icons/im";
import { toast } from 'react-hot-toast';

const RegisterForm = () => {
    const [showPass, setShowPass] = useState(false);
    const { loading, setLoading, createUser, updateUserProfile } = useAuth();
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
        const { name, email, password } = data;

        // upload image
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY
            }`;

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                const imgUrl = imgData.data.display_url;

                createUser(email, password)
                    .then(() => {
                        updateUserProfile(name, imgUrl)
                            .then(() => {
                                const savedUser = {
                                    name,
                                    email,
                                    image: imgUrl,
                                    role: "user",
                                };

                                fetch(`${import.meta.env.VITE_API_URL}/users`, {
                                    method: "POST",
                                    headers: {
                                        "content-type": "application/json",
                                    },
                                    body: JSON.stringify(savedUser),
                                })
                                    .then((res) => res.json())
                                    .then((data) => {
                                        if (data.insertedId) {
                                            reset();
                                            toast.success("Successfully sign Up!");
                                            setLoading(false);
                                            navigate(from, { replace: true });
                                        }
                                    });
                            })
                            .catch((err) => {
                                console.log(err.message);
                                toast.error(err.message);
                                setLoading(false);
                            });
                        setLoading(false);
                        navigate(from, { replace: true });
                    })
                    .catch((err) => {
                        console.log(err.message);
                        toast.error(err.message);
                        setLoading(false);
                    });
            })
            .catch((err) => {
                console.log(err.message);
                toast.error(err.message);
                setLoading(false);
            });
    };

    return (
        <div className='w-full lg:w-[70%]'>
            <Link to='/' className='flex gap-2 items-center mb-5'><FaArrowLeft /> Go to home</Link>
            <div className='border border-gray-300 p-5 rounded-md w-full'>
                <h2 className='font-bold text-2xl xl:text-[30px] text-center mb-8'>Sign Up to Doc House</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text font-medium">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            name="name"
                            placeholder="Name"
                            className="input input-bordered w-full"
                        />
                        {errors.name && (
                            <span className="text-red-600 mt-2">Name is required</span>
                        )}
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text font-medium">Upload your Photo</span>
                        </label>
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            name="image"
                            className="file-input file-input-bordered w-full"
                        />
                        {errors.image && (
                            <span className="text-red-600 mt-2">Photo is required</span>
                        )}
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
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
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                            })}
                            name="password"
                            placeholder="password"
                            className="input input-bordered w-full"
                        />
                        {errors.password?.type === "required" && (
                            <p className="text-red-600 mt-2">Password is required</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-600 mt-2">
                                Password must be 6 character
                            </p>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <p className="text-red-600 mt-2">
                                Password must be less than 20 character
                            </p>
                        )}
                        {errors.password?.type === "pattern" && (
                            <p className="text-red-600 mt-2">
                                Password must be contain one uppercase and one special
                                character
                            </p>
                        )}
                        <p
                            className="absolute top-[54px] right-[15px]"
                            onClick={() => setShowPass(!showPass)}
                        >
                            <small>{showPass ? <FaEye /> : <FaEyeSlash />}</small>
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full common-btn"
                    >
                        {loading ? (
                            <ImSpinner9 className="m-auto animate-spin" size={24} />
                        ) : (
                            "Create Account"
                        )}
                    </button>
                    <p className="text-center mt-4 mb-6">
                        <small>
                            Already registered? Go to{" "}
                            <Link to="/login" className="font-semibold text-[#F7A582]">
                                SIGN IN
                            </Link>
                        </small>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;