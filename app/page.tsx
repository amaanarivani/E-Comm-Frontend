'use client';
import React, { useContext, useEffect, useState } from "react";
import { RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { contextType } from "@/contextApi/CreateDataContext";
import { Context } from "@/contextApi/AuthContext";
export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false)
  const { boundActions } = useContext<contextType>(Context);
  const { signIn, updateUserData } = boundActions;
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (success != "") {
      enqueueSnackbar(success, {
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom'
        },
        variant: 'success'
      })
      setSuccess('');
    }
    else if (error != "") {
      enqueueSnackbar(error, {
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom'
        },
        variant: 'error'
      })
      setError('');
    }

  }, [success, error])



  const onFormSubmit = async () => {
    try {
      setLoading(true);
      // e.preventDefault();
      let tEmail = email.trim();
      let tPassword = password.trim();
      if (!tEmail && !tPassword) {
        setError("Please provide your login credentials");
        setLoading(false);
        console.log(error);
        return;
      }
      if (!tEmail && tPassword) {
        setError("Please provide your email.");
        setLoading(false);
        console.log(error);
        return;
      }

      if (!tPassword && tEmail) {
        setError("Please provide your password");
        setLoading(false);
        console.log(error);
        return;
      }
      signIn({
        email: tEmail,
        password: tPassword,
        router,
        setError,
        setLoading,
        setSuccess
      });
      console.log(error);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // useEffect(() => {
  //   updateUserData({ router, pathName });
  // }, []);


  return (
    <>
      <div className="w-full h-screen  flex justify-center content-center bg-[#f1f1f1] items-center   ">
        <section className="bg-[#279EFF] w-9/12  p-5 content-center rounded shadow-xl  ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex flex-col justify-center">
              {/* <img src="/icon.png" style={{ width: "70%", height: "90%" }} alt="logo" /> */}
              <img src="https://st3.depositphotos.com/35530942/37682/v/450/depositphotos_376824262-stock-illustration-online-registration-sign-concept-young.jpg"
                // style={{ width: "70%", height: "90%" }}
                alt="logo" className="rounded w-[90%]" />
            </div>
            <div>
              <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold">
                  Sign in to E-Comm
                </h2>
                <div
                  onSubmit={onFormSubmit}
                  className="mt-8 space-y-6"
                // action="#"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium"
                    >
                      Password
                    </label>
                    <span className=" relative flex">

                      <input
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type={!show ? "password" : "text"}
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                        required
                      />{!show ? <RemoveRedEye className=" absolute right-2 top-2" onClick={() => { setShow(!show) }} /> : <VisibilityOff className="absolute right-2 top-2" onClick={() => { setShow(!show) }} />}
                    </span>

                  </div>
                  <button
                    disabled={loading}
                    onClick={onFormSubmit}
                    // type="button"
                    className="bg-[#279eff] w-full py-1.5 text-white rounded-lg cursor-pointer"
                  >
                    {!loading ? "Login" : "Please wait..."}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
