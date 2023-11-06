import React from 'react';
import clsx from 'clsx';
import { skills } from '../../lib/skill'; 

/**
 * @param className string
 * @constructor
 */
export const Skills = ({ className }) => {
  return (
    <div className={clsx("flex flex-wrap justify-around gap-4 mt-5", className)}>
      {skills.map((skillCategory) => (
        <div key={skillCategory.category} className="flex flex-col items-center">
          <h3 className="mb-3 text-2xl font-bold">{skillCategory.category}</h3>
          <div className="flex flex-row gap-6">
            {skillCategory.list.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-1 p-4 transition-colors rounded-xl text-primary bg-paper hover:bg-secondary">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
