import React from "react";
import LabeledInput from "../elements/LabeledInput";
import CheckBox from "../elements/CheckBox";
import Button from "../elements/Button";

function FormSignIn() {
    return (
       <>
       {/* form start */}
        <div className="mt-16">
          <form action="">
            <div className="mb-6">
              <LabeledInput
                label="Email Address"
                id="email"
                type="email"
                placeholder="hello@example.com"
                name="email"
              />
            </div>
            <div className="mb-6">
                <LabeledInput
                label="Password"
                id="password"
                type="password"
                placeholder="********"
                name="password"
                />
            </div>
            <div className="mb-3">
                <CheckBox
                label="Keep me signed in"
                id="status"
                type="checkbox"
                name="status"
                />
            </div>
            <Button/>
          </form>
        </div>
        {/* form end */}
        {/* teks start */}
        <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
          <div className="border border-gray-05 w-full"></div>
          <div className="px-2 bg-special-mainBg absolute"> or sign in with</div>
        </div>
        {/* teks end */}
        {/* sign in with google start */}
        <div className="mb-8">
          <Button type="button" varian="secondary">
            <span className="flex items-center justify-center">
              <svg>
              </svg>
              Continue with Google
            </span>
          </Button>
        </div>
        {/* sign in with google end */}
        {/* link start */}
        <div className="flex justify-center">
          <a className="text-primary text-sm font-bold">Create an account</a>
        </div>
        {/* link end */}
       </>
    )
}

export default FormSignIn