import React, { useState, useRef } from "react";
import images from "../../assets/Assets/index";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const FormikForm = () => {
  const [tabledata, settabledata] = useState([]);
  const [editClick, seteditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [SelectedImage, setSelectedImage] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const inputRef = useRef(null);
  const [fields, setFields] = useState([1]);
  const [image, setImage] = useState("");

  // const handleChange = (e) => {
  //   setInputs({
  //     ...inputs,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = (values, { resetForm }) => {
    if (editClick) {
      const tempTabledata = [...tabledata];
      tempTabledata[editIndex] = values;
      settabledata(tempTabledata);
      seteditClick(false);
      setEditIndex("");
    } else {
      settabledata([...tabledata, values]);
    }
    resetForm(); // Reset the form fields
    setInputs({ // Clear the form fields
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  const addField = () => {
    const newFields = [...fields];
    newFields.push(newFields.length + 1);
    setFields(newFields);
  };

  const removeField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const removeImage = () => {
    setImage("");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleImageClick = () => {
    if (!image) {
      inputRef.current.click();
    }
  };

  const handleDelete = (index) => {
    const filterData = tabledata.filter((item, i) => i !== index);
    settabledata(filterData);
  };

  const handleEdit = (index) => {
    const tempData = tabledata[index];
    seteditClick(true);
    setEditIndex(index);
    setInputs({
      name: tempData.name,
      email: tempData.email,
      password: tempData.password,
      confirmpassword: tempData.confirmpassword,
    });
    
  };



  const SelectedFile = (event) => {
    const selectedFile = event.target.files;
    console.log(selectedFile);

    const selectedFilesArray = Array.from(selectedFile);
    const imagesarray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImage((previousImages) => previousImages.concat(imagesarray));
  };
  return (
    <div className="bg-img-form">
      <div className="container ">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12" >
            <Formik
              initialValues={inputs}
              enableReinitialize // Add this line to enable reinitialization
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <h1 className="register">Registration form</h1>
                  <div className="">
                    <div className="">
                    <div className="field">
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="field mt-3">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="field mt-3">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="field mt-3">
                <label htmlFor="confirm_password">Confirm Password</label>
                <Field
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  className="form-control"
                />
                <ErrorMessage
                  name="confirmpassword"
                  component="div"
                  className="error-message"
                />
              </div>

              {/* Additional fields */}
              {fields.map((field, index) => (
                <div className="field" key={field}>
                  <label htmlFor={`name${field}`}>Name</label>
                  <div className="input-group">
                    <Field type="text" name={`name${field}`} id={`name${field}`} />
                    <button
                      type="button"
                      onClick={() => removeField(index)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              {/* Add Field button */}
              <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={addField}
              >
                Add Field
              </button>

              {/* Submit button */}
              <div className="mt-3">
                <button type="submit" className="btn btn-primary w-100">
                  {editClick ? "Update" : "Add"}
                </button>
              </div>

                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center custom-spacing"
            onClick={handleImageClick}
            style={{ marginTop: "10rem" }}
          >
            {image ? (
              <div>
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  style={{ height: "300px", width: "300px" }}
                />
              </div>
            ) : (
              <img
                src={images.upload}
                alt=""
                style={{ height: "300px", width: "300px" }}
              />
            )}
            <br />
            {image && (
              <button className="btn btn-danger mt-4" onClick={removeImage}>
                Remove Image
              </button>
            )}
            {!image && (
              <>
                <button className="btn btn-primary mt-4 ms-3">
                  Upload Image
                </button>
                <input
                  type="file"
                  onChange={handleImageChange}
                  ref={inputRef}
                  style={{ display: "none" }}
                />
              </>
            )}
          </div>
        </div>

        <div>
          <table className="table" style={{ marginTop: "15rem" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Confirm Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tabledata.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.confirmpassword}</td>
                  <td>
                    <button className="ms-3 btn btn-primary" onClick={() => handleEdit(i)}>
                     Edit
                    </button>
                    &nbsp;  | &nbsp;
                    <button onClick={() => handleDelete(i)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container main-multiple-image-class">
        <section>
          <label>
            + Add Images <br />
            <span>up to 10 images</span>
            <input
              type="file"
              name="images"
              onChange={SelectedFile}
              multiple
              accept="image/png, image/jpeg , image/webp"
            />
          </label>
          <br />
          {SelectedImage.length > 0 &&
            (SelectedImage.length > 10 ? (
              <p className="error">
                You can't upload more than 10 images
                <br />
                <span>
                  please delete <b>{SelectedImage.length - 10}</b> of them
                </span>
              </p>
            ) : (
              <button
                className="upload-btn"
                onClick={() => {
                  console.log("upload images");
                }}
              >
                Upload {SelectedImage.length} Images
              </button>
            ))}

          <div className="images">
            {SelectedImage &&
              SelectedImage.map((image, index) => {
                return (
                  <div key={image} className="image">
                     <img src={image} alt="" className="images-array-size" />
                    <button
                      onClick={() =>
                        setSelectedImage(
                          SelectedImage.filter((e) => e !== image)
                        )
                      }
                    >
                      Delete Image
                    </button>
                    <p>{index + 1}</p>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormikForm;
