
//Organismo
import SectionDonate from "~/components/organisms/section-donate/SectionDonate"
import SectionJoinOurTeam from "~/components/organisms/section-join-our-team/SectionJoinOurTeam"
import SectionTellYourStoryGetInvolved from "~/components/organisms/section-tell-your-story-get-involved/SectionTellYourStoryGetInvolved"

import { useI18n } from "~/i18n"

export default function GetInvolved() {

	const {
		GetInvolved_: { sectionDonate, sectionJoinOurTeam, sectionTellYouStory },
	  } = useI18n();

  

	return (
		<div className="max-w-[1440px] 100vw mx-[auto]">
            <SectionDonate TextProps={sectionDonate} ContainerTextProps="" ContainerTitleProps="" border="" alt=""/>
            <SectionJoinOurTeam TextProps={sectionJoinOurTeam} ContainerTextProps="" ContainerTitleProps="" border="" alt=""/>
            <SectionTellYourStoryGetInvolved TextProps={sectionTellYouStory} border="" alt=""/>          
		</div>
	);
}