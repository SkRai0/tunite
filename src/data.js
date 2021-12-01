import { v4 as uuidv4 } from "uuid";

const songList = () =>{
    return [
        {
            name: "Payphone",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/Payphone-Icon.jfif?alt=media&token=740541e6-0284-400c-8e57-e3ffd0af79e9",
            artist: "Maroon 5",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/Payphone.mp3?alt=media&token=7f6d8e99-5543-4725-b460-d79752888512",
            id: uuidv4(),
            active: true,
            color: ['#770F9C','#EC4EB0']
        },
        {
            name: "Call You Mine",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/The_Chainsmokers_-_Call_You_Mine.png?alt=media&token=17421fe8-1de2-4c43-9a0a-bbe41cb8cb3c",
            artist: "Chainsmokers, Babe Rexha",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/The-Chainsmokers-Call-You-Mine-Official-Video-ft.-Bebe-Rexha.mp3?alt=media&token=cbf809b5-e966-44a9-92b5-df4cca556f2f",
            id: uuidv4(),
            active: false,
            color: ['#2A2945','#ECCD91']
        },
        {
            name: "In The Name Of Love",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/ab67616d0000b2738c77bcf5f5a227d270d23370.jfif?alt=media&token=e350425a-1ff0-46fc-b09c-3fd20c0b4ec0",
            artist: "Martin Garix, Babe Rexha",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/Martin-Garrix-Bebe-Rexha-In-The-Name-of-Love-(englishsongs.wapkiz.com).mp3?alt=media&token=cca7b605-3168-43a3-b538-cd59c15fcc02",
            id: uuidv4(),
            active: false,
            color: ['#2A2945','#ECCD91']
        },
        {
            name: "DJ Got Us Fallin' In Love",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/ab67616d0000b27386b0c9728ad3ed338eaeea79.jfif?alt=media&token=56d713b7-57df-4dce-9d10-99cd30d9114f",
            artist: "Usher, Pitbull",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/usher-dj-got-us-falling-in-love.mp3?alt=media&token=b6fbb08b-d3da-423f-9716-4d7f71c4e5bd",
            id: uuidv4(),
            active: false,
            color: ['#2A2945','#ECCD91']
        },
        {
            name: "Who Do You Love",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/The_Chainsmokers_-_Who_Do_You_Love.png?alt=media&token=891d7471-e2fe-4c9a-9024-7b1daad22c20",
            artist: "Chainsmokers, 5 seconds of summer",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/The-Chainsmokers-Who-Do-You-Love-Official-Video-ft.-5-Seconds-of-Summer.mp3?alt=media&token=e64098fe-061f-43fc-a057-f5443ea4477d",
            id: uuidv4(),
            active: false,
            color: ['#2A2945','#ECCD91']
        },
        {
            name: "Tigini",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/crop_480x480_4305455.jpg?alt=media&token=ec5255b3-bb07-4357-9cb8-0ec07be3b8b0",
            artist: "Kikimotelaba",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/Tigini(PagalWorld).mp3?alt=media&token=827c178f-29ac-4e2e-8aba-1ec7a11eecc2",
            id: uuidv4(),
            active: false,
            color: ['#2A2945','#ECCD91']
        },
        {
            name: "You Broke Me First",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/crop_480x480_3121608.jpg?alt=media&token=43eb9e74-98db-4b59-b5f1-468059e91932",
            artist: "Tate McRae",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-79921.appspot.com/o/Tate-McRae-you-broke-me-first-Official-Video.mp3?alt=media&token=e0b4edc1-4d94-43ee-8ee8-405933e77caa",
            id: uuidv4(),
            active: false,
            color: ['#2A2945','#ECCD91']
        }
    ]
}

export default songList;