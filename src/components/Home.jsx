import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { changeTheme } from '../redux/Slices/themeReducer';

export default function Home() {
    const { theme } = useSelector(state => state.theme)
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const themeHandler = () => {
        dispatch(changeTheme())
    }

    return (
        <div style={{ backgroundColor : theme === "light" ? "white" : "black", color : theme === "light" ? "black" : "white"}}>
            <h1 className="text-5xl">Home</h1>
            <p className="text-2xl">Welcome to the home page</p>
            <button onClick={themeHandler}>
                Light Mode
            </button>
        </div>
    )
}