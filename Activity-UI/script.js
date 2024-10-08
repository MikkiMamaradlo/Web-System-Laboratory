const songList = document.getElementById('songList');
const songTitleInput = document.getElementById('songTitle');
const artistInput = document.getElementById('artist');
const addBtn = document.getElementById('addbtn');
const searchInput = document.getElementById('searchInput');


let songs = [
    { title: "Synesthesia", artist: "BINI" },
    { title: "Your Song", artist: "BINI" },
    { title: "Heaven Knows", artist: "BINI" },
    { title: "Kanit Kailan", artist: "BINI" }
];


function renderSongs(filteredSongs = songs) {
    songList.innerHTML = '';

    filteredSongs.forEach((song, index) => {
        const songItem = document.createElement('li');
        songItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'py-1');
        songItem.innerHTML = `
            <div>
                <p class="song-name">${song.title}</p>
                <small class="s-name text-muted">${song.artist}</small>
            </div>
            <button class="btn btn-danger btn-sm" onclick="deleteSong(${index})">Delete</button>
        `;
        songList.appendChild(songItem);
    });
}


addBtn.addEventListener('click', () => {
    const title = songTitleInput.value.trim();
    const artist = artistInput.value.trim();

    if (title && artist) {

        songs.push({ title, artist });
        songTitleInput.value = '';
        artistInput.value = '';
        renderSongs();
    } else {
        alert('Please enter both song title and artist');
    }
});


function deleteSong(index) {
    songs.splice(index, 1);
    renderSongs();
}


searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredSongs = songs.filter(song => 
        song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query)
    );
    renderSongs(filteredSongs); 
});

renderSongs();
