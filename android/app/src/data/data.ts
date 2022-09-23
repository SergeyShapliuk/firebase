

const photo = ["https://library.sportingnews.com/styles/crop_style_16_9_tablet/s3/2022-09/Russell-Wilson-091222-getty-ftr.jpg?itok=n1MTaPxW",
    "https://kick-league.ru/wp-content/uploads/2022/09/1662904800_Real-v-volevom-stile-pereigral-Mal-orku.jpg",
    "https://kick-league.ru/wp-content/uploads/2022/09/1662904800_Real-v-volevom-stile-pereigral-Mal-orku.jpg",
    "https://library.sportingnews.com/styles/crop_style_16_9_tablet/s3/2022-05/Champions%20League%20lineups%20logo%20stadium%20Man%20City%20Sporting%20CP%20052722.jpg?itok=56sfcd1u",
    "https://library.sportingnews.com/styles/crop_style_16_9_tablet/s3/2022-09/Russell-Wilson-091222-getty-ftr%20copy.jpg?itok=5xnsYWWx",
    "https://e0.365dm.com/22/09/1600x900/skysports-jack-grealish-man-city_5902010.jpg?20220917123735",
    "https://e0.365dm.com/22/09/1600x900/skysports-england-fa-world-cup_5906412.jpg?20220921083103",
    "https://e0.365dm.com/22/06/1600x900/skysports-gareth-southgate_5811172.jpg?20220621120116",
    "https://e0.365dm.com/21/12/1600x900/skysports-france-uefa-nations-league_5617362.jpg?20211216163047",
    "https://e0.365dm.com/21/06/1600x900/skysports-goran-pandev-north_5414253.jpg?20210613191720",
    "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/12046/production/_126789737_gettyimages-1189720107.jpg",
    "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/AB16/production/_126789734_gettyimages-1425007557.jpg"
]

const title = ["Broncos-Seahawks overreactions: Russell Wilson can't hack it",
    "The first-place Seahawks can shock everyone",
    "Geno Smith proved he was the right starting QB",
    "UEFA Champions League song, official theme, anthem, lyrics, name and downloads",
    "The Broncos' offense looks like an absolute mess with Russell Wilson and Nathaniel Hackett",
    "Grealish: I want to be friends with the media!",
    "The Belgium international's viewpoint was put to Grealish, who smiled and replied: `I`ll ask you, do you?",
    "England's World Cup Group B fixtures",
    "How does the Nations League work?",
    "What else is at stake?",
    "Antoine Griezmann: The story behind why the Atletico Madrid forward is only playing 30 minutes per game",
    "Are Atletico limiting the ability of Antoine Griezmann to do his job?"
]

const description = ["The Broncos had plenty of hype going into their 2022 NFL season with Russell Wilson at quarterback. A lot of that noise faded on Monday night as Wilson and Denver fell in front of the loud crowd in his former home in Week 1.",
    "The Rams looked anything but Super in their opening loss to the Bills. The 49ers limped through an epic fail against the Bears, a supposed NFC also-ran. The Cardinals were routed at home wire-to-wire by the Chiefs.",
    "Smith started out red-hot and cooled only a little (23-of-28 passing, 195 yards, 2 TDs, 119.5 passer rating, 7.0 YPA) in outdueling Wilson with much lesser volume. The Seahawks also were competitive in every start he made for an injured Wilson last season.",
    "The UEFA Champions League anthem is one of the most recognizable tunes in sports. Its lyrics and tones can conjure both football nostalgia of memorable moments gone by and the promise for future drama to come.",
    "Wilson's arrival was expected to send Denver's offense miles higher, closest to the level it was early in the Peyton Manning era. Instead of dominating a shaky and soft zone defense — which Manning himself pointed out several times on his ESPN broadcast — the Broncos failed to execute in key situations.",
    "After City's 3-0 win at Molineux on Saturday, Kevin De Bruyne suggested English players like Grealish are unfairly targeted because of the nation's mentality of criticising their own.",
    "Grealish has been quick to ingratiate himself with England fans since making his debut in September 2020, but the fact 11 of his 23 caps have come as a substitute underlines the work needed to step up.",
    "Gareth Southgate has unveiled his final pre-World Cup England squad - but who would make your starting XI?",
    "What would your England starting XI look like if the World Cup started today and all players were available? Use our interactive selector to pick your team below, screenshot your selections and share on Twitter @SkyFootball.",
    "Europe's sides have been divided into four leagues, with A, B and C containing 16 teams and D containing seven. Leagues A, B and C have then been split into four groups of four, while League D has one group of four and one of three.",
    " Teams grouped together are playing each other home and away. The group winners in Leagues B, C and D will be promoted to the next league up, while the teams finishing bottom of their groups in Leagues A, B and C will be relegated to the lower division.",
    "Performance in the Nations League will also be used to determine seeding for Euro 2024 qualifying, with the draw taking place on October 9 and matches being held between March and November 2023.",
]

export type DataType = {
    id: number
    title: string
    photo: string
    description: string
}
export const data: DataType[] = new Array(12).fill(null).map((_, index) => ({
    id: index + 1,
    title: title[index],
    photo: photo[index],
    description: description[index]
}))

