import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const TeamMembers = ({ teamMembers }) => {
    return (
        <div className="text-center">
            <div className="max-w-2xl mx-auto mb-16">
                <h2 className="font-bold text-secondary-heading mb-4">
                    Meet the Leadership
                </h2>
                <p className="text-gray-600 text-paragraph">
                    We’re a passionate group of thinkers, builders, and problem-solvers dedicated to our mission.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, i) => (
                    <div key={i} className="text-center">
                        <div className="relative inline-block">
                            <div className="relative w-40 h-40 mx-auto mb-4">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="rounded-full object-cover shadow-soft"
                                />
                            </div>

                            {member.linkedin && (
                                <Link
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-2 right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary/80 transition"
                                >
                                    <FaLinkedinIn className="text-lg" />
                                </Link>
                            )}
                        </div>

                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-gray-500">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers;
