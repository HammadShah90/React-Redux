import { useSelector } from "react-redux/es/hooks/useSelector"
export default function Portfolio() {
    const { theme } = useSelector(state => state.theme)
    const { user } = useSelector(state => state.user)
    return (
        <div style={{ backgroundColor : theme === "light" ? "white" : "black", color : theme === "light" ? "black" : "white"}}>
            <h1 className="text-5xl">Portfolio</h1>
            <p>This is my portfolio</p>
        </div>
    )
}