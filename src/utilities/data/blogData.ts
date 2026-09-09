export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  description: string;
  content: string[]; // Added this to hold the paragraphs
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    slug: "satisfying-collective-conscience-hindu-upper-caste",
    title: "Satisfying the Collective Conscience of Hindu Upper Caste in the Name of Sub Classification of SC/ST Reservation",
    author: "Rahul Sonpimple",
    date: "03/08/2024",
    imageUrl: "/images/blog3.jpg",
    description: "If one seriously goes beyond the popular political narrative around reservations constructed by the Hindu upper caste, then the illustration by Babasaheb Ambedkar takes us back to the origin of reservations...",
    content: [
      "If one seriously goes beyond the popular political narrative around reservations constructed by the Hindu upper caste, then the illustration by Babasaheb Ambedkar takes us back to the origin of reservations in India, not as mere welfare measures but as core negotiations between the Modern Indian State and Scheduled Castes as a minority. The question remains: Has the Indian state fulfilled this negotiation?",
      "Ironically, instead of asking why the majority of Dalits are landless, why only 9 percent of Dalits operate on agricultural land, why only 4 percent of SC and ST families have a member in government jobs, why the Brahmin community alone monopolizes 48 percent of the national income... the Supreme Court has given a verdict based on some hypothetically leading/dominant SC communities which do not exist on any paper or official document.",
      "Amusingly, not only does the present judgment by a seven-judge Constitution bench headed by Chief Justice of India DY Chandrachud lack empirical evidence, but it also overpowers the constitutional arrangements in this case, where any changes in SC/ST reservation should be the prerogative of Parliament and not the judiciary.",
      "In addition, the narrative around the sub-categorization of SC reservation is also part of vote bank politics of upper caste-led political parties, which aim to corner the politically conscious SC communities who historically have been challenging the supremacy of the upper castes.",
      "What is even more surprising in the present judgment is Justice BR Gavai's comment that 'the State must come up with a policy to identify the creamy layer among SC communities and take them out of the fold of affirmative action,' which echoes the popular contempt of the upper caste against SC/ST/OBC reservations.",
      "Lastly, the most important question we want to ask the seven-judge Constitution bench is in which sphere do they want to ensure the so-called 'true equality' they talked about? As reserved government jobs are reduced to only about 3 percent due to rapid privatization... will the Supreme Court ever go against the upper caste collective consciousness and stand in support of reservation in the private sector?"
    ]
  },
  {
    id: "2",
    slug: "charisma-without-organizational-leadership",
    title: "Charisma without Organizational Leadership is Abortive for Dalit Politics",
    author: "Rahul Sonpimple",
    date: "19/06/2024",
    imageUrl: "/images/blog2.jpg",
    description: "Charisma is elusive yet the most common term to define leadership. Charismatic leadership is usually perceived as essential and assenting, specifically in politics...",
    content: [
      "Charisma is elusive yet the most common term to define leadership. Charismatic leadership is usually perceived as essential and assenting, specifically in politics. However, the history of charismatic leadership may not allow one to continue with such romanticism. Nazism led by Hitler and Italian Fascism led by Mussolini are the two most discussed and disconsolate examples of charismatic leadership.",
      "Traditionally leadership of elite is presented as the natural authority to lead the oppressed masses. For instance, Gandhi’s contestation against Ambedkar’s claim as a leader of the erstwhile untouchables and presetting himself as a natural leader of all Hindus is a classic example of the elitist opposition to the subaltern autonomy.",
      "The history of the post-Ambedkar Dalit leadership, however, is marked by both a heroic rise and decline of the leadership. Dada Saheb Gaikwad who had mass followership but couldn’t sustain his charisma for a long time and under his leadership Republican Party of India (RPI) splintered twice...",
      "The experiences from earlier loosely organized movements and splintered charismatic leadership consequently led to the formation of BAMCEF under the aegis of Kanshi Ram and D.K. Khaparde in 1973. It was fashioned on the line of producing non-agitational – trained cadre-based organization with institutional-collective leadership against the individual charismatic authority.",
      "In 1985, Kanshi Ram decided to transform BAMCEF into a shadow organization. BAMCEF broke into fractions. The majority of BAMCEF activists and members were under the influence of Kanshi Ram which helped him turn BAMCEF into a shadow organization for BSP...",
      "The excessive celebration and importance of charismatic leadership in people’s movements cancel the role of the masses as participants and reduces them to merely agency-less followers. Ambedkar had a vision to create 'conscious disciplined' subaltern leadership balanced with organizational democracy and individuals. Sadly, even after such a long standing journey, Dalit politics and movements still revolve around excessive celebration of the leader’s charisma."
    ]
  },
  {
    id: "3",
    slug: "plights-of-migrants-and-economics-of-caste",
    title: "Plights of Migrants and Economics of Caste",
    author: "Rahul Sonpimple",
    date: "18/06/2024",
    imageUrl: "/images/blog1.jpg",
    description: "Human migration is generally defined as a permanent or temporary change of residence. One can observe migration as a universal phenomenon that exists in developed as well as most underdeveloped nations...",
    content: [
      "Human migration is generally defined as a permanent or temporary change of residence. One can observe migration as a universal phenomenon that exists in developed as well as most underdeveloped nations. In India factors such as work/employment, business, education, marriage, natural disasters, etc. have been listed as reasons for migration.",
      "According to the last Agricultural Census (2015-2016) majority of Dalits are landless and only 9 percent Dalits operate on agricultural land. It is in this context, the lack of education, customary landlessness, poverty, the absence of socio-cultural capital and family networks, and traditional monopoly of upper caste on the economy and employment force lowered caste and Adivasis communities to migrate in the cites and become cheap labor in the urban informal market.",
      "Like other developing countries, the major proportion of India’s economy is the informal economy, which is generally estimated to be more than 90 percent. Poor housing, limited access to formal financial services, rampant exploitation, violence by locals, and political exclusion are common problems faced by migrant workers in these urban megacities.",
      "Taking a cue from his 'Protestant Ethic and the Spirit of Capitalism', Max Weber (1916) theorized that due to its primordial caste structure and dogmatic belief in Hinduism, India will not reach the stage of what he called the 'Spirit of Capitalism'. His analysis of caste as status groups that is a source of honor, prestige, and power, which in turn led to gain of economic power by India’s upper caste, stands true.",
      "The traditional caste-based economic systems like ‘Jajmani system’ in North India sanctioned the ‘restrictions and immobility’ of lower caste worker which reproduced the economic inequality and maintained an unequal oppressive exchange system.",
      "In this lockdown Dalit poet, Omprakash Valmiki’s poem ‘Thakur Ka Kuan' seems to echo loudly. He unravels the everyday material realities of dominant and marginalised communities in the Indian village. Where both the modes and means of production belong to the upper-castes. The lowered castes are mere surplus bodies for the caste-based economy. Valmiki asks in the end, what belongs to the lowered castes and to whom do they belong- the village, the city, the nation? Sadly, this question remains unanswered even today."
    ]
  },
];