import { useState } from "react";

const initialFormData = {
    title: '',
    artist: '',
};

const TrackForm = (props) => {

    const [formData, setFormData] = useState(
        props.selected ? props.selected : initialFormData
    );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.selected) {
            props.handleUpdateTrack(formData, props.selected._id);
        } else {
            props.handleAddTrack(formData);
        };
        setFormData(initialFormData);
        props.setIsFormOpen(false);
    };

    return (
        <div style={{
            border: '1px solid rgba(255,255,255,.87)',
            marginBottom: '5px',
        }}>
            <h2>
                {
                    props.selected
                    ? 'edit'
                    : 'new'
                }
            </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"> song title </label>
                <input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="artist"> artist </label>
                <input
                    id="artist"
                    name="artist"
                    value={formData.artist}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">{props.selected ? 'update' : 'add song'}</button>
            </form>
        </div>
    );
};

export default TrackForm