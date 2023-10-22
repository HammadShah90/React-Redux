import { useSelector } from "react-redux/es/hooks/useSelector"

export default function Contact() {
    const { theme } = useSelector(state => state.theme)
    const { user } = useSelector(state => state.user)

    return (
        <div style={{ backgroundColor : theme === "light" ? "white" : "black", color : theme === "light" ? "black" : "white"}}>
            <h1 className="text-5xl">Contact</h1>
            <p className="text-2xl">
                This is the contact page.
            </p>
        </div>
    )
}