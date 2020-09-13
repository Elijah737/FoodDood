const bcrypt = require("bcryptjs");

module.exports = {
    register: async (req, res) => {
        const { business_name, business_email, business_password, cuisine, specialities, specials } = req.body;
        const db = req.app.get("db");
        let foundBusiness = await db.business.get_business([business_email]);
        if (foundBusiness[0]) {
            res.status(409).send("Business Already Exists");
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(business_password, salt);
            const newBusiness = await db.business.add_business([business_name, business_email, hash, cuisine, specialities, specials]);
            
            req.session.business = newBusiness[0];
            res.status(201).send(newBusiness[0]);
        }
    },
    login: async (req, res) => {
        const { business_email, business_password } = req.body;
        const db = req.app.get("db");

        let foundBusiness = await db.business.get_business(business_email);
        foundBusiness = foundBusiness[0];
        if(foundBusiness){
            const compareHash = foundBusiness.business_password;
            const authenticated = bcrypt.compareSync(business_password, compareHash);
            if(authenticated) {
                delete foundBusiness.business_password;
                req.session.business = foundBusiness;
                res.status(202).send(foundBusiness)
            } else {
                res.status(401).send("Email or Password Incorrect");
            }
        } else {
            res.status(401).send("Email or Password Incorrect");
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getBusiness: (req, res) => {
        if (req.session.business) {
            res.status(200).send(req.session.business);
        } else {
            res.sendStatus(404)
        }
    },

    getAllBusiness: async (req, res) => {
        const db = req.app.get("db");
        const allBusiness = await db.business.get_all_business();
        res.status(200).send(allBusiness);
    },

    editBusiness: async (req, res) => {
        const { business_name, cuisine, specialities, specials } = req.body;
        const { business_id } = req.params;
        const db = req.app.get("db");

        const business = await db.business.edit_business({
            business_name,
            cuisine,
            specialities,
            specials,
            business_id: +business_id
        });
        res.status(200).send(business);
    },
};