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
                    <a href={instagram} >
                        <img src="/icons/instagram.svg" />
                    </a>
                ) : null}
                {linkedin != null ? (
                    <a href={linkedin} >
                        <img src="/icons/linkedin.svg" />
                    </a>
                ) : null}
                {github != null ? (
                    <a href={github} >
                        <img src="/icons/github.svg" />
                    </a>
                ) : null}
                {web != null ? (
                    <a href={web} >
                        <img src="/icons/web.svg" />
                    </a>
                ) : null}
            </div>
            <p className="name">{name}</p>
            <p className="role">{role}</p>
        </div>
    );
};

export default Member;
