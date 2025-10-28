"use client";
import { AccountTree, Add, AddCard, AddLinkOutlined, Category, Chat, Dashboard, Feed, KeyboardArrowDown, LibraryBooks, Menu, Message, PeopleAlt, QueryBuilder, QuestionAnswer, Receipt, ReceiptLong, Remove, Settings, SmartToy, Toc } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
// import { Context } from "@/contextApi/AuthContext";   // ------------------>>>>   Uncomment
// import { contextType } from "@/contextApi/CreateDataContext"; // ------------------>>>>   Uncomment
import { usePathname, useRouter } from "next/navigation";

const Drawer = () => {
    const [sideSubMenuDropDown, setSideSubMenuDropDown] =
        useState<boolean>(false);
    const [sideSubMasterDropDown, setSideSubMasterDropDown] =
        useState<boolean>(false);
    const [sideSubPaymentDropDown, setSideSubPaymentDropDown] =
        useState<boolean>(false);
    // const { state, boundActions } = useContext<contextType>(Context);    // ------------------>>>>   Uncomment
    // const { toggleSideBar } = boundActions;   // ------------------>>>>   Uncomment
    const pathName = usePathname();
    const router = useRouter();
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [isSideBarNavOpen, setIsSideBarNavOpen] = useState(true);

    useEffect(() => {
        setWindowWidth(window?.innerWidth)
    }, [])

    useEffect(() => {
        console.log("change in window width", windowWidth)
        // Toggle sidebar based on window width change
        // handleMobileViewSideBar();
    }, [windowWidth]); // This effect runs whenever the windowWidth changes

    // ------------------>>>>   Uncomment full below
    // const handleMobileViewSideBar = () => {
    //     if (windowWidth <= 1024) {
    //         if (state?.isSideBarNavOpen) {
    //             toggleSideBar({ value: false });
    //         } // Close sidebar if mobile view
    //     } else {
    //         if (!state?.isSideBarNavOpen) {
    //             toggleSideBar({ value: true });
    //         } // Open sidebar for non-mobile view
    //     }
    // }

    return (
        <>
            <div
                id="sidebar-multi-level-sidebar "
                className={
                    `${
                    // state.isSideBarNavOpen
                    isSideBarNavOpen
                        ? "xl:w-1/5 lg:w-1/5 md:w-1/5 sm:w-1/5  xs:w-1/5"
                        : "lg:w-[3%] xl:w-[3%] xs:hidden sm:hidden xl:block lg:block md:block"
                    } 
                    bg-[#279eff] flex-5 transition duration-300 ease-in-out flex flex-col h-screen
                    `}
                aria-label="Sidebar"
                style={{ position: "fixed", zIndex: 999 }}
            >
                {/* <div className="flex justify-between mx-5">
                    <div className={`${isSideBarNavOpen ? "block" : "hidden"} text-white text-3xl font-bold`}>
                        E-Comm
                    </div>
                    <Menu className="text-white cursor-pointer" fontSize="large" onClick={() => {
                        setIsSideBarNavOpen(!isSideBarNavOpen)
                    }} />
                </div> */}
                {/* <div className="fixed"> */}


                <div className="mt-10">
                    <ul className="font-medium">
                        <li>
                            <button
                                onClick={() => {
                                    // handleMobileViewSideBar();
                                    router.push("/dashboard");
                                }}
                                className={`${pathName === "/dashboard" ? "bg-black text-white" : "text-white"} cursor-pointer py-1 ms-[3.5%] w-[93%] rounded-xl`}
                            >
                                <div className="flex items-center p-3 rounded-lg group">
                                    <Dashboard className={`${pathName === "/dashboard" ? "text-[]" : ""}`} />
                                    <span
                                        className={
                                            `${
                                            // state.isSideBarNavOpen
                                            isSideBarNavOpen
                                                ? "block" : "hidden"} 
                                            ${pathName === "/dashboard" ? "text-[]" : ""} ms-3`}>Dashboard</span>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    // handleMobileViewSideBar();
                                    router.push("/users");
                                }}
                                className={`${pathName === "/users" ? "bg-black text-white" : "text-white"} cursor-pointer py-1 ms-[3.5%] w-[93%] rounded-xl`}
                            >
                                <div className="flex items-center p-3 rounded-lg  group">
                                    <PeopleAlt className={`${pathName === "/users" ? "text-[]" : ""}`} />
                                    <span
                                        className={
                                            `${
                                            // state.isSideBarNavOpen
                                            isSideBarNavOpen
                                                ? "block" : "hidden"} ${pathName === "/users" ? "text-[]" : ""} ms-3`}>Users</span>
                                </div>
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default Drawer;