const NowPlaying = (props) => {

    if (props.playing) {
        return (
            <div style={{
                border: '1px solid rgba(255,255,255,.87)',
            }}>
                <h1>now playing</h1>
                <p>Title: {props.playing.title}</p>
                <p>Artist: {props.playing.artist}</p>
            </div>
        );
    } else {
        return <></>
    };
};

export default NowPlaying