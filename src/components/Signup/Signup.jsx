import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FieldError, LoaderCenter } from "../../assets";
import { TOASTER_STYLING_VALUES } from "../../config";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import images from "../../assets/Assets";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const [repeatPasswordShown, setRepeatPasswordShown] = useState(false);
  const [toasterLoader, setToasterLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "SignIn || Project Name";
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordShown((prevState) => !prevState);
  };

  const toggleRepeatPasswordVisibility = () => {
    setRepeatPasswordShown((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    
    setToasterLoader(true);
    var Items = [];
    var signitem = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      repeatpass: document.getElementById("repeat-password").value,
    };
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repeatpass = document.getElementById("repeat-password").value;

    if (!username.length || !email.length || !password.length || !repeatpass.length) {
      return false;
    }
    Items.push(signitem);
    localStorage.setItem("data", JSON.stringify(Items));
    setTimeout(() => {
      setToasterLoader(false); // Hide loader
      toast.success("Signup successfully.", TOASTER_STYLING_VALUES);
      setTimeout(() => {
        navigate("/login"); // Navigate to the login page
      }, 2000);
    }, 2000);
  
    // navigate("/login");
  };

  const password = watch("password", ""); // Get the value of the password field

  return (
    <React.Fragment>
      <ToastContainer />
      <section className="landing-login-section">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center min-vh-100">
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="text-start">
                    <h2 className="start-trial">Start free trial</h2>
                  </div>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <Form.Control
                      id="username"
                      type="text"
                      placeholder="Username"
                      style={{ borderColor: errors?.username ? "#a80000" : "" }}
                      {...register("username", {
                        required: true,
                        minLength: 3, // Minimum length of 3 characters
                      })}
                    />
                    {errors?.username?.type === "required" && (
                      <FieldError message={"This Field is Required"} />
                    )}
                    {errors?.username?.type === "minLength" && (
                      <FieldError message="Username should have at least 3 characters" />
                    )}
                  </Form.Group>
                    {/* Email Field */}
                    <Form.Group>
                      <Form.Control
                        id="email"
                        type="text"
                        placeholder="Email Address"
                        style={{ borderColor: errors?.email ? "#a80000" : "" }}
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
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group className="position-relative">
                      <Form.Control
                        id="password"
                        type={passwordShown ? "text" : "password"}
                        placeholder="Password"
                        style={{
                          borderColor: errors?.password ? "#a80000" : "",
                        }}
                        {...register("password", {
                          required: true,
                          pattern: {
                            value: /[^\s]+/,
                          },
                        })}
                      />
                      {passwordShown ? (
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
                    </Form.Group>

                    {/* Repeat Password Field */}
                    <Form.Group className="position-relative">
                      <Form.Control
                        id="repeat-password"
                        type={repeatPasswordShown ? "text" : "password"}
                        placeholder="Repeat Password"
                        style={{
                          borderColor: errors?.repeatPassword ? "#a80000" : "",
                        }}
                        {...register("repeatPassword", {
                          required: true,
                          pattern: {
                            value: /[^\s]+/,
                          },
                          validate: (value) =>
                            value === password ||
                            "The passwords do not match", // Custom validation message
                        })}
                      />
                      {repeatPasswordShown ? (
                        <AiFillEyeInvisible
                          className="show_pswd"
                          onClick={toggleRepeatPasswordVisibility}
                        />
                      ) : (
                        <AiFillEye
                          className="show_pswd"
                          onClick={toggleRepeatPasswordVisibility}
                        />
                      )}
                      {errors?.repeatPassword && (
                        <FieldError message={errors.repeatPassword.message} />
                      )}
                    </Form.Group>

                    <Form.Group>
                      {!toasterLoader ? ( 
                        <Button type="submit" className="submit-btn  border-0 ">
                          Create Account
                        </Button>
                      ) : (
                        <LoaderCenter />
                      )}
                    </Form.Group>
                    <div className="mt-4">
                      <p style={{ fontSize: "16px", color: "#8d8d8d" }}>
                        Already have an account?{" "}
                        <span>
                          <Link to="/login" style={{ color: "#55b6f6" }}>
                            Log in
                          </Link>
                        </span>{" "}
                      </p>
                    </div>
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
                          <span>Signup with Instagram</span>
                        </Card.Body>
                      </Col>
                      <Col lg={6}>
                        <Card.Body className="twitter-icon d-flex justify-content-around align-items-center">
                          <FcGoogle size={30} />
                          <span>Signup with Google</span>
                        </Card.Body>
                      </Col>
                      <Col lg={6}>
                        <Card.Body className="twitter-icon d-flex justify-content-around align-items-center">
                          <BsFacebook size={30} />
                          <span>Signup with Facebook</span>
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
