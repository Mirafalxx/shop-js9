import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import axiosApi from "../../axiosApi";

const Test = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await axiosApi.get('/products');

      console.log(response.data);
    }, 2000);

    return () => {
      clearInterval(interval);
    }
  }, [dispatch]);


  return (
    <div>
      Hello
    </div>
  );
};

export default Test;