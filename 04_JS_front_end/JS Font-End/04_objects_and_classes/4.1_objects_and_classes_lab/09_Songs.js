function songs(songs) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songsArr = [];
    let songsCount = songs.shift();
    let typeSong = songs.pop();

    for (let song of songs) {
        let [type, name, time] = song.split('_');
        let currentSong = new Song(type, name, time);
        songsArr.push(currentSong);
    }

    if (typeSong === 'all') {
        songsArr.forEach((s) => console.log(s.name));
    }
    else {
        let filtered = songsArr.filter((s) => s.type === typeSong);
        filtered.forEach((s) => console.log(s.name));
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]);

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);