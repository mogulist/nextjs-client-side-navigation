import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { allAtoms } from "@/stores";

export default function App({
  Component,
  pageProps: { initialRecoilState = {}, ...pageProps },
}: AppProps) {
  const initializeState = ({ set }: MutableSnapshot) => {
    Object.keys(initialRecoilState).map((key) => {
      const value = initialRecoilState[key];
      const atom = allAtoms[key as keyof typeof allAtoms];
      set(atom, value);
    });
  };

  return (
    <RecoilRoot initializeState={initializeState}>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
