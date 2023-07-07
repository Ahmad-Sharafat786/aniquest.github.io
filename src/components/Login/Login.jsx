import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FieldError, LoaderCenter } from "../../assets";
import { TOASTER_STYLING_VALUES } from "../../config";
import { Link, useNavigate } from "react-router-dom";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import images from "../../assets/Assets";

export default function SignIn() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false); // New state for tracking login status
  var registerUserCheck = JSON.parse(localStorage.getItem("data"));

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const [toasterLoader, setToasterLoader] = useState(false);
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    document.title = "SignIn || Project Name";
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordShown((prevState) => !prevState);
  };
  console.log("registerUserCheck", registerUserCheck);
  function onSubmit(data) {
    setToasterLoader(true);
    const emailCheck =
      registerUserCheck?.[0]?.email.toLowerCase() === data.email.toLowerCase();
    const passwordCheck =
      registerUserCheck?.[0]?.password.toLowerCase() === data.password.toLowerCase();
  
    if (emailCheck && passwordCheck) {
      // Login success logic...
      setTimeout(() => {
        setToasterLoader(false); // Hide loader
        toast.success("Login successfully.", TOASTER_STYLING_VALUES);
        setTimeout(() => {
          navigate("/"); // Navigate to the login page
        }, 2000);
      }, 2000);
    } else {
      setEmailError(!emailCheck); // Set email error state based on email check result
      setPasswordError(!passwordCheck); // Set password error state based on password check result
  
      if (!emailCheck && !passwordCheck) {
        toast.error("Invalid email and password", TOASTER_STYLING_VALUES);
      } else if (!emailCheck) {
        toast.error("Invalid email", TOASTER_STYLING_VALUES);
      } else if (!passwordCheck) {
        toast.error("Invalid password", TOASTER_STYLING_VALUES);
      }
  
      setLoginError(true);
      setToasterLoader(false);
    }
  }
  

  return (
    <React.Fragment>
      <ToastContainer />
      <section className="landing-login-section">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center h-100 min-vh-100">
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="text-start">
                    <h2 className="start-trial">Log in</h2>
                  </div>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        style={{ borderColor: emailError ? "#a80000" : "" }}
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
                        <FieldError message="Please enter a valid email or phone number!" />
                      )}

                      {/* {emailError && (
                        <div className="text-danger">Invalid email</div>
                      )} */}
                    </Form.Group>
                    <Form.Group className="position-relative">
                      <Form.Control
                        type={passwordShown ? "text" : "password"}
                        placeholder="Password"
                        style={{
                          borderColor: passwordError ? "#a80000" : "",
                        }}
                        {...register("password", {
                          required: true,
                          // pattern: {
                          //   value: /[^\s]+/,
                          // },
                        })}
                      />
                      {passwordShown === false ? (
                        <AiFillEyeInvisible
                          className="show_pswd"
                          onClick={togglePasswordVisibility}
                        />
                      ) : (
                        <AiFillEye
                          className="show_pswd"
                          onClick={togglePasswordVisibility}
                        />
                      )}
                      {errors?.password && (
                        <FieldError message={"This Field is Required"} />
                      )}
                      {/* {passwordError && (
                        <div className="text-danger">Invalid password</div>
                      )} */}
                    </Form.Group>

                    <Form.Group>
                      {!toasterLoader ? (
                        <Button type="submit" className="submit-btn border-0">
                          Login
                        </Button>
                      ) : (
                        <LoaderCenter />
                      )}
                    </Form.Group>

                    {/* {loginError && (
                      <div className="text-danger">Invalid credentials</div>
                    )} */}

                    <div className="mt-4">
                      <p style={{ fontSize: "17px", color: "#8d8d8d" }}>
                        Don't have an account?{" "}
                        <span>
                          <Link
                            style={{ color: "#55b6f6", fontSize: "15px" }}
                            to="/signup"
                          >
                            Sign Up
                          </Link>
                        </span>{" "}
                        Or{" "}
                        <span>
                          <Link
                            style={{ color: "skyblue" }}
                            to="/resetpassword"
                          >
                            Forget Password
                          </Link>
                        </span>
                      </p>
                    </div>
                    {loggedIn ? (
                      <>
                        <Button variant="primary" className="logout me-4">
                          Logout
                        </Button>
                        <img
                          src={images.menuicon}
                          alt="menu-icon"
                          style={{ width: "45px" }}
                        />
                      </>
                    ) : (
                      <div class="line-container">
                        <span class="line"></span>
                        <span
                          class="text"
                          style={{ color: "#55b6f6", fontSize: "16px" }}
                        >
                          or Sign In with
                        </span>
                        <span class="line"></span>
                      </div>
                    )}

                    <Row style={{ cursor: "pointer" }}>
                      <Col lg={6}>
                        <Card.Body className="twitter-icon d-flex justify-content-around align-items-center">
                          <BsTwitter size={30} />
                          <span>Signup with twitter</span>
                        </Card.Body>
                      </Col>
                      <Col lg={6}>
                        <Card.Body className="twitter-icon d-flex justify-content-around align-items-center">
                          <img src={images.instagram} alt="" width={30} />
                          <span>Signup with Instgram</span>
                        </Card.Body>
                      </Col>
                      <Col lg={6}>
                        <Card.Body className="twitter-icon d-flex justify-content-around align-items-center">
                          <FcGoogle size={30} />
                          <span>Signup with google</span>
                        </Card.Body>
                      </Col>
                      <Col lg={6}>
                        <Card.Body className="twitter-icon d-flex justify-content-around align-items-center">
                          <BsFacebook size={30} />
                          <span>Signup with facebook</span>
                        </Card.Body>
                      </Col>
                    </Row>
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
