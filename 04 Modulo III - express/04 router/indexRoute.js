import { Router } from 'express'
import pkg from '../../package.json'

const router = Router()

router.get('/', (req, res, next) => {
    res.json({
        name: pkg.name,
        author: pkg.author,
        description: pkg.description,
        version: pkg.version
    })
})

export default router;