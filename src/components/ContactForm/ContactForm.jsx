import { useForm } from 'react-hook-form';
import './ContactForm.css'

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* name and email  */}
                <div className='flex flex-col md:flex-row gap-6 mb-6'>
                    <div className="form-control md:w-1/2">
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            name="name"
                            placeholder="Name"
                            className="custom-input"
                        />
                        {errors.name && (
                            <span className="text-red-600 mt-2">Name is required</span>
                        )}
                    </div>
                    <div className="form-control md:w-1/2">
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            name="email"
                            placeholder="email"
                            className="custom-input"
                        />
                        {errors.email && (
                            <span className="text-red-600 mt-2">Email is required</span>
                        )}
                    </div>
                </div>
                {/* mobile and doctor name  */}
                <div className='flex flex-col md:flex-row gap-6 mb-6'>
                    <div className="form-control md:w-1/2">
                        <input
                            type="text"
                            {...register("mobile", { required: true })}
                            name="mobile"
                            placeholder="Mobile Number"
                            className="custom-input"
                        />
                        {errors.email && (
                            <span className="text-red-600 mt-2">Mobile Number is required</span>
                        )}
                    </div>
                    <div className="form-control md:w-1/2">
                        <input
                            type="text"
                            {...register("doctor", { required: true })}
                            name="doctor"
                            placeholder="Doctor Name"
                            className="custom-input"
                        />
                        {errors.name && (
                            <span className="text-red-600 mt-2">Doctor Name is required</span>
                        )}
                    </div>
                </div>
                {/* date and time  */}
                <div className='flex flex-col md:flex-row gap-6 mb-6'>
                    <div className="form-control md:w-1/2">
                        <input
                            type="date"
                            {...register("date", { required: true })}
                            name="date"
                            className="custom-input"
                        />
                        {errors.email && (
                            <span className="text-red-600 mt-2">Date is required</span>
                        )}
                    </div>
                    <div className="form-control md:w-1/2">
                        <select {...register("time", { required: true })} className="w-full p-[22px] bg-[#ffffff0d] rounded-[10px] text-white custom-select">
                            <option value=''>Time</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="01:00 PM">01:00 PM</option>
                            <option value="02:00 PM">02:00 PM</option>
                            <option value="03:00 PM">03:00 PM</option>
                            <option value="04:00 PM">04:00 PM</option>
                            <option value="05:00 PM">05:00 PM</option>
                            <option value="06:00 PM">06:00 PM</option>
                            <option value="07:00 PM">07:00 PM</option>
                        </select>
                    </div>
                </div>

                <button type='submit' className="common-btn w-full">Book Now</button>

            </form>
        </div>
    );
};

export default ContactForm;