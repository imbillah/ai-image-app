import React from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import Form from "../components/Form";
import Card from "../components/Card";

const RenderCards = ({ data, title }) => {
  if (data.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }
  return (
    <h2 className="mt-4 font-bold text-teal-500 text-xl capitalize">{title}</h2>
  );
};
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(null);
  const [searchText, setSearchText] = useState("wallpaper");
  return (
    <section className="max-w-7xl mx-auto p-2">
      <div>
        <h1 className="font-bold text-black text-[32px] my-2">
          Community Showcase
        </h1>
        <p className="text-[19px] text-[grey]">
          Browse a collection of visually stunning & eye catching images
          generated by DALL-E Ai
        </p>
        <div className="mt-14">
          <Form />
        </div>
        <div className="mt-10">
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
              {searchText && (
                <h2 className="font-medium text-[grey] text-xl mb-4">
                  Showing result for{" "}
                  <span className="text-teal-500">{searchText}</span>
                </h2>
              )}
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                {searchText ? (
                  <RenderCards data={[]} title="No serach Result found" />
                ) : (
                  <RenderCards data={[]} title="No posrts found" />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
