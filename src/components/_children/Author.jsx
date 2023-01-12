import { Link } from "react-router-dom";

export default function Author({ name, img, designation }) {
    if (!name && !img) return <></>;
    return (
        <div className="author flex py-5 ">
            <img src={img || ""} className="rounded-full h-[60px]" width={60} height={60} alt="author" />
            <div className="flex flex-col justify-center px-4">
                <Link to={"/"}><span className="text-md font-bold text-gray-800 hover:text-gray-600">{name || "No name"}</span></Link>
                <span className="text-sm text-gray-500">{designation || ""}</span>
            </div>
        </div>
    )
}