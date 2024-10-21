import Image from "next/image";
import hierarchy from "../../../images/hierarchy.jpg";

export default function Hierarchy(){
    return (
        <div className="flex justify-center items-center">
            <Image src={hierarchy} alt="hierarchy"/>
        </div>
    )
}