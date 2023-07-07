/* eslint-disable */
import React, { useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

export function LoaderCenter() {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  let [loading, setLoading] = useState(true);
  return (
    <div className="text-align-center">
      <PuffLoader loading={loading} cssOverride={override} size={50} />
    </div>
  );
}

export function LoaderRight() {
  const override = {
    display: "block",
    marginLeft: "auto",
  };
  let [loading, setLoading] = useState(true);
  return <PuffLoader loading={loading} cssOverride={override} size={50} />;
}

export function LoaderLeft() {
  const override = {
    display: "block",
    marginRight: "auto",
  };
  let [loading, setLoading] = useState(true);
  return <PuffLoader loading={loading} cssOverride={override} size={50} />;
}

export function LoaderTable() {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  let [loading, setLoading] = useState(true);
  return (
    <div>
      <PuffLoader loading={loading} cssOverride={override} size={40} />
    </div>
  );
}

export function Loader1() {
  const override = {
    display: "block",
    margin: "0 auto",
    color: "#fff",
  };
  let [loading, setLoading] = useState(true);
  return (
    <div className="text-align-center loader_white">
      <PuffLoader loading={loading} cssOverride={override} size={50} />
    </div>
  );
}

export function LoaderPageWithoutBG() {
  return (
    <div className="loader-body-without-Bg">
      <div align="center" className="fond">
        <div className="contener_general">
          <div className="contener_mixte">
            <div className="ballcolor ball_1">&nbsp;</div>
          </div>
          <div className="contener_mixte">
            <div className="ballcolor ball_2">&nbsp;</div>
          </div>
          <div className="contener_mixte">
            <div className="ballcolor ball_3">&nbsp;</div>
          </div>
          <div className="contener_mixte">
            <div className="ballcolor ball_4">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
