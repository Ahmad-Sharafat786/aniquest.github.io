import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FieldError, LoaderCenter } from "../../assets";
import { TOASTER_STYLING_VALUES } from "../../config";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";


export default function ResetPassword({ setCurrentView }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const [toasterLoader, setToasterLoader] = useState(false);

  useEffect(() => {
    document.title = "SignIn || Project Name";
  }, []);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  function onSubmit(data) {
    setToasterLoader(true); // Show loader while sending code
    toast.success("Code sent to email.", TOASTER_STYLING_VALUES);
    setTimeout(() => {
      
      setCurrentView(2);
    }, 2000); // Delayed execution after 2 seconds

    // Simulating async API call, you can replace this with your actual API call
    setTimeout(() => {
      setToasterLoader(false); // Hide loader
    }, 2000);
  }

  return (
    <React.Fragment>
      <section className="landing-login-section">
        <div className="container">
          <div className="row justify-content-center margin-top-set">
            <div className="col-xl-5 col-lg-7 col-md-8 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <Link to="/login">
                    <AiOutlineArrowLeft size={25} className="arrow-left" />
                  </Link>
                  <div className="text-start">
                    <h2>Reset your Password</h2>
                  </div>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Email or phone number"
                        style={{
                          borderColor: errors?.email ? "#a80000" : "",
                        }}
                        {...register("email", {
                          required: true,
                          pattern: {
                            value:
                              /^(\+[0-9]{1,3}[- ]?)?([0-9]{10,11}|[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/,
                          },
                        })}
                      />
                      {errors?.email?.type === "required" && (
                        <FieldError message={"This Field is Required"} />
                      )}
                      {errors?.email?.type === "pattern" && (
                        <FieldError
                          message="Please enter a valid email or phone number!"
                        />
                      )}
                    </Form.Group>

                    <Form.Group>
                      {!toasterLoader ? (
                        <button
                          type="submit"
                          className="submit-btn text-center"
                        >
                          Get Code
                        </button>
                      ) : (
                        <LoaderCenter />
                      )}
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </React.Fragment>
  );
}
