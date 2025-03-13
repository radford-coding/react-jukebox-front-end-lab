const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const indexTracks = async () => {
    try {
        const res = await fetch(BASE_URL);
        return res.json();
    } catch (error) {
        console.log(error);
    };
};

const createTrack = async (formData) => {
    // console.log(formData);
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        return res.json();
        // console.log(formData);
    } catch (error) {
        console.log(error);
    };
};

const updateTrack = async (formData, trackId) => {
    try {
        // const res = await fetch(BASE_URL);
        // return res.json();
        console.log(formData, trackId);
    } catch (error) {
        console.log(error);
    };
};

const deleteTrack = async (trackId) => {
    try {
        // const res = await fetch(BASE_URL);
        // return res.json();
        console.log(trackId);
    } catch (error) {
        console.log(error);
    };
};

export {
    indexTracks,
    createTrack,
    updateTrack,
    deleteTrack,
};