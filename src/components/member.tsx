const Member = ({
    name,
    photo,
    role,
    instagram,
    linkedin,
    github,
    web,
}: {
    name: string;
    photo: string;
    role: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
    web?: string;
}) => {
    return (
        <div className="member">
            <img src={"/members/" + photo} alt={name} className="photo" />
            <div className="socials">
                {instagram != null ? (
                    <a href={instagram} target="_blank" rel="noreferrer">
                        <img src="/icons/instagram.svg" alt="Instagram" />
                    </a>
                ) : null}
                {linkedin != null ? (
                    <a href={linkedin} target="_blank" rel="noreferrer">
                        <img src="/icons/linkedin.svg" alt="LinkedIn" />
                    </a>
                ) : null}
                {github != null ? (
                    <a href={github} target="_blank" rel="noreferrer">
                        <img src="/icons/github.svg" alt="GitHub" />
                    </a>
                ) : null}
                {web != null ? (
                    <a href={web} target="_blank" rel="noreferrer">
                        <img src="/icons/web.svg" alt="Website" />
                    </a>
                ) : null}
            </div>
            <p className="name">{name}</p>
            <p className="role">{role}</p>
        </div>
    );
};

export default Member;
