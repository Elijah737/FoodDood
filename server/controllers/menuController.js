module.exports = {
    getMenu: async (req, res) => {
        const {business_id} = req.params;
        console.log( "getMenu", req.params)
        const db = req.app.get("db");
        const menu = await db.menu.get_menu(+business_id);
        // console.log(business_id);
        res.status(200).send(menu);        

        // const db = req.app.get("db");
        // const menu = await db.menu.get_menu();
        // res.status(200).send(menu);
    },
    addToMenu: async (req, res) => {
        const { item_name, item_price, item_description, item_image } = req.body;
        const {business_id} = req.params;
        const db = req.app.get("db");

        const menu = await db.menu.add_to_menu({
            item_name,
            item_price,
            item_description,
            item_image,
            business_id: +business_id
        });
        res.status(200).send(menu);
    },
    editMenuItem: async (req, res) => {
        const { item_name, item_price, item_description, item_image } = req.body;
        const { menu_item_id, business_id } = req.params;
        console.log( "editMenuItem", req.params)
        console.log( "editMenuItem menu_item_id", menu_item_id)
        const db = req.app.get("db");
        const menu = await db.menu.edit_menu_item({
            item_name,
            item_price,
            item_image,
            item_description,
            business_id: +business_id,
            menu_item_id: +menu_item_id
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