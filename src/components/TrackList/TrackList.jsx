const TrackList = (props) => {


    return (
        <div>
            <h1>track list</h1>
            <div>
                {!props.tracks.length
                    ? <h2>no tracks yet</h2>
                    : <ul>
                        {props.tracks.map((track) => (
                            <li
                                key={track._id}
                                style={{
                                    cursor: 'pointer',
                                    color: '#646CFF'
                                }}
                                onClick={() => console.log('clicked', track.title)}
                            >
                                <p>{track.title} by {track.artist}</p>
                                <button>play</button>
                                <button
                                    onClick={() => props.handleFormVisible(track)}
                                    disabled={props.isFormOpen && props.selected === track}
                                >edit</button>
                                <button>remove</button>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    );
};

export default TrackList