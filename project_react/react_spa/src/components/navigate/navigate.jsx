import { useNavigate } from "react-router-dom";

export function MfNavigate({route}){
    const navigate = useNavigate();
    navigate(route);

}