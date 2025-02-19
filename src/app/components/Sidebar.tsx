import Image from "next/image";
import logo from '../../../public/1-500px.png'
import Link from "next/link";

export default function Sidebar() {
    return (

        <div className="flex items-center justify-between">
            {/* Logo image */}
            <Link href="/"><Image src={logo} alt="logo" width={220} className="-mt-8 ml-10" /></Link>
            
            

            {/* Navigation link */}
            <div className="-mt-8 mx-40">
                <Link href="/" className="mr-16 p-2 text-fuchsia-50 hover:border-b-2 hover:border-blue-50">Home</Link>
                <Link href="https://www.linkedin.com/in/caio-dias-martins-26739b251/" className="p-2 text-fuchsia-50 hover:border-b-2 hover:border-blue-50">Creator</Link>
            </div>
            
        </div>
    )
}