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
    return <div className="member">
        <img src={"/members/" + photo} alt={name} />
        <p className="name">{name}</p>
        <p className="role">{role}</p>
    </div>;
};

export default Member;