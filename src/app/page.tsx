'use client';

import { fetchUser } from '@/lib/features/userSlice';
import { AppDispatch, RootState } from '@/lib/store';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Page() {
  const { entities, value } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>()

  console.log(entities);
  console.log(value);
  
  useEffect(() => {
    dispatch(fetchUser());
  }, [])
  return (
    <>
      ฟหกฟหกฟหกฟหกฟหก
    </>
  )
}