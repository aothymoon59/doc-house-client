import registerImage from '../../assets/login-register.png'
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Register = () => {
    return (
        <div className='flex flex-col md:flex-row min-h-screen'>
            <div className='md:w-1/2 bg-[#07332F] p-10 flex justify-center items-center'>
                <img src={registerImage} alt="Login Image" />
            </div>
            <div className='md:w-1/2 bg-[#ffffff] p-10 flex justify-center items-center'>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;