"use client"
import { Context } from '@/contextApi/AuthContext';
import { contextType } from '@/contextApi/CreateDataContext';
import { usePathname, useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react'

const Dashboard = () => {
  const { state, boundActions } = useContext<contextType>(Context);
  const { updateUserData } = boundActions;
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!state?.userData?.id) {
      updateUserData({ router, pathName });
    }
  }, []);


  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-4xl">Dashboard</div>
    </div>
  );
}

export default Dashboard;