
const photo = ["https://library.sportingnews.com/styles/crop_style_16_9_tablet/s3/2022-09/Russell-Wilson-091222-getty-ftr.jpg?itok=n1MTaPxW",
    "https://kick-league.ru/wp-content/uploads/2022/09/1662904800_Real-v-volevom-stile-pereigral-Mal-orku.jpg",
"https://kick-league.ru/wp-content/uploads/2022/09/1662904800_Real-v-volevom-stile-pereigral-Mal-orku.jpg",
"https://library.sportingnews.com/styles/crop_style_16_9_tablet/s3/2022-05/Champions%20League%20lineups%20logo%20stadium%20Man%20City%20Sporting%20CP%20052722.jpg?itok=56sfcd1u",
"https://library.sportingnews.com/styles/crop_style_16_9_tablet/s3/2022-09/Russell-Wilson-091222-getty-ftr%20copy.jpg?itok=5xnsYWWx"]

const title=["Broncos-Seahawks overreactions: Russell Wilson can't hack it",
    "The first-place Seahawks can shock everyone",
"Geno Smith proved he was the right starting QB",
"UEFA Champions League song, official theme, anthem, lyrics, name and downloads",
    "The Broncos' offense looks like an absolute mess with Russell Wilson and Nathaniel Hackett"
]
const description = ["The Broncos had plenty of hype going into their 2022 NFL season with Russell Wilson at quarterback. A lot of that noise faded on Monday night as Wilson and Denver fell in front of the loud crowd in his former home in Week 1.",
    "The Rams looked anything but Super in their opening loss to the Bills. The 49ers limped through an epic fail against the Bears, a supposed NFC also-ran. The Cardinals were routed at home wire-to-wire by the Chiefs.",
"Smith started out red-hot and cooled only a little (23-of-28 passing, 195 yards, 2 TDs, 119.5 passer rating, 7.0 YPA) in outdueling Wilson with much lesser volume. The Seahawks also were competitive in every start he made for an injured Wilson last season.",
"The UEFA Champions League anthem is one of the most recognizable tunes in sports. Its lyrics and tones can conjure both football nostalgia of memorable moments gone by and the promise for future drama to come.",
"Wilson's arrival was expected to send Denver's offense miles higher, closest to the level it was early in the Peyton Manning era. Instead of dominating a shaky and soft zone defense — which Manning himself pointed out several times on his ESPN broadcast — the Broncos failed to execute in key situations."
]

export type DataType={
    id:number
    title:string
    photo:string
    description:string
}
export const data:DataType[]= new Array(10).fill(null).map((_, index) => ({
    id:index + 1,
    title:title[index],
    photo: photo[index],
    description: description[index]
}))