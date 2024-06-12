import { FC, ReactElement, ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { getStateUserEmail } from "./selectors";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
    isNotNeedAuth: boolean;
    component: ReactElement;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ isNotNeedAuth, component }) => {
    const userEmail = useAppSelector(getStateUserEmail);
    const location = useLocation();

    // есть данные о юзере, но роут только для не авториз. юзеров.
    if (isNotNeedAuth && userEmail) {
        const { from } = location.state;
        return <Navigate to={from || "/"} />;
    }

    // только для авториз. но нет данных
    if (!isNotNeedAuth && !userEmail) {
        return <Navigate
            to={"/login"}
            state={{
                from: {
                    pathname: location.pathname
                }
            }}
        />;
    }

    // для авториз. и данные есть || для неавториз. и данных нет.
    return component;
};

export const UnAuthRoute: FC<{ component: ReactElement }> = ({ component }) => {
    return <ProtectedRoute isNotNeedAuth={true} component={component} />;
};
export const AuthRoute: FC<{ component: ReactElement }> = ({ component }) => {
    return <ProtectedRoute isNotNeedAuth={false} component={component} />
};