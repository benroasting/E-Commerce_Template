import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import CheckoutWizard from "../components/CheckoutWizard";
import Layout from "../components/layout";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function ShippingScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;
  const router = useRouter();

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
    setValue("state", shippingAddress.state);
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, address, city, state, postalCode }) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, address, city, state, postalCode },
    });
    Cookies.set(
      "cart",
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          state,
        },
      })
    );

    router.push("/payment");
  };

  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus
            {...register("fullName", {
              required: "Please enter your full name",
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            className="w-full"
            id="address"
            autoFocus
            {...register("address", {
              required: "Please enter your address",
              minLength: {
                value: 5,
                message: "Your address must be longer than 4 characters",
              },
            })}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            className="w-full"
            id="city"
            autoFocus
            {...register("city", {
              required: "Please enter your city",
            })}
          />
          {errors.city && (
            <div className="text-red-500">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Zip Code</label>
          <input
            className="w-full"
            id="postalCode"
            autoFocus
            {...register("postalCode", {
              required: "Please enter zip code",
              minLength: {
                value: 5,
                message: "Your zip code must be 5 characters long",
              },
            })}
          />
          {errors.postalCode && (
            <div className="text-red-500">{errors.postalCode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="state">State</label>
          <input
            className="w-full"
            id="state"
            autoFocus
            {...register("state", {
              required: "Please enter your state",
            })}
          />
          {errors.state && (
            <div className="text-red-500">{errors.state.message}</div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
}

ShippingScreen.auth = true;
