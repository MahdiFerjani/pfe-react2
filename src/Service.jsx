import React from "react";
import Sdata from "./components/Sdata";
import Card from "./components/Card";
import Navbar from "./components/Navbar"
const Services = () => {
  return (
    <>
    <Navbar/>
      <div className="my-5">
        <h1 className="text-center"> solutions </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} subs={val.subs} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;