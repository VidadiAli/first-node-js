const mongoose = require("mongoose");

const schema = mongoose.Schema({
    roleId: { type: mongoose.SchemaType.ObjectId, required: true },
    pemission: { type: String, default: true },
    createdBy: { type: mongoose.SchemaType.ObjectId, required: true }
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

class RolePrivilegs extends mongoose.Model {

}

schema.loadClass(RolePrivilegs);
module.exports = mongoose.model("roleprivilegs", schema)