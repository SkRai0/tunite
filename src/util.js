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
        }
    ]
}

export default songList;