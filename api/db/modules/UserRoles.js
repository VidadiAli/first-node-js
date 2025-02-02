const mongoose = require("mongoose");

const schema = mongoose.Schema({
    roleId: { type: mongoose.SchemaType.ObjectId, required: true },
    userId: { type: mongoose.SchemaType.ObjectId, required: true }
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

class UserRoles extends mongoose.Model {

}

schema.loadClass(UserRoles);
module.exports = mongoose.model("userroles", schema)