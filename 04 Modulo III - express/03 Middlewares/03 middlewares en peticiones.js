import {Router} from 'express'
import * as ProductsCtrl from '../controllers/ProductsController'
import {isAdmin, isModerator, verifyToken} from '../middlewares/authJwtMiddleware'

const router = Router()

router
    .post('/', [verifyToken, isModerator], ProductsCtrl.createProduct)
    .get('/', ProductsCtrl.getProducts)
    .get('/:productId', [verifyToken, isModerator], ProductsCtrl.getProductById)
    .put('/:productId', [verifyToken, isModerator], verifyToken, ProductsCtrl.updateProductById)
    .delete('/:productId', [verifyToken, isAdmin], ProductsCtrl.delteProductById)

export default router;