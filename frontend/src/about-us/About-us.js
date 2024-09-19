import SectionHeader from "../section-header/Section-header";
import AboutUsPoint from "./point/About-us-point";
import "./About-us.css";

export default function AboutUs(props) {
    return <div className="AboutUsContainer" id="about">
        <SectionHeader additionalClass="AboutUsHeaderWidth" text="ABOUT US"/>
        <div className="AboutUsPoints">
            <AboutUsPoint direction={true} imageClass="AboutUsImage1" image="image1" text="We provide a unique and comprehensive online service for creating a resume and finding a job in the IT field. Our platform helps job seekers in the IT industry present their skills and experience in the best possible light, and makes it easy and efficient to search for suitable vacancies."/>
            <AboutUsPoint direction={false} imageClass="AboutUsImage2" image="image2" text="Our platform uses advanced technologies and tools to ensure the high performance and reliability of our service. Our platform is optimized for fast page loading and easy navigation for a smooth user experience. We also guarantee the safety of your personal data and ensure the confidentiality of all information."/>
            <AboutUsPoint direction={true} imageClass="AboutUsImage3" image="image3" text="We are proud that our online service is becoming a reliable partner for those who seek to successfully develop in the IT field. Whether you are a beginner or a seasoned professional, our platform will provide you with all the tools and resources you need to further develop and succeed in your career."/>
        </div>
    </div>
}