import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const FooterComponent = () => {
    return(
        <>
            <section className="h-auto w-full bg-white p-4 flex flex-wrap gap-4 items-center justify-between relative bottom-0">
                <div className="flex flex-wrap items-center text-xl">
                    © Copyright 2023. All right reserved, API by TMDB
                </div>
                <div className="text-3xl text-black gap-4 flex flex-wrap">
                    <a href="" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="hover:text-red hover:scale-125 ease-in-out duration-300"/>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="hover:text-red hover:scale-125 ease-in-out duration-300"/>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="hover:text-red hover:scale-125 ease-in-out duration-300"/>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="hover:text-red hover:scale-125 ease-in-out duration-300"/>
                    </a>
                </div>
            </section>
        </>
    )
}

export default FooterComponent