import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import logo from "../assets/icons/logo2.jpg";
import { useNavigate } from "react-router-dom";

function VerifyCode(props) {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    code: Yup.string()
      .matches(/^\d{6}$/, "Invalid code format")
      .required("Code is required"),
  });



  return (
    <div className="flex md:items-center py-16 md:py-0 justify-center h-screen px-[10px] sm:px-[1vw] md:px-[4vw] lg:px-[6vw] xl:px-[10vw] md:bg-white bg-[#FF6F00]">
      <div className="lg:py-10 flex lg:justify-between w-full md:justify-center md:items-center items-start lg:mx-20 mx:0 ">
        <div className="hidden lg:block text-[#727272]">
          <h3 className="font-bold mb-2">Important Information</h3>
          <p className="mb-14">
            Please <span className="font-bold">read </span> the information
            below and then <br /> kindly{" "}
            <span className="font-bold">share</span> the requested information.
          </p>
          <ul className="list-disc ml-5">
            <li>Do not reveal your password to anybody</li>
            <li>Do not reuse passwords</li>
            <li>Use Alphanumeric passwords</li>
          </ul>
        </div>
        <div className="bg-[#FF6F00] lg:w-1/2 w-full  px-2 md:px-20 md:py-24 py-4 lg:mx-0 mx-10">
          <div className="flex justify-between items-center mb-4 ">
            <h3 className="text-2xl lg:text-4xl font-bold text-white">
              Verify your <br /> Code
            </h3>
            <img
              src={logo}
              alt=""
              className="xl:w-[90px] w-[70px] lg:w-[75px]"
            />
          </div>
          <p className="text-white lg:text-[17px] mb-[40px]">
            Enter the passcode you just received on your email address ending
            with *******in@gmail.com
          </p>
          <Formik
            initialValues={{ code: "" }}
            validationSchema={validationSchema}
            onSubmit={async(values) => {
              try{
                const id = localStorage.getItem("id");
                const data = {
                  otp: values.code,
                  userId: id,
                }
                const response = await axios.post("http://localhost:3000/auth/verify-otp", data, {
                  headers: {
                    "Content-Type": "application/json"
                  }
                })
                console.log(response);
                }catch(err){
                  console.log(err)
                }
                navigate("/newpassword")
              // Handle form submission
            }}
          >
            {() => (
              <Form >
                <label htmlFor="code" className="block mb-2 text-white">
                  Code
                </label>
                <Field
                  name="code"
                  id="code"
                  className="block w-full py-2 rounded-xl border-[1px] border-black focus:outline-none px-2 md:mb-1 mb-1"
                />
                <ErrorMessage
                  name="code"
                  component="div"
                  className="text-red-900 mt-1"
                />
                
                  <button
                    type="submit"
                    className="py-3 px-5 mt-6 bg-white text-[#FF6F00] font-medium rounded-md float-right"
                  >
                    Continue
                  </button>
                
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default VerifyCode;
