"use client";
import { DateTime } from "luxon";
// import { AuthRoutes } from "@/route_config/config";
import createDataContext from "./CreateDataContext";
import axios from "axios";
// import { error } from "console";

// axios.defaults.withCredentials = true;
// Reducers
export type userTableType1 = {
  _id: string;
  name: string;
  email: string;
  password: string;
  email_verified: boolean;
  email_verified_at: string;
  status: number;
  isSignIn: boolean;
  created_at: string;
  updated_at: string;
  updated_by: {
    name: string,
  },
  location: string;
  timezone: string;
  photo: string;
  signup_method: number;
  facebook_access_token: string;
  google_id_token: string;
  google_sub: string;


};
export type userTableType = {
  created_at: string,
  address: string,
  delete_request_at: string,
  email: string,
  email_verified: boolean,
  isLoggedIn: boolean,
  name: string,
  password: string,
  status: number,
  updated_at: string,
  user_type_id: number,
  time_zone: string,
  updated_by: { name: string }
  _id: string,
  photo: string,


};
export type tourTableType = {
  tourData: {
    _id: string;
    categoryname: string;
    username: string;
    created_at: string;
    description: string;
    location_coords: { type: string; coordinates: number[] };
    location_name: string;
    name: string;
    status: number;
    thumb: string;
    updated_at: string;
    user_id: string;
    tour_explore_status_type_id: number;
    isTourBlock: boolean,
    updated_by: {
      name: string
    }
  };
  sceneData: {
    created_at: string;
    max_zoom: number;
    min_zoom: number;
    originalscene: string;
    priority: number;
    status: number;
    thumbscene: string;
    title: string;
    tour: string;
    updated_at: string;
    _id: string;
  };
};
export type stateType = {
  userData: { id: number; email: string; name: string, token: string };
  getUserDetails: {};
  userToken: string | null;
  isLoading: boolean;
  isSignout: boolean;
  ads: [];
  profiles: [];
  allCategory: [];
  isSignIn: boolean;
  adBookmarks: [];
  adsCount: number;
  myAds: [];
  otherAds: [];
  myAdsCount: number;
  otherAdsCount: number;
  ongoing: [];
  ongoingCount: number;
  accepted: [];
  acceptedCount: number;
  rejected: [];
  rejectedCount: number;
  bestMatches: [];
  bestMatchesCount: number;
  businessBookmarks: [];
  notifications: [];
  badgeCount: number;
  notif_Count: number;
  socket: null;
  chats: [];
  all_nseen: {};
  message_notification: number;
  total_chats: number;
  block_list: [];
  isSubscribed: boolean;
  plan_id: number;
  subscription_start: string;
  subscription_end: string;
  cancel_request: boolean;
  subscription_method: null;
  next_billing_time: null;
  subscription_id: null;
  isTrial: null;
  trial_start: null;
  trial_end: null;
  all_reviews: [];
  all_reviews_count: number;
  ad_bookmark_count: number;
  business_bm_count: number;
  paypal_payment: boolean;
  notifCurrentDate: string;
  allMeets: [];
  allMeetCount: number;
  allMeetInvites: [];
  allMeetInvitesCount: number;
  friendList: [];
  friend_count: number;
  meetTravelStart: boolean;
  destinationCord: null;
  meetName: string;
  meetId: null;
  LWPRef: null;
  currentLN: string;
  isMyMeet: boolean;
  meetDeleteCount: number;
  updateMyMeet: boolean;
  updateMeetInvite: boolean;
  backgroundMeetData: {};
  allFriendCount: number;
  isSideBarNavOpen: boolean;
  userTable: any;
  userCount: number;
  tourTable: tourTableType[];
  tourCount: number;
  allIds: string[]
  currentQID: string
};
type actionType = {
  type: string;
  payload: any;
  [key: string]: string | any;
};

export type authReducerType = (
  state: stateType,
  action: actionType
) => stateType;
export type actionFunctionType = (
  dispatch: React.Dispatch<actionType>
) => (fn: any) => Promise<void>;
export type boundAction = (fn: any) => Promise<void>;
export type contextActionType = {
  signIn: actionFunctionType;
  signOut: actionFunctionType;
  updateUserData: actionFunctionType;
  // createTour: actionFunctionType;
  // updateTour: actionFunctionType;
  // createLinkage: actionFunctionType;
  // updateLinkage: actionFunctionType;
  // removeLinkage: actionFunctionType;
  // createInfospot: actionFunctionType;
  // removeInfospot: actionFunctionType;
  // updateInfospot: actionFunctionType;
  // createPanoImage: actionFunctionType;
  // updatePanoImage: actionFunctionType;
  // updateCameraConfig: actionFunctionType;
  // updateSceneOrder: actionFunctionType;
  updateUserProfile: actionFunctionType;
  fetchUpdatedProfileData: actionFunctionType;
  setSignInStatus: actionFunctionType;
  setLoadingStatus: actionFunctionType;
  getNotifications: actionFunctionType;
  setNotificationSeen: actionFunctionType;
  setNotificationVisited: actionFunctionType;
  getChats: actionFunctionType;
  // modifyNotification:actionFunctionType,
  getUnseenMessages: actionFunctionType;
  verifyCode: actionFunctionType;
  getMeets: actionFunctionType;
  getMeetInvites: actionFunctionType;
  getFriendList: actionFunctionType;
  onBackgroundMeet: actionFunctionType;
  setSingleMeetMessageNotSeen: actionFunctionType;
  setNotificationBadgeCount: actionFunctionType;
  toggleSideBar: actionFunctionType;
  userBlockUnblock: actionFunctionType;
  tourBlockUnblock: actionFunctionType;
  tourExploreStatusTypeIdChange: actionFunctionType;
  setIds: actionFunctionType;
  setCurrentQId: actionFunctionType;


  [key: string]: actionFunctionType;
};
export type boundActionType = {
  signIn: boundAction;
  signOut: boundAction;
  updateUserData: boundAction;
  // createTour: boundAction;
  // updateTour: boundAction;
  // createLinkage: boundAction;
  // updateLinkage: boundAction;
  // removeLinkage: boundAction;
  // createInfospot: boundAction;
  // removeInfospot: boundAction;
  // updateInfospot: boundAction;
  // createPanoImage: boundAction;
  // updateCameraConfig: boundAction;
  // updatePanoImage: boundAction;
  // updateSceneOrder: boundAction;
  updateUserProfile: boundAction;
  fetchUpdatedProfileData: boundAction;
  setSignInStatus: boundAction;
  setLoadingStatus: boundAction;
  getNotifications: boundAction;
  setNotificationSeen: boundAction;
  setNotificationVisited: boundAction;
  getChats: boundAction;
  toggleSideBar: boundAction;
  // modifyNotification:actionFunctionType,
  getUnseenMessages: boundAction;
  verifyCode: boundAction;
  getMeets: boundAction;
  getMeetInvites: boundAction;
  getFriendList: boundAction;
  onBackgroundMeet: boundAction;
  setSingleMeetMessageNotSeen: boundAction;
  setNotificationBadgeCount: boundAction;
  getUserTable: boundAction;
  userBlockUnblock: boundAction;
  tourBlockUnblock: boundAction;
  tourExploreStatusTypeIdChange: boundAction;
  getTourTable: boundAction;
  setIds: boundAction;
  setCurrentQId: boundAction;
  [key: string]: boundAction;
};
export const initialBoundActions = {
  signIn: async () => { },
  signOut: async () => { },
  updateUserData: async () => { },
  // createTour: async () => {},
  // updateTour: async () => {},
  // createLinkage: async () => {},
  // removeLinkage: async () => {},
  // updateLinkage: async () => {},
  // createInfospot: async () => {},
  // removeInfospot: async () => {},
  // updateInfospot: async () => {},
  // createPanoImage: async () => {},
  // updatePanoImage: async () => {},
  // updateCameraConfig: async () => {},
  // updateSceneOrder: async () => {},
  updateUserProfile: async () => { },
  fetchUpdatedProfileData: async () => { },
  setSignInStatus: async () => { },
  setLoadingStatus: async () => { },
  getNotifications: async () => { },
  setNotificationSeen: async () => { },
  setNotificationVisited: async () => { },
  getChats: async () => { },
  // modifyNotification:actionFunctionType,
  getUnseenMessages: async () => { },
  verifyCode: async () => { },
  getMeets: async () => { },
  getMeetInvites: async () => { },
  getFriendList: async () => { },
  onBackgroundMeet: async () => { },
  setSingleMeetMessageNotSeen: async () => { },
  setNotificationBadgeCount: async () => { },
  toggleSideBar: async () => { },
  getUserTable: async () => { },
  getTourTable: async () => { },
  userBlockUnblock: async () => { },
  tourBlockUnblock: async () => { },
  tourExploreStatusTypeIdChange: async () => { },
  setIds: async () => { },
  setCurrentQId: async () => { },
};
const AuthReducer: authReducerType = (
  state: stateType,
  action: actionType
): stateType => {
  if (action.type === "SIGN_IN") {
    return {
      ...state,
      isSignout: false,
      userToken: action.payload,
      ads: [],
      profiles: [],
      isSignIn: true,
    };
  } else if (action.type === "SIGN_OUT") {
    return {
      ...state,
      userData: { id: 0, email: "", name: "", token: '' },
      getUserDetails: [],
      isSignout: true,
      userToken: null,
      ads: [],
      profiles: [],
      allCategory: [],
      isSignIn: false,
      adBookmarks: [],
      adsCount: 0,
      myAds: [],
      otherAds: [],
      myAdsCount: 0,
      otherAdsCount: 0,
      ongoing: [],
      accepted: [],
      rejected: [],
      ongoingCount: 0,
      acceptedCount: 0,
      rejectedCount: 0,
      businessBookmarks: [],
      notifications: [],
      badgeCount: 0,
      notif_Count: 0,
      chats: [],
      all_nseen: {},
      message_notification: 0,
      total_chats: 0,
      block_list: [],
      plan_id: 0,
      isSubscribed: false,
      subscription_start: "",
      subscription_end: "",
      cancel_request: false,
      subscription_method: null,
      next_billing_time: null,
      subscription_id: null,
      isTrial: null,
      trial_start: null,
      trial_end: null,
      all_reviews: [],
      all_reviews_count: 0,
      ad_bookmark_count: 0,
      business_bm_count: 0,
      paypal_payment: false,
      notifCurrentDate: "",
      allMeets: [],
      allMeetCount: 0,
      allMeetInvites: [],
      allMeetInvitesCount: 0,
      friendList: [],
      friend_count: 0,
      meetTravelStart: false,
      destinationCord: null,
      meetName: "",
      meetId: null,
      LWPRef: null,
      currentLN: "",
      isMyMeet: false,
      meetDeleteCount: 0,
      updateMyMeet: false,
      updateMeetInvite: false,
      backgroundMeetData: {},
      allFriendCount: 0,
      isSideBarNavOpen: true,
      userTable: [],
      userCount: 0,
      tourTable: [],
      tourCount: 0,
      allIds: [],
      currentQID: ""
    };
  } else if (action.type === "USER_DATA") {
    return {
      ...state,
      userData: action.payload,
      isSignIn: true,
    };
  } else if (action.type === "UPDATE_USER_DATA") {
    return {
      ...state,
      userData: action.payload,
    };
  }
  else if (action.type === "UPDATE_TOKEN") {
    return {
      ...state,
      userToken: action.payload.token
    }
  } else if (action.type === "UPDATE_PROFILE") {
    return {
      ...state,
      getUserDetails: action.payload,
    };
  } else if (action.type === "GET_ALL_PROFILE") {
    return {
      ...state,
      profiles: action.payload,
    };
  } else if (action.type === "GET_CATEGORY") {
    return {
      ...state,
      allCategory: action.payload,
    };
  } else if (action.type === "SIGNIN_STATUS") {
    return {
      ...state,
      isSignIn: true,
      isLoading: false,
    };
  } else if (action.type === "LOADING_STATUS") {
    return {
      ...state,

      isLoading: action.payload,
    };
  } else if (action.type == "CLEAR_AD_BOOKMARK") {
    return {
      ...state,
      adBookmarks: [],
      ad_bookmark_count: 0,
    };
  } else if (action.type == "CLEAR_MY_ADS") {
    return {
      ...state,
      myAds: [],
      myAdsCount: 0,
    };
  } else if (action.type == "CLEAR_OTHER_ADS") {
    return {
      ...state,
      otherAds: [],
      otherAdsCount: 0,
    };
  } else if (action.type == "CLEAR_ADS") {
    return {
      ...state,
      ads: [],
      adsCount: 0,
    };
  } else if (action.type == "ONGOING_CLEAR") {
    return {
      ...state,
      ongoing: [],
      ongoingCount: 0,
    };
  } else if (action.type == "ACCEPTED_CLEAR") {
    return {
      ...state,
      accepted: [],
      acceptedCount: 0,
    };
  } else if (action.type == "REJECTED_CLEAR") {
    return {
      ...state,
      rejected: [],
      rejectedCount: 0,
    };
  } else if (action.type == "CLEAR_BM") {
    return {
      ...state,
      bestMatches: [],
      bestMatchesCount: 0,
    };
  } else if (action.type == "CLEAR_BUSINESS_BM") {
    return {
      ...state,
      businessBookmarks: [],
      business_bm_count: 0,
    };
  } else if (action.type == "BADGE") {
    return {
      ...state,
      badgeCount: action.payload,
    };
  } else if (action.type == "CLEAR_NOTIFICATION") {
    return {
      ...state,
      notifications: [],
      notif_Count: 0,
      badgeCount: 0,
    };
  } else if (action.type == "SET_NSEEN") {
    return {
      ...state,
      all_nseen: action.payload,
    };
  } else if (action.type == "CLEAR_NSEEN") {
    return {
      ...state,
      all_nseen: {},
    };
  } else if (action.type == "SET_MNC") {
    return {
      ...state,
      message_notification: 1 + state.message_notification,
    };
  } else if (action.type == "CLEAR_SOCKET") {
    return {
      ...state,
      socket: null,
    };
  } else if (action.type == "SET_TOTAL_CHATS") {
    return {
      ...state,
      total_chats: action.payload,
    };
  } else if (action.type == "CLEAR_TOTAL_CHATS") {
    return {
      ...state,
      total_chats: 0,
      chats: [],
    };
  } else if (action.type == "BLOCK_LIST") {
    return {
      ...state,
      block_list: action.payload,
    };
  } else if (action.type == "SUB_CANCEL_REQ") {
    return {
      ...state,
      cancel_request: action.payload,
    };
  } else if (action.type == "CLEAR_ALL_REVIEWS") {
    return {
      ...state,
      all_reviews: [],
      all_reviews_count: 0,
    };
  } else if (action.type == "PAYPAL_PAYMENT") {
    return {
      ...state,
      paypal_payment: action.payload,
    };
  } else if (action.type == "SET_NOTIF_DATE") {
    return {
      ...state,
      notifCurrentDate: action.payload,
    };
  } else if (action.type == "SET_LWP") {
    return {
      ...state,
      LWPRef: action.payload,
    };
  } else if (action.type == "SET_CURRENTLN") {
    return {
      ...state,
      currentLN: action.payload,
    };
  } else if (action.type == "USER_TABLE") {
    // if (action.payload.newPage == 1) {
    //   return {
    //     ...state,
    //     userTable: action.payload.userTable,
    //     userCount: action.payload.userCount,
    //   };
    // } else {
    return {
      ...state,
      // userTable: [...action.payload.userTable],
      userTable: action.payload.userTable,
      userCount: action.payload.userCount,
      // };
    }
    // } else if (action.type == "USER_BLOCK_UNBLOCK") {
    //   let oldUserData = state.userTable.find((e) => e._id == action.payload.id);
    //   if (oldUserData) {
    //     let newUserData: userTableType = {
    //       ...oldUserData,
    //       status: action.payload.status,
    //     };
    //     let updateddata: userTableType[] = [];
    //     state.userTable.forEach((e) => {
    //       if (e._id == action.payload.id) {
    //         updateddata.push(newUserData);
    //       } else {
    //         updateddata.push(e);
    //       }
    //     });
    //     return {
    //       ...state,
    //       userTable: updateddata,
    //     };
    //   } else {
    //     return {
    //       ...state,
    //     };
    //   }
  }

  else if (action.type == "USER_BLOCK_UNBLOCK") {
    console.log("actionpayload..........", action.payload)
    const updateUserTable = state.userTable.map((e: userTableType) => {
      if (e._id == action.payload.user_id) {
        console.log(action.payload.user_id, "pppppppp")
        return { ...e, status: action.payload.status }
      } else {
        return { ...e }
      }
      console.log(state.userTable, "oooooooooooo")
    });
    return {
      ...state,
      userTable: updateUserTable,
    };
  }

  else if (action.type == "TOUR_BLOCK_UNBLOCK") {
    let oldTourData = state.tourTable.find(
      (e) => e.tourData._id == action.payload.id
    );
    if (oldTourData) {
      let newTourData: tourTableType = {
        ...oldTourData,
        tourData: { ...oldTourData.tourData, isTourBlock: action.payload.isTourBlock },
      };
      let updateddata: tourTableType[] = [];
      state.tourTable.forEach((e) => {
        if (e.tourData._id == action.payload.id) {
          updateddata.push(newTourData);
        } else {
          updateddata.push(e);
        }
      });
      return {
        ...state,
        tourTable: updateddata,
      };
    } else {
      return {
        ...state,
      };
    }
  } else if (action.type == "TOUR_EXPLORE_STATUS_TYPE_CHANGE") {
    let oldTourData = state.tourTable.find(
      (e) => e.tourData._id == action.payload.id
    );
    if (oldTourData) {
      let newTourData: tourTableType = {
        ...oldTourData,
        tourData: {
          ...oldTourData.tourData,
          tour_explore_status_type_id: action.payload.status,
        },
      };
      let updateddata: tourTableType[] = [];
      state.tourTable.forEach((e) => {
        if (e.tourData._id == action.payload.id) {
          updateddata.push(newTourData);
        } else {
          updateddata.push(e);
        }
      });
      return {
        ...state,
        tourTable: updateddata,
      };
    } else {
      return {
        ...state,
      };
    }
  } else if (action.type == "TOUR_TABLE") {
    if (action.payload.page == 1) {
      return {
        ...state,
        tourTable: action.payload.tourTable,
        tourCount: action.payload.tourCount,
      };
    } else {
      return {
        ...state,
        tourTable: [...action.payload.tourTable],
        tourCount: action.payload.tourCount,
      };
    }
  } else if (action.type == "SET_SIDEBAR") {
    if (action.payload.value != "") {
      return {
        ...state,
        isSideBarNavOpen: action.payload.value,
      };
    } else {
      return {
        ...state,
        isSideBarNavOpen: !state.isSideBarNavOpen,
      };
    }

  } else if (action.type == "ALL_IDS") {
    if (action.payload.action == "add") {
      return {
        ...state,
        allIds: [...state.allIds, action.payload.id],
      };
    } else {
      let filter_ids = state.allIds.filter(si => (si != action.payload.id))
      return {
        ...state,
        allIds: [...filter_ids],
      };
    }


  } else if (action.type == "SET_CURRENTQID") {
    return {
      ...state,
      currentQID: action.payload.id,
    };
  }
  else {
    return { ...state };
  }
};

// actions (This code can be written in another file)

const verifyCode: actionFunctionType = (dispatch) => {
  return async ({
    email,
    code,
    navigation,
    setError,
    setVisibleSnack,
    setVisibleSnackErr,
    setUpdateStatus,
    setLoading,
  }) => {
    try {
      setLoading(true);
      // let res = await instance.post("/users/verifyemailcode",{email,code})
      // if(res.data?.verified){
      //   await AsyncStorage.setItem("user_id",res.data.userData._id.toString())
      //   await AsyncStorage.setItem("token",res.data.token)
      //   dispatch({type:"USER_DATA",payload:res.data?.userData})
      //     navigation.navigate("HomeScreen")
      // }
      setLoading(false);
    } catch (error) {
      // if(error?.response?.data?.message){
      //   setError(error.response.data.message)
      // }else{
      //   setError("Error occured")
      // }

      setVisibleSnackErr(true);
      setLoading(false);
    }
  };
};

const getMeets: actionFunctionType = (dispatch) => {
  return async ({
    user_id,
    setLoadingMoreMeets,
    setRefreshMyMeet,
    isRefresh = false,
    isLoading = false,
    isLoadingMore = false,
    setLoadingMoreMyMeets,
    setLoading,
    page = 1,
    currentDate,
  }) => {
    try {
      if (isRefresh) {
        setRefreshMyMeet(true);
      }
      if (isLoading) {
        setLoading(true);
      }
      if (isLoadingMore) {
        setLoadingMoreMyMeets(true);
      }
      // const token = await AsyncStorage.getItem("token");
      // let res = await instance.post("/users/getusermeets/"+page,{user_id,currentDate},{ headers: { Authorization: `Bearer ${token}` } })

      // dispatch({type:"SET_MEETS",payload:{meets:res.data.allmeet,count:res.data.allmeet_count,isRefresh}})
      if (isLoading) {
        setLoading(false);
      }
      if (isRefresh) {
        setRefreshMyMeet(false);
      }
      if (isLoadingMore) {
        setLoadingMoreMyMeets(false);
      }
    } catch (error) {
      if (isRefresh) {
        setRefreshMyMeet(false);
      }

      if (isLoading) {
        setLoading(false);
      }

      if (isLoadingMore) {
        setLoadingMoreMyMeets(false);
      }
    }
  };
};

const getMeetInvites: actionFunctionType = (dispatch) => {
  return async ({
    user_id,
    isRefresh = false,
    setRefreshMeetInvite,
    isLoading = false,
    isLoadingMore = false,
    setLoadingMoreMeetInvites,
    setLoading,
    page = 1,
    currentDate,
    deleteCount = 0,
  }) => {
    try {
      if (isRefresh) {
        setRefreshMeetInvite(true);
      }
      if (isLoading) {
        setLoading(true);
      }
      if (isLoadingMore) {
        setLoadingMoreMeetInvites(true);
      }
      // let token = await AsyncStorage.getItem("token")
      // let res = await instance.post("/users/getusermeetinvites/"+page,{participant_id:user_id,currentDate,deleteCount},{ headers: { Authorization: `Bearer ${token}` } })
      // dispatch({type:"SET_MEET_INVITES",payload:{ meets: res.data.meetinvites,count:res.data.meetinvites_count,isRefresh,deleteCount:res.data.deleted_meet_count,page}})
      if (isRefresh) {
        setRefreshMeetInvite(false);
      }
      if (isLoading) {
        setLoading(false);
      }
      if (isLoadingMore) {
        setLoadingMoreMeetInvites(false);
      }
    } catch (error) {
      if (isRefresh) {
        setRefreshMeetInvite(false);
      }

      if (isLoading) {
        setLoading(false);
      }

      if (isLoadingMore) {
        setLoadingMoreMeetInvites(false);
      }
    }
  };
};

const getFriendList: actionFunctionType = (dispatch) => {
  return async ({
    user_id,
    setLoading,
    isRefreshing = false,
    isLoadingMore = false,
    setRefreshing,
    page = 1,
    setLoadingMore,
    currentDate,
  }) => {
    try {
      if (isRefreshing) {
        setRefreshing(true);
      } else if (isLoadingMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      // let token = await AsyncStorage.getItem("token")
      // let res = await instance.post("/users/getfriendlist/"+page,{user_id,currentDate},{ headers: { Authorization: `Bearer ${token}` } })
      // dispatch({type:"SET_FRIENDS",payload: { friends: res.data.friendList,isLoadingMore,isRefreshing,count:res.data.getfriends_count}})
      if (isRefreshing) {
        setRefreshing(false);
      } else if (isLoadingMore) {
        setLoadingMore(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      if (isRefreshing) {
        setRefreshing(false);
      } else if (isLoadingMore) {
        setLoadingMore(false);
      } else {
        setLoading(false);
      }
    }
  };
};
const onBackgroundMeet: actionFunctionType = (dispatch) => {
  return async ({
    meet_id,
    socket,
    travelStart,
    Location,
    destinationCord,
    isPointWithinRadius,
    state,
    Speech,
    currentLN,
  }) => {
    try {
    } catch (error) { }
  };
};
//  const onBackgroundTravelStatusChange:actionFunctionType=(dispatch)=>{
//   return ({currentTS,meet_id,LWPRef,socket,destinationCord,meetName,currentLN,isMyMeet=false,meetData={}})=>{

// if(!currentTS){

// }

// if(currentLN){
//   dispatch({type:"SET_CURRENTLN",payload:currentLN})
// }

// dispatch({type:"TRAVEL_STATUS",payload:{currentTS,meet_id,destinationCord,meetName,isMyMeet,meetData}})

//   }
// }

const signIn: actionFunctionType = (dispatch) => {
  let timezone = DateTime.now().zoneName
  return async ({
    email,
    password,
    setLoading,
    setError,
    setSuccess,
    router,
    setSignUpEmail,
    setEmail,
    setPassword,
    setDisable,
    mode,
    setMode = null,
    setRequireEmailVerification,
  }) => {
    try {
      setLoading(true);
      // creating post request for login
      let response;
      // if (mode == 100) {

      response = await axios.post(process.env.apiUrl + "/api/auth/signin", {
        email,
        password,
        // timezone
      });
      try {
        window.localStorage.setItem("token", response?.data?.result?.token)
      } catch (error) {

      }
      console.log(response, "dsfffffffff")
      dispatch({ type: "UPDATE_TOKEN", payload: { token: response?.data?.result?.token } });
      dispatch({ type: "USER_DATA", payload: response.data.result });
      setLoading(false);
      setSuccess(response.data.message);
      const data = response.data.result;
      // const token = response.data.userData
      // await AsyncStorage.setItem("token", token);
      // await AsyncStorage.setItem("user_id", data._id);
      // await AsyncStorage.setItem("isLoggedIn", "true");
      // await AsyncStorage.setItem("user_email", data.email);
      // await AsyncStorage.setItem("user_firstname", data.first_name);
      // await AsyncStorage.setItem("user_lastname", data.last_name);
      // await AsyncStorage.setItem("next_billing_time", "null")
      // await AsyncStorage.setItem("schedule_subscription", "false");

      router.push("/dashboard");
      // } else {
      // response = await instance.post("/users/signin", { email, mode, request_origin: "app" });
      // }
      // const data = response.data.result;
      // const token = response.data.token
      // await AsyncStorage.setItem("token", token);
      // await AsyncStorage.setItem("user_id", data._id);
      // await AsyncStorage.setItem("isLoggedIn", "true");
      // await AsyncStorage.setItem("user_email", data.email);
      // await AsyncStorage.setItem("user_firstname", data.first_name);
      // await AsyncStorage.setItem("user_lastname", data.last_name);
      // await AsyncStorage.setItem("next_billing_time", "null")
      // await AsyncStorage.setItem("schedule_subscription", "false");
      // await AsyncStorage.setItem("isSubscribed", "null")
      // await AsyncStorage.setItem("isTrial", "null")
      // console.log(response.data.userData,"---in auth");

      //
      // if (mode == 100) {
      //   setEmail("")
      //   setPassword("")
      //   setTimeout(() => { setDisable(false) }, 3000)
      // } else {
      //   setSignUpEmail("")
      // }
      // if(setMode){
      //   setMode(100)
      // }
    } catch (err: any) {
      // if (mode == 98) {
      // LoginManager.logOut()
      // }
      // console.log(err);
      // if (mode == 99) {
      // GoogleSignin.signOut()
      // }
      setLoading(false);
      // setDisable(false)
      // setError(err.response.data.message)
      // setVisibleSnackErr(true)
      if (err?.response?.data?.detail) {
        setError(err.response.data.detail);
        console.log(err.response.data.detail);

        // setRequireEmailVerification(true)
      }
      else {
        setError("Something went wrong")
      }
    }
  };
};

const fetchUpdatedProfileData: actionFunctionType = (dispatch) => {
  return async ({
    setUpdateStatus,
    profileUpdated = false,
    navigation,
    setDisable,
    initialData,
  }) => {
    try {
      // const email = await AsyncStorage.getItem("email");
      // const id = await AsyncStorage.getItem("user_id");

      // const token = await AsyncStorage.getItem("token");
      // const response = await instance.post("/users/getsingleuser", { id }, { headers: { Authorization: `Bearer ${token}` } });

      // dispatch({ type: "USER_DATA", payload: response.data.user });
      setDisable(false);

      navigation.navigate("HomeScreen");

      if (profileUpdated) {
      }
    } catch (err) {
      setDisable(false);

      // console.warn(err.response.data.message);
    }
  };
};

const signOut: actionFunctionType = (dispatch) => {
  return async ({ navigation, user_id, socket, mode, router, userToken, email, setError, setSuccess }) => {
    try {
      const BG_TASK = "BACKGROUND-NOTIFICATION-TASK";
      // await AsyncStorage.setItem("isLoggedIn", "false");
      // const token = await AsyncStorage.getItem("token");
      const res = await axios.post(
        process.env.apiUrl + `/api/auth/signout/${email}`,
        {},
        { headers: { Authorization: `Bearer ${userToken}` } }
      );
      try {
        window.localStorage.setItem("token", '')
      } catch (error) {

      }
      dispatch({ type: "UPDATE_TOKEN", payload: { token: '' } });
      dispatch({ type: "SIGN_OUT", payload: {} });
      setSuccess(res.data.message);
      router.push("/");

      // await AsyncStorage.setItem("user_id", "");
      // await AsyncStorage.removeItem("user_email");
      // await AsyncStorage.removeItem("user_firstname");
      // await AsyncStorage.removeItem("user_lastname");
      // await AsyncStorage.removeItem("user_mappin");
      // await AsyncStorage.setItem("token","");
      // await AsyncStorage.removeItem("user_photo");
      // await AsyncStorage.removeItem("user_type_id");
      // await AsyncStorage.setItem("isSubscribed", "null")
      // await AsyncStorage.setItem("isTrial", "null")
      // await AsyncStorage.setItem("next_billing_time", "null")

      try {
      } catch (error) { }
      // await AsyncStorage.setItem("schedule_subscription", "false")

      // await instance.post("/users/signout", { user_id })

      // dispatch({ type: "SIGN_OUT" });
      // navigation.navigate("Login");
    } catch (error) { }
  };
};

const updateUserData: actionFunctionType = (dispatch) => {
  return async ({
    id,
    router,
    onSignIn = false,
    pathName,
    loading,
    setLoading,
  }) => {
    //  const token = await AsyncStorage.getItem("token");
    try {
      //     const response = await axios.post(process.env.apiUrl+"/getsingleuserdata", {
      // id
      //     //   headers: {
      //     //     Authorization: `Bearer ${token}`,
      //       // },
      //     });
      let userToken = window.localStorage.getItem("token");
      let res = await axios.post(
        process.env.apiUrl + "/api/auth/get-loggedin-user",
        {},
        { headers: { Authorization: `Bearer ${userToken}` } }
      );

      // console.log(res?.data?.result, "updatae single user...........")
      dispatch({ type: "UPDATE_TOKEN", payload: { token: res?.data?.token } });
      dispatch({ type: "UPDATE_USER_DATA", payload: res?.data });

      if (onSignIn) {
        router.push("/dashboard");
      }
    } catch (err) {
      console.log(err);

      if (!onSignIn) {
        console.log(err);
        router.push("/");
      }
    }
  };
};

const updateUserProfile: actionFunctionType = (dispatch) => {
  return async ({
    data,
    setLoading,
    setUpdateStatus,
    user_status,
    setError,
    setDisable,
    photoData,
    removePhoto,
    photoUrl,
    setRemovePhoto,
    userData,
    photo,
  }) => {
    try {
      // const token = await AsyncStorage.getItem("token");
      // const id = await AsyncStorage.getItem("user_id");
      // const usertypeid = await AsyncStorage.getItem("user_type_id");

      setLoading(true);
      // const response = await  instance.put("/users/updateuser", { ...data, id, request_origin: "app" }, { headers: { Authorization: `Bearer ${token}` } })

      if (photoData) {
        // let upres = await FileSytemUpload.uploadAsync("https://api.plannmeet.com/api/profile/img/upload", photoData.uri, {
        // fieldName: "photo",
        // uploadType: FileSytemUpload.FileSystemUploadType.MULTIPART,
        // httpMethod: "POST",
        // headers:{Authorization:`Bearer ${token}`} ,
        // parameters: { id: photoData.id,photo}
        // })
        // if (upres.status != 200) {
        //   console.log(upres.body);
        //   if (upres.body?.message) {
        //     setError(upres.body.message)
        //   } else {
        //   console.log(upres.body);
        //     setError("Profile photo upload failed, photo size might be large")
        //   }
        //   setLoading(false)
        //   setDisable(false)
        //   return
        // }
      }

      if (removePhoto && !photoData) {
        // let res = await instance.post("/removeprofilephoto", { id: userData._id.toString(),  },{headers:{Authorization:`Bearer ${token}`}})

        setRemovePhoto(false);
      }

      setLoading(false);

      setUpdateStatus("Profile updated successfully.");
    } catch (err) {
      //  console.log(err.response.data + " ", "---instance e");
      // console.log(err.response.data.message,"==");
      setLoading(false);
      setDisable(false);
      setError("Profile update failed");
    }
  };
};

const setSignInStatus: actionFunctionType = (dispatch) => {
  return async ({ setLoading }) => {
    try {
      //  let token = await AsyncStorage.getItem("token")

      // let userid = await AsyncStorage.getItem("user_id")

      // let userdata = await instance.post("/users/getsingleuser", { id: userid }, { headers: { Authorization: `Bearer ${token}` } })

      // if (userdata.data.user.isLoggedIn) {

      //   // dispatch({ type: "USER_DATA", payload: userdata.data.user })
      //   // dispatch({ type: "SIGNIN_STATUS" })
      // } else {
      //   // dispatch({ type: "LOADING_STATUS", payload: false })
      // }
      setLoading(false);
    } catch (error) {
      // dispatch({ type: "LOADING_STATUS", payload: false })
      setLoading(false);
      console.log(error + "");
    }
  };
};
const setLoadingStatus: actionFunctionType = (dispatch) => {
  return async ({ status }) => {
    try {
      // dispatch({ type: "LOADING_STATUS", payload: status })
    } catch (error) { }
  };
};

const getNotifications: actionFunctionType = (dispatch) => {
  return async ({
    user_id,
    page = 1,
    setLoadingMore,
    setScrollRefresh = null,
    currentDate,
  }) => {
    try {
      if (page == 1) {
        // dispatch({ type: "CLEAR_NOTIFICATION" })
      } else {
        setLoadingMore(true);
      }

      if (setScrollRefresh) {
        setScrollRefresh(true);
      }

      // let token = await AsyncStorage.getItem("token")
      // let notdata = await instance.post(`/users/getusernotifications/${page}`, { user_id ,currentDate}, { headers: { Authorization: `Bearer ${token}` } })

      // dispatch({ type: "NOTIFICATION", payload: { data: notdata.data.notifications, count: notdata.data.notifCount } })
      if (page == 1) {
        // dispatch({ type: "BADGE", payload: notdata.data.nsCount })
      } else {
        setLoadingMore(false);
      }

      if (setScrollRefresh) {
        setScrollRefresh(false);
      }
    } catch (error) {
      if (page > 1) {
        setLoadingMore(false);
      }
      if (setScrollRefresh) {
        setScrollRefresh(false);
      }
    }
  };
};

const setNotificationSeen: actionFunctionType = (dispatch) => {
  return async ({ user_id, notifData }) => {
    try {
      // let notifyIds = []
      // notifData.forEach(e => {
      //   if (!e.seen) {
      //     // notifyIds.push(e._id)
      //   }
      // })
      // console.log(notifyIds.length, "==noti");
      // if (notifyIds.length) {
      //   let token = await AsyncStorage.getItem("token")
      //   let res = await instance.post("/users/updatenotificationseen", { user_id, notifyIds }, { headers: { Authorization: `Bearer ${token}` } })
      //   dispatch({ type: "SET_BADGE", payload: notifyIds.length })
      // }
      // await Notifications.setBadgeCountAsync(0)
    } catch (error) { }
  };
};

const setNotificationVisited: actionFunctionType = () => {
  return async ({ user_id, notify_id }) => {
    try {
      // let token = await AsyncStorage.getItem("token")
      // let res = await instance.post("/users/updatenotificationvisited", { user_id, notify_id }, { headers: { Authorization: `Bearer ${token}` } })
    } catch (error) {
      console.log(error);
    }
  };
};

const getChats: actionFunctionType = (dispatch) => {
  return async ({ user_id, page = 1, setLoadingMoreChats, setLoadingChat }) => {
    if (page == 1) {
      // dispatch({ type: "CLEAR_TOTAL_CHATS" })
      setLoadingChat(true);
    }

    if (page > 1) {
      setLoadingMoreChats(true);
    }

    try {
      // let token = await AsyncStorage.getItem("token")
      // let data = await instance.post(`/users/getchats/${page}`, { user_id }, { headers: { Authorization: `Bearer ${token}` } })
      // let message_data = await instance.post("/users/messagenotseen", { user_id }, { headers: { Authorization: `Bearer ${token}` } })

      // dispatch({ type: "SET_NSEEN", payload: message_data.data.all_nseen })
      // dispatch({ type: "SET_TOTAL_CHATS", payload: data.data.total_chats })
      // dispatch({ type: "CHATS", payload: data.data.chats })
      if (page > 1) {
        setLoadingMoreChats(false);
      } else {
        setLoadingChat(false);
      }
    } catch (error) {
      // console.log(error.response.data.message, "-chat ");
      if (page > 1) {
        setLoadingMoreChats(false);
      } else {
        setLoadingChat(false);
      }
    }
  };
};

// const setNotificationCount:actionFunctionType = (dispatch) => {
//   return async ({ user_id }) => {
//     try {

//       console.log("dispatch snc");
//       dispatch({ type: "SET_MNC" })
//       let token = await AsyncStorage.getItem("token")
//       let message_data = await instance.post("/users/messagenotseen", { user_id }, { headers: { Authorization: `Bearer ${token}` } })
//       dispatch({ type: "SET_NSEEN", payload: message_data.data.all_nseen })
//     } catch (error) {
//     }

//   }
// }

// const setSocket:actionFunctionType = (dispatch) => {
//   return () => {
//     let socket = io("https://api.plannmeet.com", { path: "/api/letsmeet" })

//     dispatch({ type: "SOCKET", payload: socket })
//   }
// }
// const modifyNotification:actionFunctionType = (dispatch) => {
//   return async ({ Notifications, data }) => {
//     try {

//       let preNoti = await Notifications.getPresentedNotificationsAsync()

//       if (!preNoti.length) {
//         return
//       }
//       let doc = preNoti.find(n => {
//         return data.request.content.data.user_id == n.request.content.data.user_id
//       })

//       if (doc) {

//         await Notifications.dismissNotificationAsync(doc.request.identifier)

//       }
//     } catch (error) {

//     }

//   }
// }

// const getBlockList:actionFunctionType = (dispatch) => {
//   return async ({ user_id }) => {

//     try {
//       let token = await AsyncStorage.getItem("token")
//       let doc = await instance.post("/users/getblocklist", { user_id }, { headers: { Authorization: `Bearer ${token}` } })
//       dispatch({ type: "BLOCK_LIST", payload: doc.data.blocklist })
//     } catch (error) {

//     }

//   }
// }

const getUnseenMessages: actionFunctionType = (dispatch) => {
  return async ({ user_id }) => {
    try {
      // let token = await AsyncStorage.getItem("token")
      // let message_data = await instance.post("/users/messagenotseen", { user_id }, { headers: { Authorization: `Bearer ${token}` } })
      // dispatch({ type: "SET_NSEEN", payload: message_data.data.all_nseen })
    } catch (error) { }
  };
};

const setSingleMeetMessageNotSeen: actionFunctionType = (dispatch) => {
  return async ({ user_id, meet_id }) => {
    try {
      // let token = await AsyncStorage.getItem("token")
      // let message_data = await instance.post("/users/getsinglemeetmessagenotseen", { user_id ,meet_id}, { headers: { Authorization: `Bearer ${token}` } })
      // dispatch({ type: "SET_SINGLE_NSEEN", payload: {all_nseen:message_data.data.all_nseen,meet_id} })
    } catch (error) { }
  };
};

const setNotificationBadgeCount: actionFunctionType = (dispatch) => {
  return async ({ Notifications }) => {
    try {
      await Notifications.setBadgeCountAsync(0);
    } catch (error) {
      console.log(error);
    }
  };
};

const toggleSideBar: actionFunctionType = (dispatch) => {
  return async ({ value = "" }) => {
    try {
      dispatch({ type: "SET_SIDEBAR", payload: { value } });
    } catch (error) {
      console.log(error);
    }
  };
};

// const createTour: actionFunctionType = (dispatch) => {
//   return async ({
//     user_id,
//     tourName,
//     tourDescription,
//     tourLocation,
//     tourLocationCords,
//     tourCategoryId,
//     tourScenes,
//     resetState,
//     router,
//     imageResize,
//     setLoading,
//     thumbnail,
//   }) => {
//     try {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append("user_id", user_id);
//       // name, desciption,location,location_cords,
//       // formData.append("name",tourName)
//       // formData.append("description",tourDescription)
//       // formData.append("location",tourLocation)
//       // formData.append("category",tourCategoryId)
//       // formData.append("location_cords",tourLocationCords)
//       // console.log("recher on submitt", tourScenes);

//       // let res = await axios.post(process.env.apiUrl+"/api/createtour",{user_id,name:tourName,description:tourDescription,location_name:tourLocation,category:tourCategoryId,longitude:tourLocationCords.longitude,latitude:tourLocationCords.latitude})
//       // console.log("------resi",res.data);

//       // let tour_id = res.data.data
//       // formData.append("tour_id",tour_id)

//       // let scenes = await imageResize()
//       // console.log(tourScenes, "------comprosssed--");
//       tourScenes.forEach((file: File) => {
//         formData.append("scenes", file);
//       });
//       // console.log(formData.get("tour_id"), "--form data");
//       // console.log(formData.get("scenes"), "--sc data");

//       // let resScene = await axios.post(process.env.apiUrl+"/api/upload-scene",formData,{headers:{"Content-Type":"multipart/form-data"}})
//       // console.log(resScene.data,"reach herer   sunb,itt");
//       // let resDelete = await axios.post(process.env.apiUrl+"/api/delete-large-folder",{tour_id,user_id})

//       if (thumbnail) {
//         let formData_thumb = new FormData();
//         formData_thumb.append("user_id", user_id);
//         // formData_thumb.append("tour_id",tour_id)
//         formData_thumb.append("thumb", thumbnail);
//         // let resThumb = await axios.post(process.env.apiUrl+"/api/update-tour-thumb",formData_thumb,{headers:{"Content-Type":"multipart/form-data"}})
//       }
//       setLoading(false);
//       resetState();

//       // router.push("/tourpanel?tour_id="+tour_id)
//       //add reset state
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };
// };
// const updateTour: actionFunctionType = (dispatch) => {
//   return async ({
//     tour_id,
//     user_id,
//     tourName,
//     tourDescription,
//     tourLocation,
//     tourLocationCords,
//     tourCategoryId,
//     tourScenes,
//     resetState,
//     router,
//     imageResize,
//     setLoading,
//     thumbnail,
//     requestRemoveThumbnail,
//     setUploadStatusMessage,
//     setShowEditTourDetailsModel,
//     setDisabled,
//     getTourData,
//   }) => {
//     try {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append("user_id", user_id);
//       // name, desciption,location,location_cords,
//       // formData.append("name",tourName)
//       // formData.append("description",tourDescription)
//       // formData.append("location",tourLocation)
//       // formData.append("category",tourCategoryId)
//       // formData.append("location_cords",tourLocationCords)
//       // console.log("recher on submitt", tourScenes);

//       // let res = await axios.post(process.env.apiUrl+"/api/edit-tour",{id:tour_id,user_id,name:tourName,description:tourDescription,location_name:tourLocation,category:tourCategoryId,longitude:tourLocationCords.longitude,latitude:tourLocationCords.latitude})

//       if (thumbnail || requestRemoveThumbnail) {
//         let formData_thumb = new FormData();
//         formData_thumb.append("user_id", user_id);
//         formData_thumb.append("tour_id", tour_id);
//         formData_thumb.append("thumb", thumbnail ? thumbnail : "");
//         // let resThumb = await axios.post(process.env.apiUrl+"/api/update-tour-thumb",formData_thumb,{headers:{"Content-Type":"multipart/form-data"}})
//       }

//       setLoading(false);
//       resetState();
//       setUploadStatusMessage({
//         message: "Tour details updated successfully",
//         type: "SUCCESS",
//       });
//       getTourData();
//       setTimeout(() => {
//         setShowEditTourDetailsModel();
//         setDisabled(false);
//       }, 2000);
//       // router.push("/tourpanel?tour_id="+tour_id)
//       //add reset state
//     } catch (error) {
//       console.log(error, "0--cre error");
//       setLoading(false);
//       setDisabled(false);
//     }
//   };
// };

// const createLinkage: actionFunctionType = (dispatch) => {
//   return async ({
//     tour_id,
//     scene_id,
//     linkTo,
//     setLoading,
//     position,
//     setTargetLinkage,
//     getSceneLinkages,
//     setSceneLinkagesStaging,
//     setLinkTo,
//     selectedLinkageIcon,
//     setSelectedLinkageIcon,
//   }) => {
//     try {
//       // let res = await axios.post(process.env.apiUrl+"/api/add-linkage",{tour_id,scene_id,link_to:linkTo,name:"link1",x_axis:position.x,y_axis:position.y,z_axis:position.z,icon:selectedLinkageIcon})
//       setTargetLinkage("");
//       getSceneLinkages();
//       setSceneLinkagesStaging([]);
//       setLinkTo("");
//       setSelectedLinkageIcon("");
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
// const updateLinkage: actionFunctionType = (dispatch) => {
//   return async ({
//     tour_id,
//     scene_id,
//     linkTo,
//     setLoading,
//     position,
//     setTargetLinkage,
//     getSceneLinkages,
//     setSceneLinkagesStaging,
//     setLinkTo,
//     selectedLinkageIcon,
//     setSelectedLinkageIcon,
//     targetLinkage,
//   }) => {
//     try {
//       // let res = await axios.post(process.env.apiUrl+"/api/edit-linkage",{id:targetLinkage,tour_id,scene_id,link_to:linkTo,name:"link1",x_axis:position.x,y_axis:position.y,z_axis:position.z,icon:selectedLinkageIcon})
//       setTargetLinkage("");
//       getSceneLinkages();
//       setSceneLinkagesStaging([]);
//       setLinkTo("");
//       setSelectedLinkageIcon("");
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
// const removeLinkage: actionFunctionType = (dispatch) => {
//   return async ({
//     tour_id,
//     scene_id,
//     linkTo,
//     setLoading,
//     position,
//     setTargetLinkage,
//     getSceneLinkages,
//     setSceneLinkagesStaging,
//     setLinkTo,
//     selectedLinkageIcon,
//     setSelectedLinkageIcon,
//     targetLinkage,
//   }) => {
//     try {
//       // let res = await axios.post(process.env.apiUrl+"/api/delete-linkage",{id:targetLinkage})
//       setTargetLinkage("");
//       getSceneLinkages();
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
// const removeInfospot: actionFunctionType = (dispatch) => {
//   return async ({
//     tour_id,
//     scene_id,
//     linkTo,
//     setLoading,
//     position,
//     setTargetInfospot,
//     getSceneInfospots,
//     setSceneLinkagesStaging,
//     setLinkTo,
//     selectedLinkageIcon,
//     setSelectedLinkageIcon,
//     targetInfospot,
//   }) => {
//     try {
//       // let res = await axios.post(process.env.apiUrl+"/api/delete-infospot",{id:targetInfospot})
//       setTargetInfospot("");
//       getSceneInfospots();
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// const createInfospot: actionFunctionType = (dispatch) => {
//   return async ({
//     tour_id,
//     scene_id,
//     user_id,
//     linkTo,
//     setLoading,
//     position,
//     setTargetInfospot,
//     getSceneInfospots,
//     setSceneInfospotsStaging,
//     setLinkTo,
//     description,
//     title,
//     setInfospotTitle,
//     setInfospotDescription,
//     infospotTypeId,
//     infospotImage,
//     infospotUrl,
//     infospotUrlTitle,
//     infospotYoutubeUrl,
//     setInfospotTypeId,
//     setInfospotImage,
//     setInfospotUrl,
//     setInfospotUrlTitle,
//     setInfospotYoutubeUrl,
//   }) => {
//     try {
//       let formData = new FormData();
//       formData.append("tour_id", tour_id);
//       formData.append("scene_id", scene_id);
//       formData.append("user_id", user_id);
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("x_axis", position.x);
//       formData.append("y_axis", position.y);
//       formData.append("z_axis", position.z);
//       formData.append("type", infospotTypeId);
//       formData.append("url", infospotUrl);
//       formData.append("url_title", infospotUrlTitle);
//       formData.append("video_url", infospotYoutubeUrl);
//       formData.append("image", infospotImage);
//       // let res = await axios.post(process.env.apiUrl+"/api/add-infospot",formData,{headers:{"Content-Type":"multipart/form-data"}})
//       setTargetInfospot("");
//       getSceneInfospots();
//       setSceneInfospotsStaging([]);
//       setInfospotDescription("");
//       setInfospotTitle("");
//       setInfospotTypeId(null);
//       setInfospotUrl("");
//       setInfospotUrlTitle("");
//       setInfospotYoutubeUrl("");
//       setInfospotImage(null);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
// const updateInfospot: actionFunctionType = (dispatch) => {
//   return async ({
//     tour_id,
//     scene_id,
//     user_id,
//     targetInfospot,
//     linkTo,
//     setLoading,
//     position,
//     setTargetInfospot,
//     getSceneInfospots,
//     setSceneInfospotsStaging,
//     setLinkTo,
//     description,
//     title,
//     setInfospotTitle,
//     setInfospotDescription,
//     infospotTypeId,
//     infospotImage,
//     infospotUrl,
//     infospotUrlTitle,
//     infospotYoutubeUrl,
//     setInfospotTypeId,
//     setInfospotImage,
//     setInfospotUrl,
//     setInfospotUrlTitle,
//     setInfospotYoutubeUrl,
//     currentImage,
//     setCurrentImage,
//   }) => {
//     try {
//       // console.log(tour_id, "--indiode ,", scene_id, "--r38r8--d-s sd", user_id);
//       // console.log(currentImage, "---cue image", infospotImage);

//       let formData = new FormData();
//       formData.append("current_image", currentImage);
//       formData.append("id", targetInfospot);
//       formData.append("title", title);

//       formData.append("tour_id", tour_id);
//       formData.append("scene_id", scene_id);
//       formData.append("user_id", user_id);
//       formData.append("description", description);
//       formData.append("x_axis", position.x);
//       formData.append("y_axis", position.y);
//       formData.append("z_axis", position.z);
//       formData.append("type", infospotTypeId);
//       formData.append("url", infospotUrl);
//       formData.append("url_title", infospotUrlTitle);
//       formData.append("video_url", infospotYoutubeUrl);
//       if (currentImage != infospotImage) {
//         formData.append("image", infospotImage); // Put this condition at bottom always
//       }
//       // let res = await axios.post(process.env.apiUrl+"/api/edit-infospot",formData,{headers:{"Content-Type":"multipart/form-data"}})
//       setTargetInfospot("");
//       getSceneInfospots();
//       setSceneInfospotsStaging([]);
//       setInfospotDescription("");
//       setInfospotTitle("");
//       setInfospotTypeId(null);
//       setInfospotUrl("");
//       setInfospotUrlTitle("");
//       setInfospotYoutubeUrl("");
//       setInfospotImage(null);
//       setCurrentImage("");
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// const createPanoImage: actionFunctionType = (dispatch) => {
//   return async ({
//     tour_id,
//     scene_id,
//     user_id,
//     linkTo,
//     setLoading,
//     position,
//     setTargetInfospot,
//     getSceneInfospots,
//     setSceneInfospotsStaging,
//     setLinkTo,
//     description,
//     title,
//     setInfospotTitle,
//     setInfospotDescription,
//     infospotTypeId,
//     infospotImage,
//     infospotUrl,
//     infospotUrlTitle,
//     infospotYoutubeUrl,
//     setInfospotTypeId,
//     setInfospotImage,
//     setInfospotUrl,
//     setInfospotUrlTitle,
//     setInfospotYoutubeUrl,
//     image,
//     scale,
//     setPanoImageScale,
//     setChangePanoImagePosition,
//     setUploadPanoImage,
//     setTargetPanoImage,
//     getPanoImages,
//     oldPanoImageData,
//     setOldPanoImageData,
//     isNewImageAdded,
//   }) => {
//     try {
//       if (oldPanoImageData) {
//         // await axios.post(process.env.apiUrl+"/api/delete-pano",{id:oldPanoImageData._id})
//       }

//       let formData = new FormData();
//       formData.append("tour_id", tour_id);
//       formData.append("scene_id", scene_id);
//       formData.append("user_id", user_id);
//       formData.append("scale", scale);

//       formData.append("x_axis", position.x);
//       formData.append("y_axis", position.y);
//       formData.append("z_axis", position.z);

//       formData.append("image", image);
//       // let res = await axios.post(process.env.apiUrl+"/api/set-pano",formData,{headers:{"Content-Type":"multipart/form-data"}})
//       setTargetPanoImage("");
//       // getSceneInfospots()
//       // setSceneInfospotsStaging([])
//       setUploadPanoImage(null);
//       setChangePanoImagePosition(null);
//       setPanoImageScale(1);
//       setOldPanoImageData(null);
//       getPanoImages();
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
// const updatePanoImage: actionFunctionType = (dispatch) => {
//   return async ({
//     targetPanoImage,
//     tour_id,
//     scene_id,
//     user_id,
//     linkTo,
//     setLoading,
//     position,
//     setTargetInfospot,
//     getSceneInfospots,
//     setSceneInfospotsStaging,
//     setLinkTo,
//     description,
//     title,
//     setInfospotTitle,
//     setInfospotDescription,
//     infospotTypeId,
//     infospotImage,
//     infospotUrl,
//     infospotUrlTitle,
//     infospotYoutubeUrl,
//     setInfospotTypeId,
//     setInfospotImage,
//     setInfospotUrl,
//     setInfospotUrlTitle,
//     setInfospotYoutubeUrl,
//     image,
//     scale,
//     setPanoImageScale,
//     setChangePanoImagePosition,
//     setUploadPanoImage,
//     setTargetPanoImage,
//     getPanoImages,
//     current_image,
//   }) => {
//     try {
//       // console.log(targetPanoImage, "--hahdas -asdsjd");

//       // let res = await axios.post(process.env.apiUrl+"/api/edit-pano",{id:targetPanoImage,tour_id,scene_id,scale,x_axis:position.x,y_axis:position.y,z_axis:position.z})
//       setTargetPanoImage("");
//       // getSceneInfospots()
//       // setSceneInfospotsStaging([])
//       setUploadPanoImage(null);
//       setChangePanoImagePosition(null);
//       setPanoImageScale(1);
//       getPanoImages();
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// const updateCameraConfig: actionFunctionType = (dispatch) => {
//   return async ({
//     targetPanoImage,
//     tour_id,
//     scene_id,
//     zoom_level,
//     h_angle,
//     v_angle,
//     getCameraConfig,
//     currentSceneCameraConfig,
//     user_id,
//     linkTo,
//     setLoading,
//     position,
//     setTargetInfospot,
//     getSceneInfospots,
//     setSceneInfospotsStaging,
//     setLinkTo,
//     description,
//     title,
//     setInfospotTitle,
//     setInfospotDescription,
//     infospotTypeId,
//     infospotImage,
//     infospotUrl,
//     infospotUrlTitle,
//     infospotYoutubeUrl,
//     setInfospotTypeId,
//     setInfospotImage,
//     setInfospotUrl,
//     setInfospotUrlTitle,
//     setInfospotYoutubeUrl,
//     image,
//     scale,
//     setPanoImageScale,
//     setChangePanoImagePosition,
//     setUploadPanoImage,
//     setTargetPanoImage,
//     getPanoImages,
//     current_image,
//   }) => {
//     try {
//       // console.log(targetPanoImage, "--hahdas -asdsjd");

//       // let res = await axios.post(process.env.apiUrl+"/api/set-camera-position",{id:currentSceneCameraConfig?currentSceneCameraConfig._id:null,tour_id,scene_id,zoom_level,h_angle,v_angle})

//       // getSceneInfospots()
//       // setSceneInfospotsStaging([])
//       getCameraConfig();
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// const updateSceneOrder: actionFunctionType = (dispatch) => {
//   return async ({
//     targetPanoImage,
//     scenes_priority,
//     tour_id,
//     scene_id,
//     zoom_level,
//     h_angle,
//     v_angle,
//     getCameraConfig,
//     currentSceneCameraConfig,
//     user_id,
//     linkTo,
//     setLoading,
//     position,
//     setTargetInfospot,
//     getSceneInfospots,
//     setSceneInfospotsStaging,
//     setLinkTo,
//     description,
//     title,
//     setInfospotTitle,
//     setInfospotDescription,
//     infospotTypeId,
//     infospotImage,
//     infospotUrl,
//     infospotUrlTitle,
//     infospotYoutubeUrl,
//     setInfospotTypeId,
//     setInfospotImage,
//     setInfospotUrl,
//     setInfospotUrlTitle,
//     setInfospotYoutubeUrl,
//     image,
//     scale,
//     setPanoImageScale,
//     setChangePanoImagePosition,
//     setUploadPanoImage,
//     setTargetPanoImage,
//     getPanoImages,
//     current_image,
//   }) => {
//     try {
//       // console.log(targetPanoImage,"--hahdas -asdsjd");
//       // let res = await axios.post(process.env.apiUrl+"/api/set-scene-priority",{scenes_priority})
//       // getSceneInfospots()
//       // setSceneInfospotsStaging([])
//       //  getCameraConfig()
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// const setNotifCurrentDate:actionFunctionType = (dispatch)=>{
//   return ({currentDate})=>{
//     dispatch({type:"SET_NOTIF_DATE",payload:currentDate})
//   }
// }

const getUserTable: actionFunctionType = (dispatch) => {
  // return async ({ newPage = 1, loading, setLoading, error, setError, rowsPerPage}) => {
  return async ({ newPage = 1, setLoading, rowsPerPage = 10, order }) => {

    try {
      setLoading(true);
      let userToken = window.localStorage.getItem("token");
      let res = await axios.post(process.env.apiUrl + `/api/get-users/${newPage}`, { limit: rowsPerPage, order }, { headers: { Authorization: `Bearer ${userToken}` } });
      console.log("in mainbbbbbbbbbbbbbbbbb", res)
      dispatch({
        type: "USER_TABLE",
        payload: {
          userTable: res?.data?.result,
          userCount: res?.data?.resultCount,
          newPage,
        },

      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
};
const getTourTable: actionFunctionType = (dispatch) => {
  return async ({ page = 1, setLoading }) => {
    try {
      setLoading(true);
      let res = await axios.get(
        process.env.apiUrl + `/api/admin-get-tour/${page}`
      );
      console.log(res, "tourdata")
      dispatch({
        type: "TOUR_TABLE",
        payload: {
          tourTable: res.data.data,
          tourCount: res.data.toursCount,
          page,
        },
      });

      setLoading(false);

      // getSceneInfospots()
      // setSceneInfospotsStaging([])
      //  getCameraConfig()
    } catch (error) {
      console.log(error);
    }
  };
};
const userBlockUnblock: actionFunctionType = (dispatch) => {
  return async ({ user_id, status, setError, setSuccess }: { user_id: string; status: number, setError: string, setSuccess: any }) => {
    console.log(user_id, status, "on authcontes....")
    let userToken = window.localStorage.getItem("token");
    if (status == 1) {
      try {
        let res = await axios.post(
          process.env.apiUrl + "/api/update-user-status-admin",
          { user_id, status }, { headers: { Authorization: `Bearer ${userToken}` } }
        );
        console.log(res, "dddddddddddddddddddddddddddddddddddddddd")
        dispatch({ type: "USER_BLOCK_UNBLOCK", payload: { user_id, status: 1, setSuccess, setError } });
        setSuccess(res.data.message);
      } catch (error) {
        console.log(error);
      }
    }
    if (status == 19) {
      try {
        let res = await axios.post(
          process.env.apiUrl + `/api/update-user-status-admin`,
          { user_id, status }, { headers: { Authorization: `Bearer ${userToken}` } }
        );
        console.log(res, "dddddddddddddddddddddddddddddddddddddddd")
        dispatch({ type: "USER_BLOCK_UNBLOCK", payload: { user_id, status: 19, setSuccess, setError } });
        setSuccess(res.data.message);
      } catch (error) {
        console.log(error);
      }
    }
  };
};
const tourBlockUnblock: actionFunctionType = (dispatch) => {
  return async ({ id, isTourBlock }: { id: string; isTourBlock: boolean }) => {
    if (!isTourBlock) {
      try {
        let res = await axios.post(
          process.env.apiUrl + "/api/admin-unblock-tour",
          { id }
        );

        dispatch({ type: "TOUR_BLOCK_UNBLOCK", payload: { id, isTourBlock: false } });
      } catch (error) {
        console.log(error);
      }
    }
    if (isTourBlock) {
      try {
        let res = await axios.post(
          process.env.apiUrl + `/api/admin-block-tour`,
          { id }
        );
        dispatch({ type: "TOUR_BLOCK_UNBLOCK", payload: { id, isTourBlock: true } });
      } catch (error) {
        console.log(error);
      }
    }
  };
};
const tourExploreStatusTypeIdChange: actionFunctionType = (dispatch) => {
  return async ({
    tour_id,
    tour_explore_status_type_id,
  }: {
    tour_id: string;
    tour_explore_status_type_id: number;
  }) => {
    try {
      let res = await axios.post(process.env.apiUrl + "/api/tour-move-to", {
        tour_id,
        tour_explore_status_type_id,
      });
      dispatch({
        type: "TOUR_EXPLORE_STATUS_TYPE_CHANGE",
        payload: { id: tour_id, status: tour_explore_status_type_id },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const setIds: actionFunctionType = (dispatch) => {
  return async ({ id, action = "add" }) => {
    console.log(id, action, "in authcontext aaaaaa")
    try {
      dispatch({ type: "ALL_IDS", payload: { id, action } })
    } catch (error) {
      console.log(error);
    }
  };
};
const setCurrentQId: actionFunctionType = (dispatch) => {
  return async ({ id }) => {
    try {
      dispatch({ type: "SET_CURRENTQID", payload: { id } })
    } catch (error) {
      console.log(error);
    }
  };
};

// exporting all methods and setting initalState from here
const { Context, Provider } = createDataContext(
  AuthReducer,
  {
    signIn,
    signOut,
    updateUserProfile,
    updateUserData,
    fetchUpdatedProfileData,
    // createTour,
    // updateTour,
    // createLinkage,
    // updateLinkage,
    // removeLinkage,
    // removeInfospot,
    // createInfospot,
    // updateInfospot,
    // createPanoImage,
    // updatePanoImage,
    // updateCameraConfig,
    // updateSceneOrder,
    setSignInStatus,
    setLoadingStatus,
    getNotifications,
    setNotificationSeen,
    setNotificationVisited,
    getChats,
    toggleSideBar,
    getUnseenMessages,
    verifyCode,
    getMeets,
    getMeetInvites,
    getFriendList,
    onBackgroundMeet,
    setSingleMeetMessageNotSeen,
    setNotificationBadgeCount,
    getUserTable,
    getTourTable,
    userBlockUnblock,
    tourBlockUnblock,
    tourExploreStatusTypeIdChange,
    setIds,
    setCurrentQId,
  },
  {
    userData: { id: 0, email: "", name: "", token: '' },
    getUserDetails: {},
    userToken: null,
    isLoading: true,
    isSignout: false,
    ads: [],
    profiles: [],
    allCategory: [],
    isSignIn: false,
    adBookmarks: [],
    adsCount: 0,
    myAds: [],
    otherAds: [],
    myAdsCount: 0,
    otherAdsCount: 0,
    ongoing: [],
    ongoingCount: 0,
    accepted: [],
    acceptedCount: 0,
    rejected: [],
    rejectedCount: 0,
    bestMatches: [],
    bestMatchesCount: 0,
    businessBookmarks: [],
    notifications: [],
    badgeCount: 0,
    notif_Count: 0,
    socket: null,
    chats: [],
    all_nseen: {},
    message_notification: 0,
    total_chats: 0,
    block_list: [],
    isSubscribed: true,
    plan_id: 0,
    subscription_start: "",
    subscription_end: "",
    cancel_request: false,
    subscription_method: null,
    next_billing_time: null,
    subscription_id: null,
    isTrial: null,
    trial_start: null,
    trial_end: null,
    all_reviews: [],
    all_reviews_count: 0,
    ad_bookmark_count: 0,
    business_bm_count: 0,
    paypal_payment: false,
    notifCurrentDate: "",
    allMeets: [],
    allMeetCount: 0,
    allMeetInvites: [],
    allMeetInvitesCount: 0,
    friendList: [],
    friend_count: 0,
    meetTravelStart: false,
    destinationCord: null,
    meetName: "",
    meetId: null,
    LWPRef: null,
    currentLN: "",
    isMyMeet: false,
    meetDeleteCount: 0,
    updateMyMeet: false,
    updateMeetInvite: false,
    backgroundMeetData: {},
    allFriendCount: 0,
    isSideBarNavOpen: true,
    userTable: [],
    userCount: 0,
    tourTable: [],
    tourCount: 0,
    allIds: [],
    currentQID: ""
  }
);

export { Provider, Context };
