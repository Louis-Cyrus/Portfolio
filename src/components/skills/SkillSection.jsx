import { SectionWrapper } from "../atom/SectionWrapper";
import { Skills } from "../atom/Skills";

export const SkillSection = () => {
    return (
        <SectionWrapper title="Skills">
            <div className="flex flex-col items-center gap-14">
                <div className="flex flex-col items-center gap-2">
                    <Skills className="w-full" />
                </div>
            </div>
        </SectionWrapper>
    );
}