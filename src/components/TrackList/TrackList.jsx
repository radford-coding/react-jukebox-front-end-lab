const TrackList = (props) => {


    return (
        <div>
            <h1>track list</h1>
            <div style={{
                height: '40vh',
            }}>
                {!props.tracks.length
                    ? <h2>no tracks yet</h2>
                    : <ul className="list-container">
                        {props.tracks.map((track) => (
                            <li
                                key={track._id}
                                style={{
                                    cursor: 'pointer',
                                    color: '#646CFF'
                                }}
                                onClick={() => console.log('clicked', track.title)}
                            >
                                <p>{track.title} <br /> by <br />{track.artist}</p>
                                <div>
                                    <button
                                        onClick={() => props.handlePlay(track)}
                                    >
                                        play
                                    </button>
                                    <button
                                        onClick={() => props.handleFormVisible(track)}
                                        disabled={props.isFormOpen && props.selected === track}
                                    >
                                        edit
                                    </button>
                                    <button
                                        onClick={() => props.handleRemoveTrack(track._id)}
                                    >
                                        remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    );
};

export default TrackList