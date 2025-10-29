"use client"
import UserTable from '@/components/UserTable';
// import FilterUsers from '@/components/FilterUsers';
import { Context } from '@/contextApi/AuthContext';
import { contextType } from '@/contextApi/CreateDataContext';
import { FilterAlt, PeopleAlt, Replay, Search, SimCardDownloadOutlined } from '@mui/icons-material';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { useContext, useEffect, useState } from "react";
const Users = () => {
    const FilterUserTypeValue = {
        user_name: "",
        user_email: "",
        address: "",
        status: "",
        email_verified: "",
        isLoggedIn: "",
        timezone: "",
        created_at: "",
        updated_at: "",
    }
    const [userData, setUserData] = useState([]);
    const [userDataCount, setUserDataCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [newPage, setNewPage] = useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [filterOpen, setFilterOpen] = useState<boolean>(false)
    const [filter, setFilter] = useState<boolean>(false);
    const [filterData, setFilterData] = useState(FilterUserTypeValue);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchCount, setSearchCount] = useState<number>(0);
    const [searchData, setSearchData] = useState([]);
    const [search, setSearch] = useState<boolean>(false);
    const [order, setOrder] = useState<{ col: string, order: number }>({ col: "created_at", order: -1 });
    const { state, boundActions } = useContext<contextType>(Context);
    const { updateUserData } = boundActions;
    const pathName = usePathname();
    const router = useRouter();

    const toggleModal = () => {
        setFilterOpen(true);
        // setSearchQuery("")
        // setFilterData(FilterUserTypeValue)
    };

    const handleReload = () => {
        setNewPage(1);
        getAllUsers();
        setSearchData([])
        setSearch(false);
        setFilter(false)
        setSearchQuery("")
        setFilterData(FilterUserTypeValue)
    }

    useEffect(() => {
        if (!state?.userData?.id) {
            updateUserData({ router, pathName });
        }
    }, []);

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

    }, [success, error]);

    useEffect(() => {
        if (searchQuery) {
            setSearch(true)
            setFilter(false)
            searchUser();
        }
        else {
            setSearch(false);
            setSearchCount(0);
            getAllUsers();
        }
    }, [searchQuery, newPage, rowsPerPage, order]);

    const searchUser = async () => {
        setSearch(true);
        setLoading(true);
        try {
            if (searchQuery) {
                let res = await axios.post(
                    process.env.apiUrl + `/api/search-users/${newPage}`,
                    {
                        searchTerm: searchQuery, limit: rowsPerPage, order
                    }, { headers: { Authorization: `Bearer ${state.userToken}` } });
                console.log(res, "search result")
                setSearchData(res?.data?.result);
                setSearchCount(res?.data?.resultCount)
            }

            if (searchQuery == "") {
                setSearch(false);
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllUsers();
    }, [state?.userData?.token, newPage, rowsPerPage])

    const getAllUsers = async () => {
        try {
            setLoading(true);
            const res = await axios.get(process.env.apiUrl + `/api/users/list`, { headers: { Authorization: `Bearer ${state?.userData?.token}` } });
            setUserData(res?.data?.result);
            setUserDataCount(res?.data?.total);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
        setNewPage(newPage);
        // setSelectedCheckboxes([])
        // setSelectAll(false)
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setNewPage(1);
    };

    const onChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        setNewPage(newPage);
        // setSelectedCheckboxes([])
        // setSelectAll(false)
    };

    return (
        <>
            <div
                className={`${state.isSideBarNavOpen
                    ? "xs:hidden sm:hidden xl:block lg:block md:block p-2 px-5 h-[100vh] ms-[20%] w-[80%]"
                    : "xs:hidden sm:hidden xl:block lg:block md:block p-2 px-5 h-[100vh] md:ms-[3%] ms-[15%] md:w-[97%] w-[93%]"
                    }`}
            // className="xs:hidden sm:hidden xl:block lg:block md:block p-2 w-full px-5 h-[100vh] ms-[20%]"
            >
                <div
                    className={`${state.isSideBarNavOpen
                        ? "w-full"
                        : "w-full"
                        } inline-flex border border-gray-300 px-2.5 py-2 rounded-lg mb-5`}
                >
                    <PeopleAlt className="me-1" sx={{ fontSize: "1.8rem" }} />
                    <h1 className="text-2xl font-medium my-auto">
                        Users
                    </h1>
                </div>
                <div className="pb-4 bg-white flex justify-between">
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <div className="flex items-center">
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <Search className="w-4 h-4 text-gray-500  " />
                            </div>
                            <input
                                onChange={(e) => {
                                    // setSearchQuery(e.target.value);
                                    // setNewPage(1)
                                    // setFilter(false)
                                    // setFilterData(FilterUserTypeValue)
                                }}
                                value={searchQuery}
                                type="text"
                                id="table-search"
                                className="block flex-1 py-1.5 pl-10 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:outline-none md:w-[24rem] w-[14rem] border border-gray-300 rounded-lg px-2.5"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-2 lg:mt-0 lg:ms-0 xs:mt-4 xs:ms-4">
                        {/* <Tooltip title="Filter" placement="top-start"> */}
                        {/* <button
              onClick={() => { toggleModal() }}
              data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-black bg-white border-2 border-[#d9d9d9] border-blue-color font-medium rounded-lg text-sm px-2 py-0.5 text-center cursor-pointer" type="button">
              <FilterAlt sx={{ color: "#4289e8", width: "1.2rem", height: "1.2rem" }} /> Filter By
            </button> */}

                        {/* <span
              // onClick={() => { handleExcelModalOpen() }}
              className=" text-sm rounded-full cursor-pointer">
              <SimCardDownloadOutlined sx={{ color: "#008000", width: "1.5rem", height: "1.5rem" }} /> Export
            </span> */}

                        <span
                            onClick={handleReload}
                            className=" rounded-full cursor-pointer">
                            < Replay sx={{ color: "#4289e8" }} />
                        </span>

                    </div>
                </div>
                <div>
                    {/* <p className='text-3xl text-center font-bold mt-[25%]'>This page is under construction...</p> */}

                    {/* <FilterUsers
            setSearchQuery={setSearchQuery}
            setSearchCount={setSearchCount}
            setSearchData={setSearchData}
            filter={filter}
            filterOpen={filterOpen}
            setFilter={setFilter}
            setFilterOpen={setFilterOpen}
            filterData={filterData}
            setFilterData={setFilterData}
            newPage={newPage}
            order={order}
            rowsPerPage={rowsPerPage}
            setNewPage={setNewPage}
          /> */}


                    <UserTable
                        userData={userData}
                        userDataCount={userDataCount}
                        loading={loading}
                        rowsPerPage={rowsPerPage}
                        setRowsPerPage={setRowsPerPage}
                        newPage={newPage}
                        onChangePage={onChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                        handleChangePage={handleChangePage}
                        // openModal={openModal}
                        // setOpenModal={setOpenModal}
                        setSuccess={setSuccess}
                        setError={setError}
                        getAllUsers={getAllUsers}
                        setSearchCount={setSearchCount}
                        setSearchData={setSearchData}
                        filter={filter}
                        filterOpen={filterOpen}
                        setFilter={setFilter}
                        setFilterOpen={setFilterOpen}
                        searchData={searchData}
                        searchQuery={searchQuery}
                        searchCount={searchCount}
                    />
                </div>
            </div>
        </>
    )
}

export default Users;