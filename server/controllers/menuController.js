module.exports = {
    getMenu: async (req, res) => {
        const {business_id} = req.params;
        console.log(req.params)
        const db = req.app.get("db");
        const menu = await db.menu.get_menu(+business_id);
        // console.log(business_id);
        res.status(200).send(menu);        

        // const db = req.app.get("db");
        // const menu = await db.menu.get_menu();
        // res.status(200).send(menu);
    },
    addToMenu: async (req, res) => {
        const { item_name, item_price, item_description, item_image, business_id } = req.body;
        const db = req.app.get("db");

        const menu = await db.menu.add_to_menu([
            item_name,
            item_price,
            item_description,
            item_image,
            business_id
        ]);
        res.status(200).send(menu);
    },
    editMenuItem: async (req, res) => {
        const { item_name, item_price, item_description, item_image } = req.body;
        const { menu_item_id } = req.params;
        const db = req.app.get("db");

        const menu = await db.menu.edit_menu_item({
            item_name,
            item_price,
            item_description,
            item_image,
            menu_item_id: menu_item_id
        });
        res.status(200).send(menu);
    },
    deleteMenuItem: async (req, res) => {
        const { menu_item_id } = req.params;
        const db = req.app.get("db");

        const menu = await db.menu.delete_menu_item([menu_item_id]);

        res.status(200).send(menu);
    },
};