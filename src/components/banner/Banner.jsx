import heroImg from "../../assets/banner-main.png";
import "./Banner.css";
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-overlay bg"></div>
            <div className="flex flex-col items-center gap-6 text-neutral-content text-center">
                <div>
                    <img src={heroImg} alt="" />
                </div>
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h1>
                    <p className="mb-5">Beyond Boundaries Beyond Limits</p>
                    <button className="p-2 bg-[#E7FE29] text-[#131313] font-bold rounded-2xl hover:bg-warning cursor-pointer">
                        Claim Free Credit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
