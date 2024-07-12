import { Router } from 'express'
import { PaymentRoutes } from '../modules/payment/payment.route'
import { ProductRoutes } from '../modules/product/product.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/payments',
    route: PaymentRoutes,
  },
]
moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router
