import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      <Button type="primary">About</Button>
      <Link to="/">index</Link>
    </div>
  );
}
