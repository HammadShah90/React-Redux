import { useSelector } from "react-redux/es/hooks/useSelector"

export default function About() {
    const { theme } = useSelector(state => state.theme)
    const { user } = useSelector(state => state.user)

    return (
        <div style={{ backgroundColor : theme === "light" ? "white" : "black", color : theme === "light" ? "black" : "white"}}>
            <h1 className="text-5xl">About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
    )
}