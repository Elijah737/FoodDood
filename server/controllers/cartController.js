module.exports = {

    getCart: (req, res) => {
        const {user_id} = req.params;
        req.app.get('db').cart.get_cart(user_id)
        .then(cartItems => res.status(200).send(cartItems))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    addToCart: (req, res) => {
        const {user_id, menu_item_id, item_name, item_price} = req.body;
        req.app.get('db').cart.add_to_cart(user_id, menu_item_id, item_name, item_price)
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    deleteFromCart: (req, res) => {
        const {user_id, menu_item_id} = req.params;
        req.app.get('db').cart.delete_single_from_cart(user_id, menu_item_id)
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },
}