
//Organismo
import Section1 from "~/components/organisms/section-1/Section1"
import Section8 from "~/components/organisms/section-8/Section8"

import howItWorks1 from "~/assets/static/images/howItWorks/1.jpg"
import howItWorksStep1 from "~/assets/static/images/howItWorks/step1.jpg"
import howItWorksStep2 from "~/assets/static/images/howItWorks/step2.jpg"
import howItWorksStep3 from "~/assets/static/images/howItWorks/step3.jpg"

export default function HowItWorks() {

	const buttons = ["SHARE YOUR COUGH"]
	const label = ["SHARE YOUR COUGH"]

	return (
		<>
			<h1 className="text-sky-600 text-3xl m-4">How it Works</h1>

			<p className="text-gray-300">Section - 1</p>
			<Section1
				//TitleText
				TitleSize="h1"
				TitleLabel="Share your cough"
				TextSize="normal"
				TextLabel={"Your cough helps us improve our predictive model, thus being crucial in the fight against COVID-19. Contribute to the progress we are making by sharing your cough!"}
				ContainerTextProps="items-start h-[100%] mr-4"
				//Image
				size="pr90"
				border="none"
				route={howItWorks1}
				alt="imagen de algo"
				//Buttons
				buttons={buttons}
				label={label}
				type="primary"
				sizeBtn="medium"
				path="/"
			/>

			<p className="text-gray-300">Section - 8</p>
			<Section8
				//Image
				sizeImg="pr90"
				border="none"
				route1={howItWorksStep1}
				route2={howItWorksStep2}
				route3={howItWorksStep3}
				alt="Section 7"
				//TitleText
				TitleSize="h3"
				TitleLabel1="Recording your cough"
				TitleLabel2="Processing"
				TitleLabel3="Results"
				TextSize="normal"
				TextLabel1={"Your cough helps us improve our predictive model, thus being crucial in the fight against COVID-19. Contribute to the progress we are making by sharing your cough!"}
				TextLabel2={"Our artificial intelligence algorithm processing the recording to detect Covid-19 based on cough sounds. "}
				TextLabel3={"Within minutes, our Artificial intelligence algorithm is able to accurately predict your test results through the app."}
				ContainerTextProps=""				
			/>


		</>
	);
}