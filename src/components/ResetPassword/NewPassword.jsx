import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FieldError, LoaderCenter } from "../../assets";
import { TOASTER_STYLING_VALUES } from "../../config";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function NewPassword({ setCurrentView }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toasterLoader, setToasterLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "SignIn || Project Name";
  }, []);

  const togglePasswordVisiblity = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  function onSubmit(data) {
    setToasterLoader(true); // Show loader while sending code

    // Simulating async API call, you can replace this with your actual API call
    setTimeout(() => {
      setToasterLoader(false); // Hide loader
      toast.success("Your password has been changed.", TOASTER_STYLING_VALUES);
      setTimeout(() => {
        navigate("/login"); // Navigate to the login page
      }, 2000);
    }, 2000);
  }

  function backtocodepage() {
    setCurrentView(2);
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
                      onClick={backtocodepage}
                      className="arrow-left"
                    />
                  </Link>
                  <div className="text-start">
                    <h2 className="reset-password">Get a new password</h2>
                  </div>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="position-relative" controlId="password">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter New Password"
                        style={{
                          borderColor: errors?.password ? "#a80000" : "",
                        }}
                        {...register("password", {
                          required: true,
                          maxLength: 20,
                        })}
                        aria-invalid={errors.password ? "true" : "false"}
                      />
                      {showPassword === false ? (
                        <AiFillEyeInvisible
                          className="show_pswd"
                          onClick={() => togglePasswordVisiblity("password")}
                        />
                      ) : (
                        <AiFillEye
                          className="show_pswd"
                          onClick={() => togglePasswordVisiblity("password")}
                        />
                      )}
                      {errors.password?.type === "required" && (
                        <p role="alert" style={{ color: "red" }}>
                          Password is required
                        </p>
                      )}
                      {errors.password?.type === "maxLength" && (
                        <p role="alert" style={{ color: "red" }}>
                          Password Length Exceeded
                        </p>
                      )}
                    </Form.Group>
                    <Form.Group className="position-relative" controlId="confirmPassword">
                      <Form.Control
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm New Password"
                        style={{
                          borderColor: errors?.confirmPassword ? "#a80000" : "",
                        }}
                        {...register("confirmPassword", {
                          required: true,
                          maxLength: 20,
                          validate: (value) => value === password,
                        })}
                        aria-invalid={errors.confirmPassword ? "true" : "false"}
                      />
                      {showConfirmPassword === false ? (
                        <AiFillEyeInvisible
                          className="show_pswd"
                          onClick={() => togglePasswordVisiblity("confirmPassword")}
                        />
                      ) : (
                        <AiFillEye
                          className="show_pswd"
                          onClick={() => togglePasswordVisiblity("confirmPassword")}
                        />
                      )}
                      {errors.confirmPassword?.type === "required" && (
                        <p role="alert" style={{ color: "red" }}>
                          Password is required
                        </p>
                      )}
                      {errors.confirmPassword?.type === "maxLength" && (
                        <p role="alert" style={{ color: "red" }}>
                          Password Length Exceeded
                        </p>
                      )}
                      {errors.confirmPassword?.type === "validate" && (
                        <p role="alert" style={{ color: "red" }}>
                          Passwords do not match
                        </p>
                      )}
                    </Form.Group>
                    <Form.Group>
                      {!toasterLoader ? (
                        <button type="submit" className="submit-btn">
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
