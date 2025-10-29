"use client"
import { AccountCircle, ArrowDropDown, ArrowDropUp, Cancel, Edit, MoreHoriz, PrivacyTipRounded, ReplayCircleFilled, VerifiedUser, Visibility } from '@mui/icons-material';
import { ClickAwayListener, Pagination, TablePagination } from '@mui/material';
import { DateTime } from 'luxon';
import React, { useState } from 'react'
import NoData from './NoData';

const UserTable = (
    {
        userData,
        userDataCount,
        loading,
        rowsPerPage,
        setRowsPerPage,
        newPage,
        onChangePage,
        handleChangeRowsPerPage,
        handleChangePage,
        // openModal,
        // setOpenModal,
        setSuccess,
        setError,
        getAllUsers,
        setSearchCount,
        setSearchData,
        filter,
        filterOpen,
        setFilter,
        setFilterOpen,
        searchData,
        searchQuery,
        searchCount
    }
        :
        {
            userData: any,
            userDataCount: any,
            loading: any,
            rowsPerPage: any,
            setRowsPerPage: any,
            newPage: any,
            onChangePage: any,
            handleChangeRowsPerPage: any,
            handleChangePage: any,
            // openModal: any,
            // setOpenModal: any,
            setSuccess: any,
            setError: any,
            getAllUsers: any,
            setSearchCount: any,
            setSearchData: any,
            filter: any,
            filterOpen: any,
            setFilter: any,
            setFilterOpen: any,
            searchData: any,
            searchQuery: any,
            searchCount: any
        }) => {
    const [option, setOption] = useState<number>();
    const totalPages = Math.ceil(((searchQuery || filter) ? searchCount : userDataCount) / rowsPerPage);
    return (
        <div>
            <div className=" relative  shadow-md sm:rounded-lg p-2 h-fit w-full overflow-x-scroll overflow-hidden flex flex-grow">
                <table className="text-sm text-left rtl:text-right text-gray-500 w-full z-0">
                    <thead className="text-xs text-gray-700 uppercase bg-table-header ">
                        <tr className="align-top">
                            <th scope="col" className="px-8 py-3">
                                #
                            </th>

                            <th scope="col" className="px-8 py-3">
                                Action
                            </th>
                            <th scope="col" className="px-8 py-3 cursor-pointer "
                                onClick={() => {
                                    // setNewPage(1);
                                    // setOrder((prev: any) => {
                                    //   if (prev.col == "status") {
                                    //     return { col: "status", order: prev.order < 0 ? 1 : -1 }
                                    //   } else {
                                    //     return { col: "status", order: 1 }
                                    //   }
                                    // });
                                }}>
                                <div className="inline-flex items-center">
                                    <span className="" >Status</span>
                                    <span className="ml-1 my-auto" >
                                        {/* {
                    (order?.col == "status" && order?.order == -1) ?
                      <ArrowDropUp sx={{ color: "#16a34a" }} /> :
                      (order?.col == "status" && order.order == 1) ?
                        <ArrowDropDown sx={{ color: "#16a34a" }} />
                        : <ArrowDropDown sx={{ color: "#64748b" }} />} */}
                                    </span>
                                </div>
                            </th>
                            <th scope="col" className="px-8 py-3">
                                Photo
                            </th>
                            <th scope="col" className="px-8 py-3 cursor-pointer "
                                onClick={() => {
                                    // setNewPage(1);
                                    // setOrder((prev: any) => {
                                    //   if (prev.col == "name") {
                                    //     return { col: "name", order: prev.order < 0 ? 1 : -1 }
                                    //   } else {
                                    //     return { col: "name", order: 1 }
                                    //   }
                                    // });
                                }}>
                                <div className="inline-flex items-center">
                                    <span className="" >Name</span>
                                    <span className="ml-1 my-auto" >
                                        {/* {
                    (order?.col == "name" && order?.order == -1) ?
                      <ArrowDropUp sx={{ color: "#16a34a" }} /> :
                      (order?.col == "name" && order.order == 1) ?
                        <ArrowDropDown sx={{ color: "#16a34a" }} />
                        : <ArrowDropDown sx={{ color: "#64748b" }} />} */}
                                    </span>
                                </div>
                            </th>
                            {/* <th scope="col" className="px-8 py-3">
                                Address
                            </th> */}
                            <th scope="col" className="px-20 py-3 cursor-pointer "
                                onClick={() => {
                                    // setNewPage(1);
                                    // setOrder((prev: any) => {
                                    //   if (prev.col == "email") {
                                    //     return { col: "email", order: prev.order < 0 ? 1 : -1 }
                                    //   } else {
                                    //     return { col: "email", order: 1 }
                                    //   }
                                    // });
                                }}>
                                <div className="inline-flex items-center">
                                    <span className="" >Email</span>
                                    <span className="ml-1 my-auto" >
                                        {/* {
                    (order?.col == "email" && order?.order == -1) ?
                      <ArrowDropUp sx={{ color: "#16a34a" }} /> :
                      (order?.col == "email" && order.order == 1) ?
                        <ArrowDropDown sx={{ color: "#16a34a" }} />
                        : <ArrowDropDown sx={{ color: "#64748b" }} />} */}
                                    </span>
                                </div>
                            </th>
                            {/* <th scope="col" className="px-6 py-3">
                Login Type
              </th> */}
                            <th scope="col" className="px-8 py-3 cursor-pointer "
                                onClick={() => {
                                    // setNewPage(1);
                                    // setOrder((prev: any) => {
                                    //   if (prev.col == "isLoggedIn") {
                                    //     return { col: "isLoggedIn", order: prev.order < 0 ? 1 : -1 }
                                    //   } else {
                                    //     return { col: "isLoggedIn", order: 1 }
                                    //   }
                                    // });
                                }}>
                                <div className="text-center">
                                    <span className="" >Is Logged In</span>
                                    <span className="ml-1 my-auto" >
                                        {/* {
                    (order?.col == "isLoggedIn" && order?.order == -1) ?
                      <ArrowDropUp sx={{ color: "#16a34a" }} /> :
                      (order?.col == "isLoggedIn" && order.order == 1) ?
                        <ArrowDropDown sx={{ color: "#16a34a" }} />
                        : <ArrowDropDown sx={{ color: "#64748b" }} />} */}
                                    </span>
                                </div>
                            </th>
                            <th scope="col" className="px-8 py-3 cursor-pointer "
                                onClick={() => {
                                    // setNewPage(1);
                                    // setOrder((prev: any) => {
                                    //   if (prev.col == "email_verified") {
                                    //     return { col: "email_verified", order: prev.order < 0 ? 1 : -1 }
                                    //   } else {
                                    //     return { col: "email_verified", order: 1 }
                                    //   }
                                    // });
                                }}>
                                <div className="text-center">
                                    <span className="" >Email Verified</span>
                                    <span className="ml-1 my-auto" >
                                        {/* {
                    (order?.col == "email_verified" && order?.order == -1) ?
                      <ArrowDropUp sx={{ color: "#16a34a" }} /> :
                      (order?.col == "email_verified" && order.order == 1) ?
                        <ArrowDropDown sx={{ color: "#16a34a" }} />
                        : <ArrowDropDown sx={{ color: "#64748b" }} />} */}
                                    </span>
                                </div>
                            </th>
                            <th scope="col" className="px-8 py-3 cursor-pointer "
                                onClick={() => {
                                    // setNewPage(1);
                                    // setOrder((prev: any) => {
                                    //   if (prev.col == "email_verified") {
                                    //     return { col: "email_verified", order: prev.order < 0 ? 1 : -1 }
                                    //   } else {
                                    //     return { col: "email_verified", order: 1 }
                                    //   }
                                    // });
                                }}>
                                <div className="text-center">
                                    <span className="" >Timezone</span>
                                    <span className="ml-1 my-auto" >
                                        {/* {
                    (order?.col == "time_zone" && order?.order == -1) ?
                      <ArrowDropUp sx={{ color: "#16a34a" }} /> :
                      (order?.col == "time_zone" && order.order == 1) ?
                        <ArrowDropDown sx={{ color: "#16a34a" }} />
                        : <ArrowDropDown sx={{ color: "#64748b" }} />} */}
                                    </span>
                                </div>
                            </th>
                            <th scope="col" className="px-8 py-3 cursor-pointer "
                                onClick={() => {
                                    // setNewPage(1);
                                    // setOrder((prev: any) => {
                                    //   if (prev.col == "created_at") {
                                    //     return { col: "created_at", order: prev.order < 0 ? 1 : -1 }
                                    //   } else {
                                    //     return { col: "created_at", order: 1 }
                                    //   }
                                    // });
                                }}>
                                <div className="inline-flex items-center">
                                    <span className="" >Account created at</span>
                                    <span className="ml-1 my-auto" >
                                        {/* {
                    (order?.col == "created_at" && order?.order == -1) ?
                      <ArrowDropUp sx={{ color: "#16a34a" }} /> :
                      (order?.col == "created_at" && order.order == 1) ?
                        <ArrowDropDown sx={{ color: "#16a34a" }} />
                        : <ArrowDropDown sx={{ color: "#64748b" }} />} */}
                                    </span>
                                </div>
                            </th>
                            <th scope="col" className="px-8 py-3 cursor-pointer "
                                onClick={() => {
                                    // setNewPage(1);
                                    // setOrder((prev: any) => {
                                    //   if (prev.col == "updated_at") {
                                    //     return { col: "updated_at", order: prev.order < 0 ? 1 : -1 }
                                    //   } else {
                                    //     return { col: "updated_at", order: 1 }
                                    //   }
                                    // });
                                }}>
                                <div className="inline-flex items-center">
                                    <span className="" >Account updated at</span>
                                    <span className="ml-1 my-auto" >
                                        {/* {
                    (order?.col == "updated_at" && order?.order == -1) ?
                      <ArrowDropUp sx={{ color: "#16a34a" }} /> :
                      (order?.col == "updated_at" && order.order == 1) ?
                        <ArrowDropDown sx={{ color: "#16a34a" }} />
                        : <ArrowDropDown sx={{ color: "#64748b" }} />} */}
                                    </span>
                                </div>
                            </th>
                            <th scope="col" className="px-8 py-3 cursor-pointer "
                                onClick={() => {
                                    // setNewPage(1);
                                    // setOrder((prev: any) => {
                                    //   if (prev.col == "updated_by") {
                                    //     return { col: "updated_by", order: prev.order < 0 ? 1 : -1 }
                                    //   } else {
                                    //     return { col: "updated_by", order: 1 }
                                    //   }
                                    // });
                                }}>
                                <div className="inline-flex items-center">
                                    <span className="" >Account updated by</span>
                                    <span className="ml-1 my-auto" >
                                        {/* {
                    (order?.col == "updated_by" && order?.order == -1) ?
                      <ArrowDropUp sx={{ color: "#16a34a" }} /> :
                      (order?.col == "updated_by" && order.order == 1) ?
                        <ArrowDropDown sx={{ color: "#16a34a" }} />
                        : <ArrowDropDown sx={{ color: "#64748b" }} />} */}
                                    </span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    {loading ?
                        (
                            <tbody>
                                <tr>
                                    <td colSpan={12}>
                                        <div className='w-full flex justify-center p-8' role="status">
                                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#ff00ff]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        )
                        : (
                            <tbody>
                                <tr>

                                    <td colSpan={10}>
                                        {
                                            userData.length == 0 ? <>
                                                <NoData />
                                            </> : <>
                                                {
                                                    filter || searchQuery ? <>
                                                        {
                                                            searchData.length == 0 ? <>
                                                                <NoData />
                                                            </> : <></>
                                                        }
                                                    </> : <>
                                                    </>
                                                }
                                            </>
                                        }
                                    </td>
                                </tr>
                                {/* <tr>
                                    <td colSpan={10}>
                                        {search ? (
                                            searchData.length == 0 ? <>
                                                <p className="md:text-center text-xl">No User found</p>
                                            </>
                                                : (
                                                    ""
                                                )
                                        ) : (
                                            ""
                                        )}

                                        {!search ? (
                                            state?.userTable?.length == 0 ?
                                                <>
                                                    <p className="md:text-center text-xl">No User found</p>
                                                </>
                                                : (
                                                    ""
                                                )
                                        ) : (
                                            <>

                                            </>
                                        )}
                                    </td>
                                </tr> */}

                                {((searchQuery || filter) ? searchData : userData).map((data: any, index: any) => {
                                    // {
                                    // ((searchQuery || filter) ? searchData ? userData).map((data: any, index: any) => {
                                    // {(state?.userTable? state?.userTable:[]).map((data, index) => {
                                    return (
                                        <tr key={index} className="bg-white border-b border-[#f1f1f1] hover:bg-gray-50 odd:bg-white even:bg-gray-50 align-top">
                                            <td
                                                scope="row"
                                                className="px-8 py-3 font-semibold text-gray-900 whitespace-nowrap"
                                            >
                                                {(newPage - 1) * rowsPerPage + (index + 1)}
                                            </td>
                                            <td className="px-8 py-3 flex items-center relative">
                                                <button
                                                    onClick={() => {
                                                        if (option == index + 1) {
                                                            // setOption(0);
                                                        } else {
                                                            // setOption(index + 1);
                                                        }
                                                    }}
                                                    className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none "
                                                    type="button"
                                                >
                                                    <MoreHoriz className="text-orange-500 z-10" />
                                                </button>
                                                {option == index + 1 ? (
                                                    <ClickAwayListener
                                                        onClickAway={() => {
                                                            // setOption(0);
                                                        }}
                                                    >
                                                        <div className={`${(userData.length - 1) == index ? "left-10 bottom-8" : "left-7 top-10"} absolute border border-gray-100 w-32 bg-white rounded divide-y divide-gray-100 shadow}`} style={{ zIndex: 100 }}>
                                                            <ul
                                                                className=" text-sm text-gray-700 cursor-pointer"
                                                                aria-labelledby="apple-imac-20-dropdown-button"
                                                            >
                                                                <li
                                                                    onClick={() => {
                                                                        // setOption(0);
                                                                        // setOpenView(true);
                                                                        // setProfileData(data);
                                                                    }}
                                                                >
                                                                    <span className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">

                                                                        <Visibility fontSize="small" htmlColor="green" /> View

                                                                    </span>
                                                                </li>
                                                                {
                                                                    (data.status == -1 || data?.status == 19) ? <>
                                                                    </> : <>
                                                                        <li
                                                                            onClick={() => {
                                                                                // setOption(0);
                                                                                // setUserOpenModal(true);
                                                                                // singleUserData(data);
                                                                            }}
                                                                        >
                                                                            <span className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">

                                                                                <Edit fontSize="small" htmlColor="orange" /> Edit

                                                                            </span>
                                                                        </li>
                                                                    </>
                                                                }
                                                                {data.status == -1 ? "" : data?.status == 19 ? (
                                                                    <li
                                                                        onClick={() => {
                                                                            // UnblockUserAlert(data?._id);
                                                                            // setOption(0);
                                                                        }}
                                                                    // onClick={() => {router.push(`/edituser?userId=${data._id}`)}} */}
                                                                    >
                                                                        <span className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                                                            <ReplayCircleFilled className="me-1" fontSize="small" sx={{ color: "green" }} />
                                                                            Unblock
                                                                        </span>
                                                                    </li>
                                                                ) : (
                                                                    <li
                                                                        onClick={() => {
                                                                            // BlockUserAlert(data?._id)
                                                                            // setOption(0);
                                                                        }}
                                                                    //  onClick={() => {router.push(`/edituser?userId=${data._id}`)}} 
                                                                    >
                                                                        <span className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                                                            <Cancel className="me-1" fontSize="small" sx={{ color: "red" }} />
                                                                            Block
                                                                        </span>
                                                                    </li>
                                                                )}

                                                                {/* {
                                  (data.status == -1 || data?.status == 19) ? <>
                                  </> : <>
                                    <li
                                      onClick={() => {
                                        setOption(0);
                                      }}
                                    >
                                      <a className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">
                                        <AccessTime fontSize="small" sx={{ color: "#4b8fe9" }} /> History
                                      </a>
                                    </li>
                                  </>
                                } */}

                                                            </ul>
                                                        </div>
                                                    </ClickAwayListener>
                                                ) : (
                                                    ""
                                                )}
                                            </td>
                                            <td className="px-8 py-3">
                                                {data.status == 1 ? (
                                                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                                                        Active
                                                    </span>
                                                ) : (
                                                    ""
                                                )}

                                                {data.status == -1 ? (
                                                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                                                        Deleted
                                                    </span>
                                                ) : (
                                                    ""
                                                )}

                                                {data.status == 19 ? (
                                                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                                                        Blocked
                                                    </span>
                                                ) : (
                                                    ""
                                                )}
                                            </td>
                                            <td className="px-8 py-3 font-medium text-gray-900">
                                                {data.photo ?
                                                    (
                                                        <img
                                                            // onClick={() => {
                                                            //   router.push(
                                                            //     `/singleuserprofile?userId=${data._id}`
                                                            //   );
                                                            // }}
                                                            src={data.photo}
                                                            height={10}
                                                            width={10}
                                                            className="mr-2 cursor-pointer h-10 w-10 rounded-full"
                                                        />
                                                    ) : (
                                                        <AccountCircle
                                                            // onClick={() => {
                                                            //   router.push(
                                                            //     `/singleuserprofile?userId=${data._id}`
                                                            //   );
                                                            // }}
                                                            className="mr-2 cursor-pointer h-10 w-10 rounded-full" />
                                                    )
                                                }
                                            </td>
                                            <th
                                                scope="row"
                                                className="px-8 py-3 font-medium text-gray-900 whitespace-nowrap"
                                            >
                                                <div className="flex my-auto">
                                                    <span
                                                        className="self-center cursor-pointer text-blue-700 text-wrap"
                                                        onClick={() => {
                                                            // router.push(
                                                            //   `/single-user-profile?userId=${data?._id}`
                                                            // );
                                                        }}
                                                    >

                                                        {data?.name ? data?.name : "--"}
                                                    </span>
                                                </div>
                                            </th>
                                            {/* <td className="px-8 py-3 font-medium text-gray-900 text-center">
                                                {data.address ? data.address : "--"}
                                            </td> */}
                                            <td className="px-8 py-3 font-medium text-gray-900">
                                                {data.email ? data.email : "--"}
                                            </td>
                                            <td className="px-8 py-3 text-black text-center">
                                                {data?.isLoggedIn ?
                                                    <p className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2 py-1 rounded-full ">
                                                        Logged in
                                                    </p> : <p className="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-4 py-1 rounded-full ">
                                                        Logged out
                                                    </p>}

                                            </td>
                                            <td className="px-8 py-3 text-center">
                                                {data?.email_verified ? (
                                                    <VerifiedUser className="text-green-500" />
                                                ) : (
                                                    <PrivacyTipRounded className="text-red-500" />
                                                )}
                                            </td>
                                            <td className="px-8 py-3 text-black text-center">
                                                {data?.time_zone ? data?.time_zone : "--"}
                                            </td>
                                            <td className="px-2 py-4  text-center w-[12rem]">
                                                <p className="bg-green-100 text-green-800 text-xs font-medium me-2  py-0.5 rounded-full ">
                                                    {DateTime.fromISO(data.created_at)
                                                        .toLocal()
                                                        .toFormat("LLL dd, yyyy hh:mm:a")}
                                                </p>
                                            </td>
                                            <td className="px-2 py-4 w-[12rem]">
                                                <p className="bg-red-100 text-red-800 text-xs font-medium me-2  py-0.5  rounded-full mb-2 text-center">
                                                    {DateTime.fromISO(data.updated_at)
                                                        .toLocal()
                                                        .toFormat("LLL dd, yyyy hh:mm:a")}
                                                </p>

                                            </td>
                                            <td className="px-8 py-3">
                                                <span className="bg-orange-100 text-center text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                                                    {data?.updated_by?.name ? data?.updated_by?.name : "--"}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        )}
                </table>

            </div>



            <div className="pb-4 bg-white flex  justify-between mt-3">
                {loading ? (
                    // <Skeleton
                    //     variant="text"
                    //     sx={{ fontSize: "1rem", width: "100px", marginLeft: "15px" }}
                    // />
                    ""
                ) :
                    (
                        <div className="flex justify-between w-full">
                            <div className=" mt-4">
                                <span className="text-gray-400 ">Total Users</span>
                                { }
                                <span className="text-gray-400"></span>{" "}
                                {(searchQuery || filter) ? searchCount : userDataCount}
                            </div>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={(searchQuery || filter) ? searchCount : userDataCount}

                                rowsPerPage={rowsPerPage}
                                page={newPage - 1}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                backIconButtonProps={{ style: { display: 'none' } }}
                                nextIconButtonProps={{ style: { display: 'none' } }}
                                showFirstButton={false}
                                showLastButton={false}
                            />
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                                <Pagination
                                    count={totalPages}
                                    page={newPage}
                                    onChange={onChangePage}
                                    variant="outlined"
                                    shape="rounded"
                                    siblingCount={1}
                                />
                            </div>
                        </div>


                    )
                }
            </div>
        </div>
    )
}

export default UserTable;