import fontawesome from "@fortawesome/fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useDate } from "./UpdateTime";

fontawesome.library.add(faCheckSquare, faCoffee, faGithub);

function Navbar() {
    //   const [count, setCount] = useState(0);
    const date = useDate();
    const comingsoon = () => {
        console.log("Coming soon");
        // return <div className="text-center">coming soon</div>;
    };
    return (
        <nav className="max-w-screen-xl grid grid-cols-12 items-center justify-between lg:space-y-0 space-y-1 mx-auto p-4">
            <div className="lg:order-1 lg:col-span-4 col-span-6 flex justify-start">
                <a href="#" className="text-white block text-2xl font-semibold">
                    <span className="text-green-400">i</span>amdhakrey
                    <span className="text-green-400">.</span>dev
                </a>
            </div>

            <div className="lg:col-span-4  lg:order-3 col-span-6 flex justify-end">
                <a
                    href="#"
                    target="_blank"
                    className="block text-green-400 font-source tracking-wide"
                >
                    /blogs
                </a>
                <pre className="text-white"> </pre>
                <a
                    href="https://t.me/iamdhakrey"
                    target="_blank"
                    className="block text-green-400 font-source tracking-wide"
                    // onMouseOver={comingsoon()}
                >
                    /telegram
                </a>
                <pre className="text-white"> </pre>
                <a
                    href="https://github.com/iamdhakrey/"
                    target="_blank"
                    className="block text-green-400 font-source tracking-wide"
                >
                    /github
                </a>
            </div>

            <div className="lg:col-span-4 lg:order-2 col-span-12 flex lg:justify-center justify-start">
                <span className="text-green-400 text-sm tracking-wide">
                    {date.date} {date.time}
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
