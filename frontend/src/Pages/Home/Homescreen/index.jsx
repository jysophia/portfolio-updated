import HeroSection from "../HeroSection";

export default function Home () {
    return(
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello, I'm Sophia</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Software Engineer</span>{" "}
                    </h1>
                    <p className="hero--section-description">
                        *insert description*
                        <br/> *insert subdescription*
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="../img/SophiaKimProfilePic.png" alt="SophiaPhoto"/>
            </div>
        </section>
    )
}