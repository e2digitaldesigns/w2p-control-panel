import React, { useEffect, useState } from "react";
import _findIndex from "lodash/findIndex";
import _cloneDeep from "lodash/cloneDeep";
import _map from "lodash/map";

import { primaryTheme } from "../../context/themeContext/themes";
import { useTemplate } from "../../hooks";
import { EnumContentMediaQuery } from "../../types";

export interface IntuseResponsiveBreakPointsHook {}

type TBreakPoints = { [key: string]: number };

export type TuseResponsiveBreakPointsHook = (
  targetElement: React.RefObject<Element>,
  breakPoints?: TBreakPoints[]
) => string;

const useResponsiveBreakPointsHook: any = (): any => {
  const pasreDefaultBreakPoints = (): TBreakPoints[] => {
    const keys: string[] = Object.keys(primaryTheme.mediaQuery);
    const vals: string[] = Object.values(primaryTheme.mediaQuery);

    const breaks = _map(keys, (key: string, index: number) => {
      return { [key]: parseInt(vals[index]) };
    });

    return breaks;
  };

  const findBreakPoint = (breakPoints: TBreakPoints[], width: number) => {
    const breakPointArray: number[] = _map(
      breakPoints,
      (breakPoint: TBreakPoints) => Object.values(breakPoint)[0]
    );

    const breakPointIndex = _findIndex(
      breakPointArray,
      (breakPointAmount: number) => width < breakPointAmount
    );

    if (breakPointIndex === -1) {
      return Object.keys(breakPoints[breakPoints.length - 1])[0];
    }

    return Object.keys(breakPoints[breakPointIndex])[0];
  };

  const useGetBreakPoint: TuseResponsiveBreakPointsHook = (
    targetElement,
    breakPoints = pasreDefaultBreakPoints()
  ) => {
    const [breakSize, setBreakSize] = useState<string>(
      Object.keys(breakPoints[0])[0]
    );

    const observer = React.useRef(
      new ResizeObserver(entries => {
        const { width } = entries[0].contentRect;
        setBreakSize(findBreakPoint(breakPoints, width));
      })
    );

    useEffect(() => {
      const target = targetElement.current;
      const observeCurrent = observer.current;
      const observeCurrentObs =
        observeCurrent && target ? observeCurrent.observe(target) : null;

      return () => {
        if (target && observeCurrentObs) {
          observeCurrent.unobserve(target);
        }
      };
    }, [targetElement, observer]);

    return breakSize;
  };

  const useSetOutletDivBreakPoint: any = (targetElement: any) => {
    const { templateState, setTemplateState } = useTemplate();
    const breakPoint = useGetBreakPoint(targetElement);

    useEffect(() => {
      const newState = _cloneDeep(templateState);
      newState.contentMediaQuery = breakPoint as EnumContentMediaQuery;
      setTemplateState(newState);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [breakPoint, useTemplate]);
  };

  return {
    useGetBreakPoint,
    useSetOutletDivBreakPoint
  };
};

export default useResponsiveBreakPointsHook;
