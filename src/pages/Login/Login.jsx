import loginImage from '../../assets/login-register.png'
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse min-h-screen'>
            <div className='md:w-1/2 bg-[#07332F] p-10 flex justify-center items-center'>

                <img src={loginImage} alt="Login Image" />
            </div>
            <div className='md:w-1/2 bg-[#ffffff] p-10 flex justify-center items-center'>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;