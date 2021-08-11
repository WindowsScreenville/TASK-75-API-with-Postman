const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) =>{
        pool.query(
            `INSERT INTO registration(firstname, lastname, gender, email, password, number)
             VALUES (?, ?, ?, ?, ?, ?)`,
        
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }

                return callBack(null, results);
            }
        );
    },

    getUsers: callBack => {
        pool.query(
            `SELECT Id, firstname, lastname, gender, email, password, number FROM registration`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results);
            }
        );
    },

    getUserbyUserId: (id, callBack) => {
        pool.query(
            `SELECT Id, firstname, lastname, gender, email, password, number FROM registration
             WHERE Id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }
        );
    },

    updateUser: (data, callBack) => {
        pool.query(
            `UPDATE registration set firstname = ?, lastname = ?, gender = ?, email = ?, password = ?, number = ?
             WHERE Id = ?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results);
            }
        );
    },

    deleteUser: (data, callBack) => {
        pool.query(
            `DELETE FROM registration WHERE Id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }
        );
    },

    getUserbyUserEmail: (email, callBack) => {
        pool.query(
            `SELECT * FROM registration WHERE email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }

        );
    }

};