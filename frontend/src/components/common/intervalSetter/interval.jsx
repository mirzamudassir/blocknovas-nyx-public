import { useState } from 'react';
import axios from 'axios';

const IntervalSetterComp = () => {
    const [interval, setInterval] = useState(1);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await axios.post('http://localhost:5000/set-interval', { interval });
        alert('Interval updated!');
        } catch (err) {
            console.error('Error updating interval:', err);
            setError('Failed to update interval. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Set Cron Job Interval</h2>
            <form onSubmit={handleSubmit}>
                <label style={styles.label}>
                    Set Interval (minutes):
                    <input
                        type="number"
                        value={interval}
                        onChange={(e) => setInterval(e.target.value)}
                        min="1"
                        style={styles.input}
                    />
                </label>
                <button type="submit" style={styles.button}>Update Interval</button>
                {error && <p style={styles.error}>{error}</p>}
            </form>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '300px',
        margin: '20px auto',
        textAlign: 'center',
    },
    label: {
        display: 'block',
        marginBottom: '10px',
    },
    input: {
        width: '100%',
        padding: '8px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        marginTop: '10px',
    },
};

export default IntervalSetterComp;
