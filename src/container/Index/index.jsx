import React, { useEffect } from "react";
import { Button } from "antd";
import { get } from "../../utils";
import { Link } from "react-router-dom";

export default function Index() {
  useEffect(() => {
    //get('/index-infos').then(() => {
    //  })
  }, []);
  return (
    <div>
      <Button type="primary">Index</Button>
      <Link to="/about">About</Link>
    </div>
  );
}
