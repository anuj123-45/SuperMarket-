import React from "react";
import { Form} from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "./App.css";
import { Link ,useNavigate} from "react-router-dom";

export default function FormValidation() {

  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
    var a = [];
    a.push(data);
    localStorage.setItem("Customer Details", JSON.stringify(a));
    const { firstName, lastName, email, phone, address } = data;
    console.log(firstName, lastName, email, phone, address);
    fetch("https://anuj-amazing-supermarket-server.onrender.com/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body:JSON.stringify({
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone,
        address:address,
        purchased_items:localStorage.getItem('names'),
        totalCost:localStorage.getItem('TotalCost'),
      }),
    }).then((res)=>{
      if(res.status===200){
        alert("Data Saved");
        var options = {
          key: "rzp_test_Gx2PIk72JFokkA",
          key_secret: "b94Ld1yRMPySxvASs4IwMCDV",
          amount: localStorage.getItem("TotalCost") * 100,
          currency: "INR",
          name: "STARTUP_PROJECTS",
          description: "for testing purpose",
          handler: function () {
            alert("Payment Successfull");
            alert("Visit Again");
            navigate("/home");
          },
    
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var pay = new window.Razorpay(options);
        pay.open();
      }
      else if(res.status===409){
        alert("Email already exists");
      }
    })
    .then((d)=>{
      
      //alert(d.message)
      console.log(d)
    })

  
    
  }
  return (
    <>
      <div className="checkout">
        <h1
          style={{ textAlign: "left", fontWeight: "bolder", color: "black" }}
          id="f"
        >
          Checkout
        </h1>
        <h1 style={{ textAlign: "left", fontWeight: "bolder", color: "black" }}>
          Total Cost of items : Rs {localStorage.getItem("TotalCost")}
        </h1>
        <Link to="/gotohome">
          <button type="button" className="btn btn-warning">
            Home
          </button>
        </Link>
        <div className="d-flex justify-content-center">
          <div
            style={{
              border: "2px solid black",
              textAlign: "center",
              width: "300px",
              marginTop: "50px",
            }}
          >
            <h1 style={{ color: "black", fontWeight: "bolder" }}>
              Enter your Details
            </h1>
            <Form onSubmit={handleSubmit(onSubmit)} style={{ padding: "50px" }}>
              <Form.Field>
                <label>First Name</label>
                <input
                  placeholder="First Name"
                  type="text"
                  {...register("firstName", { required: true, maxLength: 10 })}
                />
              </Form.Field>
              {errors.firstName && (
                <p style={{ color: "red", fontWeight: "bolder" }}>
                  Please check the First Name
                </p>
              )}
              <Form.Field>
                <label>Last Name</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  {...register("lastName", { required: true, maxLength: 10 })}
                />
              </Form.Field>
              {errors.lastName && (
                <p style={{ color: "red", fontWeight: "bolder" }}>
                  Please check the Last Name
                </p>
              )}
              <Form.Field>
                <label>Email</label>
                &ensp; &ensp; &ensp;
                <input
                  placeholder="Email"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z](([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              </Form.Field>
              {errors.email && (
                <p style={{ color: "red", fontWeight: "bolder" }}>
                  Please check the Email
                </p>
              )}
              <Form.Field>
                <label>Phone no</label>
                &ensp; &ensp; &ensp;
                <input
                  placeholder="Phone"
                  type="tel"
                  {...register("phone", {
                    required: true,
                    pattern: /[0-9]{10}/,
                    maxLength: 10,
                  })}
                />
              </Form.Field>
              {errors.phone && (
                <p style={{ color: "red", fontWeight: "bolder" }}>
                  Please correct the phone number (up to 10 digits)
                </p>
              )}
              <Form.Field>
                <label>Address</label>
                &ensp; &ensp; &ensp;
                <textarea
                  placeholder="Address"
                  {...register("address", {
                    required: true,
                  })}
                  rows={4}
                  cols={22}
                />
              </Form.Field>
              {errors.address && (
                <p style={{ color: "red", fontWeight: "bolder" }}>
                  Fill the address
                </p>
              )}
              <br />
              <button className="btn btn-primary">Submit</button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
              }
