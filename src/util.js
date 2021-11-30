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
        }
    ]
}

export default songList;