import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSocialAuth } from "../AuthSlice";
import Loader from "../../../components/UI/Loader/Loader";

const Redirect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { methodAuth, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (methodAuth === "social") dispatch(fetchSocialAuth());
  }, [methodAuth, dispatch]);

  useEffect(() => {
    if (!!user) navigate("/user/home");
  }, [user, navigate]);

  return (
    <div>
      <Loader loading color="#958060"/>
    </div>
  );
};

export default Redirect;
