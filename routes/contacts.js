const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('contacts', {
        title: 'Контакты',
        isContacts: true,
        phone: '8-915-423-81-99'
    })
})

module.exports = router