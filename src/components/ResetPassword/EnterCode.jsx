import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FieldError, LoaderCenter } from "../../assets";
import { TOASTER_STYLING_VALUES } from "../../config";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function EnterCode({ setCurrentView }) {
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
  function backtoresetpage() {
    setCurrentView(1);
  }
  function onSubmit(data) {
    setToasterLoader(true); // Show loader while sending code

    toast.success("verify code from email.", TOASTER_STYLING_VALUES);
    setTimeout(() => {
      setCurrentView(3);
    }, 2000); // Delayed execution after 2 seconds

    // Simulating async API call, you can replace this with your actual API call
    setTimeout(() => {
      setToasterLoader(false); // Hide loader
    }, 2000);
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <section className="landing-login-section">
        <div className="container">
          <div className="row justify-content-center margin-top-set">
            <div className="col-xl-5 col-lg-7 col-md-8 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <Link>
                    <AiOutlineArrowLeft
                      size={25}
                      onClick={backtoresetpage}
                      className="arrow-left"
                    />
                  </Link>
                  <div className="text-start">
                    <h2 className="reset-password">Enter The Code</h2>
                  </div>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="Formnumber">
                      <Form.Control
                        type="text"
                        placeholder="12345"
                        style={{ borderColor: errors?.Formnumber ? "#a80000" : "" }}
                        {...register("Formnumber", {
                          required: true,
                          maxLength: 20,
                         pattern: /\d+/ 
                        })}
                        aria-invalid={errors.Formnumber ? "true" : "false"}
                      />
                      {errors.Formnumber?.type === "required" && (
                        <p role="alert" style={{ color: "red" }}>
                          Code is required
                        </p>
                      )}
                      {errors.Formnumber?.type === "maxLength" && (
                        <p role="alert" style={{ color: "red" }}>
                          Code Length Exceeded
                        </p>
                      )}
                       {errors.Formnumber?.type === "pattern" && (
                        <p role="alert" style={{ color: "red" }}>
                         Please enter number in code field
                        </p>
                      )}
                    </Form.Group>

                    <Form.Group>
                      {!toasterLoader ? (
                        <button
                          type="submit"
                          // to="/newpassword"

                          className="submit-btn text-center"
                        >
                          Verify
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
    </React.Fragment>
  );
}
