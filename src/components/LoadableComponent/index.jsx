/*
 * @Description:
 * @Author: Luke Z
 * @Date: 2021-05-12 23:36:05
 * @LastEditors: Luke Z
 * @LastEditTime: 2021-05-29 14:10:16
 * @FilePath: /ack-slh-frontend/src/utils/Loadable/index.tsx
 */
import React from "react";
import Loadable from "react-loadable";

//通用的过场组件
const LoadingComponent = (props) => {
  return <div>Loading</div>;
};

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
const load = (loader, loading = LoadingComponent) => {
  return Loadable({
    loader,
    loading,
  });
};
export default load;
