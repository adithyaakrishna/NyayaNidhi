import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Our advocates and lawyers are working behind the scenes, we will come with the judgement soon :)">
    <img
      src="/images/xera.svg"
      alt="Themeptation"
      className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob"
    />
    <img
      src="/images/shapes.svg"
      alt="hero"
      className="absolute w-full left-24 bottom-24 animate-blob2"
    />
    <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
      <div className="text-center space-y-10">
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h1 className="text-7xl lg:text-9xl font-extrabold" style={{marginRight: "50px"}}>NyayaNidhi</h1>
        <img
          src="/images/NN.png"
          alt="hero"
          style={{width: "15%"}}
        />
        </div>
        <h3 className="font-light text-xl tracking-wider">
          10x Productivity of Indian Legal System
        </h3>
        {/* <h1 className="text-7xl lg:text-9xl font-extrabold">10X Productivity of Indian Legal System</h1> */}
        <p className="text-xl lg:text-2xl tracking-wide mx-10 ">
          Our advocates and lawyers are working behind the scenes :)
        </p>
      </div>
    </div>
    <div className="absolute bottom-5">
      <ul className="flex space-x-3">
        <li>
          <Link href="https://twitter.com/nyayanidhi">
            <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default IndexPage;
