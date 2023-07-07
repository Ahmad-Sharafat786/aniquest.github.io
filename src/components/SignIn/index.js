import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FieldError, LoaderCenter } from "../../assets";
import { TOASTER_STYLING_VALUES } from "../../config";

export default function SignIn() {
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
    if (data.email === "user@gmail.com") {
      const userData = { ...data, token: "token", userType: "user" };
      localStorage.setItem("dummy_user", JSON.stringify(userData));
      setToasterLoader(true);
      // Redirect to the dashboard using React Router
      window.location.href = "/dashboard";
    } else {
      toast.error("Invalid Email or Password", TOASTER_STYLING_VALUES);
      setToasterLoader(false);
    }
  }

  // function moveToNext(data) {
  //   localStorage.setItem("dummy_user", JSON.stringify(data));
  // }

  // function notification(data, condition) {
  //   if (condition === "success") {
  //     toast.success(data, TOASTER_STYLING_VALUES);
  //     setToasterLoader(true);
  //   } else {
  //     toast.error(data, TOASTER_STYLING_VALUES);
  //   }
  // }

  return (
    <React.Fragment>
      <ToastContainer />
      <section className="login-section">
        <div className="container">
          <div className="row justify-content-center margin-top-set">
            <div className="col-xl-5 col-lg-7 col-md-8 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="text-center">
                    <h2>Sign in</h2>
                  </div>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Email or phone number"
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
                    <Form.Group className="position-relative">
                      <Form.Control
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
                      {passwordShown === false ? (
                        <AiFillEyeInvisible
                          className="show_pswd"
                          onClick={togglePasswordVisiblity}
                        />
                      ) : (
                        <AiFillEye
                          className="show_pswd"
                          onClick={togglePasswordVisiblity}
                        />
                      )}
                      {errors?.password && (
                        <FieldError message={"This Field is Required"} />
                      )}
                    </Form.Group>
                    <Form.Group className="position-relative">
                      <Form.Control
                        type={passwordShown ? "text" : "password"}
                        placeholder="Repeat Password"
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
                      {passwordShown === false ? (
                        <AiFillEyeInvisible
                          className="show_pswd"
                          onClick={togglePasswordVisiblity}
                        />
                      ) : (
                        <AiFillEye
                          className="show_pswd"
                          onClick={togglePasswordVisiblity}
                        />
                      )}
                      {errors?.password && (
                        <FieldError message={"This Field is Required"} />
                      )}
                    </Form.Group>
                    <Form.Group>
                      {!toasterLoader ? (
                        <button type="submit" className="submit-btn">
                         Create Account
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
