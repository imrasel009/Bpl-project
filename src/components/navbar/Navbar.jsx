import dollarImg from "../../assets/dollar 1.png";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <img src={logoImg} alt="" />
            </div>
            <div className="flex-none border border-[#131313]/10 rounded-xl px-5 py-4">
                <button className="flex justify-between items-center gap-2 font-bold text-xl">
                    0 coins
                    <img src={dollarImg} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
