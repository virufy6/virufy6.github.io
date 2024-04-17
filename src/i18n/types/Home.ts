import { StaticImageData } from "next/image";

export interface Home {
    sectionTestOnline:       SectionTestOnline;
    sectionTestExplain:      SectionTestExplain;
    sectionCovidMap:         SectionCovidMap;
    sectionOurFounder:       SectionOurFounder;
    sectionVirufyCommunity:  SectionVirufyCommunity;
    sectionOurSupporters:    SectionOurSupporters;
    sectionMissionStatement: SectionMissionStatement;
    cardsTestimonials: CardsTestimonial[]
}

export interface SectionCovidMap {
    title:  string;
    text:   string;
    button: string;
}

export interface SectionMissionStatement {
    title:       string;
    buttonShare: string;
    buttonLearn: string;
}

export interface SectionOurFounder {
    title:       string;
    nameFounder: string;
    description: string;
    button:      string;
}

export interface SectionOurSupporters {
    title:  string;
    button: string;
}

export interface SectionTestExplain {
    title:      string;
    firstStep:  string;
    secondStep: string;
    stepThree:  string;
}

export interface SectionTestOnline {
    title:   string;
    text:    string;
    buttons: string[];
}

export interface SectionVirufyCommunity {
    title:                      string;
    descriptionVirufy:          string;
    titleBeliefStatement:       string;
    descriptionBeliefStatement: string;
}
export interface CardsTestimonial {
    id:          number;
    name:  string;
    testimonial: string;
    picture: StaticImageData
}
