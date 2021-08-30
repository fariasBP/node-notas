import {Router} from 'express'
import * as ProductsCtrl from '../controllers/ProductsController'

const router = Router()

router
    .post('/', ProductsCtrl.createProduct)
    .get('/viewAll', ProductsCtrl.getProducts)
    .get('/:productId', ProductsCtrl.getProductById)
    .put('/:productId', ProductsCtrl.updateProductById)
    .delete('/:productId', ProductsCtrl.delteProductById)

export default router;