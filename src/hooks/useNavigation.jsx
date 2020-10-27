import * as React from "react";
import { useHistory } from "react-router-dom";

export default function useNavigation() {
  const history = useHistory();

  const goTo = React.useCallback((to) => history.push(to), [history]);
  const goBack = React.useCallback(() => history.goBack(), [history]);
  const goForward = React.useCallback(() => history.goForward(), [history]);

  return { goTo, goBack, goForward };
}