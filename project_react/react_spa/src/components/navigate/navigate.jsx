import { useNavigate } from "react-router-dom";

export function mfNavigate({route}){
    const navigate = useNavigate();
    navigate(route);
}