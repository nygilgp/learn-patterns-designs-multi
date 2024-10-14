import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import teamMembers from '../data/teamMembers.json';

function TeamMember({ name }) {
  const value = useOutletContext();
  const { memberId } = useParams();
  let member = {};
  if (memberId) {
    member = teamMembers.find((m) => m.id === memberId);
  }
  return (
    <div>
      Team Member - {name || member.name}
      <p>{value}</p>
    </div>
  );
}

export default TeamMember;
