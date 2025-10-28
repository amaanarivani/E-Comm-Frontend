"use client"
import React, { useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ClickAwayListener } from "@mui/material";
import { AccountCircleOutlined, Menu } from "@mui/icons-material";
import { enqueueSnackbar } from "notistack";
import { contextType } from "@/contextApi/CreateDataContext";
import { Context } from "@/contextApi/AuthContext";

const Navbar = () => {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isMenuDropOpen, setIsMenuDropOpen] = useState<boolean>(false);
  const { boundActions, state } = useContext<contextType>(Context);
  const router = useRouter();
  const pathName = usePathname();
  const { updateUserData, toggleSideBar, signOut } = boundActions;

  // useEffect(() => {
  //   updateUserData({ router, pathName });
  // }, []);

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


  // const handleSignout = () => {
  //   try {
  //     setIsMenuDropOpen(false);
  //     signOut({ router, userToken: state?.userToken, setError, setSuccess });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const menuOpen = () => {
  //   toggleSideBar({ value: false })
  // };

  return (
    <>
      <header className="w-full z-50 sticky top-0 ">
        <nav className="border-gray-200 w-full bg-[#279eff]">
          <div className=" flex flex-wrap items-center justify-between w-full ">
            <div className="flex p-1">
              <p className="mt-2 ms-3 text-xl font-bold text-white">CONVO</p>
              <a
                className=" flex items-center space-x-3 rtl:space-x-reverse"
              >
                <div className="h-[3rem] w-[4rem] right-3">
                </div>
                <button
                  // onClick={menuOpen}
                  data-collapse-toggle="navbar-user"
                  type="button"
                  className=" inline-flex items-center p-2 w-10 h-10 mr-2 justify-center text-sm text-blue-color rounded-lg  "
                  aria-controls="navbar-user"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="text-white cursor-pointer" fontSize="large"
                  // onClick={() => {
                  //   setIsSideBarNavOpen(!isSideBarNavOpen)
                  // }}
                  />
                </button>
              </a>
            </div>

            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative h-[10%] me-3">
              <button
                onClick={() => {
                  setIsMenuDropOpen(!isMenuDropOpen);
                }}

                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 "
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                {/* <AccountCircleOutlined/> */}
                <img
                  className="rounded-full h-10 w-10 bg-white cursor-pointer"
                  src="/user.png"
                  alt="user photo"
                />

              </button>
              {/* <!-- Dropdown menu --> */}
              {isMenuDropOpen ? (
                <ClickAwayListener onClickAway={() => { setIsMenuDropOpen(false) }}>
                  <div
                    onBlur={() => { setIsMenuDropOpen(false) }}
                    tabIndex={-1}
                    className="z-50 absolute top-7 right-2 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                    id="user-dropdown"
                  >
                    <div className="px-4 py-3">
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          // router.push("/account");
                          setIsMenuDropOpen(false);
                        }}>
                        <span className="block text-sm text-gray-900 ">
                          {state?.userData?.name}
                          {/* John Brown */}
                        </span>
                        <span className="block text-sm  text-gray-500 truncate ">
                          {state?.userData?.email}
                          {/* john@gmail.com */}
                        </span>
                      </button>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      <li className="cursor-pointer" >
                        <span
                          // onClick={handleSignout}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"
                        >
                          Sign out
                        </span>
                      </li>
                    </ul>
                  </div></ClickAwayListener>
              ) : (
                ""
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
