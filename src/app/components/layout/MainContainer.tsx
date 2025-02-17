import Sidebar from "../Sidebar"

interface Props {
    children: React.ReactNode
} 



export default function MainContainer({children}: Readonly<Props>) {
    return (
        <>
                <Sidebar />
                {children}
        </>
    )
}