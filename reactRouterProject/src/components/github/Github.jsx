import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  // const [data, setData] = useState({});
  const data = useLoaderData();
  // useEffect(() => {
  //   fetch("https://api.github.com/users/iamramann")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <>
      <div className="bg-gray-600 p-4 text-white text-3xl text-center">
        Github Follwers: {data.followers}
        <img
          className=""
          src={data.avatar_url}
          alt="github profile picture"
          width={300}
        />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/iamramann");
  return response.json();
};
