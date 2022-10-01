import Title from "./Title";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <Title
                mainTxt="About This App">
                <p classNameName="fs-4">What make BizAd the #1 app for <br></br> advertising businesses</p>
            </Title>

            <div className="text-center p-5 shadow-4 rounded-3">
            <p>
                Everyday many business owners choose to use our app to <br></br> advertise their business and to gain more traction to their <br></br> website and online stor.
            </p>
            <Link to="/" type="button" className="btn btn-primary">
                Start Today
                </Link>
            </div>
        </>
    );
}

export default About;