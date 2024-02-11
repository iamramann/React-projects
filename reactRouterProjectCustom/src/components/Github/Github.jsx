import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // useEffect(() => {
  //   fetch("https://api.github.com/users/iamramann")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <>
      <div className="bg-gray-600 text-white text-3xl text-center p-4">
        Github followers: {data.followers}
        <img width={300} src={data.avatar_url} alt="github image" />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/iamramann");
  return response.json();
};
