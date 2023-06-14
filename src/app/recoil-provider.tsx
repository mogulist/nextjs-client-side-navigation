"use client";

import React from "react";
import { RecoilRoot } from "recoil";

// Why RecoilProvider?
// https://beta.nextjs.org/docs/rendering/server-and-client-components#using-context-in-client-components

const RecoilProvider = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
