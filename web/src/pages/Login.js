import logo from "../assets/icons/logo.jpg";
import image from "../assets/images/Login-amico.png";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

export default function Login() {
  const validationSchema = Yup.object({
    number: Yup.string()
      .matches(/^(05|06|07)\d{8}$/, "phone number is not valid")
      .required("Phone Number is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Password must be at least 8 characters including letters and numbers "
      )
      .required("password is required"),
  });
  const formik = useFormik({
    initialValues: {
      number: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const data = {
        identifier: values.number,
        password: values.password,
      };
      try {
        const response = await axios.post(
          "http://localhost:3000/auth/login",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleblur = (e) => {
    e.target.classList.add("blure");
    console.log(e.target.classList);
    formik.handleBlur(e);
  };

  return (
    <div className="container flex gap-20 w-screen">
      <div className="flex justify-center lg:justify-start xl:justify-start 2xl:justify-start items-center lg:gap-24 xl:gap-24 2xl:gap-24 lg:ml-16 xl:ml-16 2xl:ml-16 lg:mr-16 xl:mr-16 2xl:mr-16 lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-full">
        <div className="">
          <div className="flex flex-col lg:w-[350px] xl:w-[350px] 2xl:w-[350px] w-[375px]">
            <div className="flex flex-col lg:mt-12 xl:mt-12 2xl:mt-12 mt-16 mb-6">
              <div className="lg:text-4xl xl:text-4xl 2xl:text-4xl text-3xl tracking-[6px]">
                <h2>WELCOME </h2>
                <div className="border-t-4 border-orange-500 lg:w-[180px] xl:w-[180px] 2xl:w-[180px] w-[160px] mt-2"></div>
              </div>
              <div className="lg:text-4xl xl:text-4xl 2xl:text-4xl lg:mx-48 xl:mx-48 2xl:mx-48 mx-[165px] text-3xl tracking-[6px]">
                <h2>BACK!</h2>
                <div className="border-t-4 border-orange-500 lg:w-[122px] xl:w-[122px] 2xl:w-[122px] w-[105px] mt-2"></div>
              </div>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col lg:max-w-[397px] xl:max-w-[397px] 2xl:max-w-[397px] max-w-full"
            >
              <div className="relative  h-10 input">
                <input
                  className="border-2 rounded-xl p-2 mt-10 bg-transparent w-full h-full absolute bottom-0"
                  type="text"
                  name="number"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                  onBlur={handleblur}
                />
                <label
                  htmlFor="number"
                  className="absolute text-gray-400 top-[50%] translate-y-[-50%] left-2 pointer-events-none"
                >
                  Phone Number
                </label>
              </div>

              {formik.touched.number && formik.errors.number ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.number}
                </div>
              ) : null}
              <div className="h-10 relative input mt-4">
                <input
                  className="border-2 rounded-xl p-2 mt-6 w-full absolute bottom-0"
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={handleblur}
                />
                <label
                  htmlFor="password"
                  className="absolute text-gray-400 top-[50%] translate-y-[-50%] left-2 pointer-events-none"
                >
                  Password
                </label>
              </div>

              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </div>
              ) : null}

              <Link
                to="/forgetpassword"
                className="text-[#1E4AE9] flex justify-end mt-4"
              >
                Forgot Password?
              </Link>

              <button
                type="submit"
                className="mt-4 text-base font-small text-white bg-orange-500 h-[45px] rounded-xl w-full"
              >
                Sign in
              </button>
            </form>
            <div className="mt-14 grid grid-cols-3  items-center ">
              <hr className="bg-[#CFDFE2]  h-[2px] " />
              <p className="text-center">Or</p>
              <hr className="bg-[#CFDFE2] h-[2px]" />
            </div>
            <div className="mt-6 flex flex-col gap-y-4  ">
              <button className="border-2 border-orange-500 w-full h-[50px] rounded-xl text-base text-orange-600 flex justify-center items-center gap-2">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                    fill="#34A853"
                  />
                  <path
                    d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                    fill="#4A90E2"
                  />
                  <path
                    d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                    fill="#FBBC05"
                  />
                </svg>
                Sign in with Google{" "}
              </button>
            </div>
            <div className="flex justify-center items-center lg:mt-6 mt-4">
              <p className="text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#1E4AE9]">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="lg:flex xl:flex 2xl:flex flex-col items-center hidden">
            <div className="bg-orange-500 w-[4.5px] h-[250px]"></div>
            <img src={logo} className="max-w-[129px]" alt="" />
            <div className="bg-orange-500 w-[4.5px] h-[250px]"></div>
          </div>
        </div>
      </div>
      <div className="lg:flex xl:flex 2xl:flex justify-center items-center w-1/2 hidden">
        <img
          src={image}
          className="lg:w-[500px] xl:w-[500px] 2xl:w-[500px]"
          alt=""
        />
      </div>
    </div>
  );
}
