import ContentContainer from "./ContentContainer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment, useEffect, useLayoutEffect, useState } from "react";


function Home() {
  const { loading, loggedInUser, error } = useSelector((state) => state.users);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const navigate =  useNavigate();

  useEffect(() => {
    if (Object.keys(loggedInUser).length > 0) {
      setIsLoggedIn(true);
    }
    else{
      navigate("/")
    }
  }, [loggedInUser]);

  return (
    <Fragment>
      {isLoggedIn===null? 'loading':isLoggedIn? <ContentContainer />:null}
     
    </Fragment>
  );
}

export default Home;
