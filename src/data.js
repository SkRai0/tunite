import { v4 as uuidv4 } from "uuid";

const songList = () =>{
    return [
        {
            name: "Payphone",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Covers%2FPayphone-Icon.jfif?alt=media&token=e79e0ce1-8586-41fa-b895-b34b8daf2e1d",
            artist: "Maroon 5",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Songs%2FPayphone.mp3?alt=media&token=702c4fc9-1a5e-4d2f-a9d5-b839a1fee0f7",
            id: uuidv4(),
            active: true,
            color: ['#770F9C','#EC4EB0']
        },
        {
            name: "Call You Mine",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Covers%2FThe_Chainsmokers_-_Call_You_Mine.png?alt=media&token=d0ff7fe1-fc65-443c-b44d-e3b105b31b5a",
            artist: "Chainsmokers, Babe Rexha",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Songs%2FThe-Chainsmokers-Call-You-Mine-Official-Video-ft.-Bebe-Rexha.mp3?alt=media&token=c0dbfd3b-2cf8-4373-a35e-ed62fd4c36df",
            id: uuidv4(),
            active: false,
            color: ['#2A2945','#ECCD91']
        },
        {
            name: "In The Name Of Love",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Covers%2Fab67616d0000b2738c77bcf5f5a227d270d23370.jfif?alt=media&token=bcb51c9b-cfc4-45e3-a01a-82232930924a",
            artist: "Martin Garix, Babe Rexha",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Songs%2FMartin-Garrix-Bebe-Rexha-In-The-Name-of-Love-(englishsongs.wapkiz.com).mp3?alt=media&token=4d30a379-9df1-433d-bfee-2e9f2fcbdd3b",
            id: uuidv4(),
            active: false,
            color: ['#2A2945','#ECCD91']
        },
        {
            name: "DJ Got Us Fallin' In Love",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Covers%2Fab67616d0000b27386b0c9728ad3ed338eaeea79.jfif?alt=media&token=5145e26c-3f0f-4d59-a451-e1786de6df2d",
            artist: "Usher, Pitbull",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Songs%2Fusher-dj-got-us-falling-in-love.mp3?alt=media&token=890f22d3-6573-46b0-8e7a-9878e8db20af",
            id: uuidv4(),
            active: false,
            color: ['#2A2945','#ECCD91']
        },
        {
            name: "Who Do You Love",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Covers%2FThe_Chainsmokers_-_Who_Do_You_Love.png?alt=media&token=a4ad1d0e-ab4b-4069-b14c-03117fe933b6",
            artist: "Chainsmokers, 5 seconds of summer",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Songs%2FThe-Chainsmokers-Who-Do-You-Love-Official-Video-ft.-5-Seconds-of-Summer.mp3?alt=media&token=7434cbdc-05d6-428c-845c-84866441a088",
            id: uuidv4(),
            active: false,
            color: ['#2A2945','#ECCD91']
        },
        {
            name: "Tigini",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Covers%2Fcrop_480x480_4305455.jpg?alt=media&token=7ea63d26-87c1-4715-8a29-8ffc65de8c33",
            artist: "Kikimotelaba",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Songs%2FTigini(PagalWorld).mp3?alt=media&token=edcaaa57-ee0e-474b-8fbd-f824da4e102f",
            id: uuidv4(),
            active: false,
            color: ['#2A2945','#ECCD91']
        },
        {
            name: "You Broke Me First",
            cover: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Covers%2Fcrop_480x480_3121608.jpg?alt=media&token=93ea936d-7afa-4d00-9b95-2d568417dbb6",
            artist: "Tate McRae",
            audio: "https://firebasestorage.googleapis.com/v0/b/tunite-47e92.appspot.com/o/Songs%2FTate-McRae-you-broke-me-first-Official-Video.mp3?alt=media&token=25d86236-f458-4d89-8e94-9e59fe11f444",
            id: uuidv4(),
            active: false,
            color: ['#2A2945','#ECCD91']
        }
    ]
}

export default songList;