import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data));
  }, []);
  return (
    <div className="my-32">
      <div className="text-center">
        <h5 className="text-base font-bold text-orange uppercase">Team</h5>
        <h2 className="text-5xl font-bold leading-tight mt-5">Meet Our Team</h2>
        <p className="py-2 text-gray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-24  mt-10">
        {teamMembers.map((teamMember) => (
          <TeamCard key={teamMember.id} teamMember={teamMember} />
        ))}
      </div>
    </div>
  );
};

export default Team;
