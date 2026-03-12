const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    date: { type: Date, default: Date.now, required: true },
    checkInTime: { type: Date, required: true },
    checkOutTime: { type: Date, required: true },
    location: {
        type: {
            type: String,
            enum: ['Point'], // 'Point' to represent a geographical point
            required: true
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true
        },
    },
    status: {
        type: String,
        enum: ['present', 'absent', 'late', 'left-early'],
        required: true
    },
    method: {
        type: String,
        enum: ['face-recognition', 'qr-code', 'manual'],
        required: true
    },
    faceConfidence: { type: Number }, // Score between 0 and 100
    remarks: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Attendance', attendanceSchema);