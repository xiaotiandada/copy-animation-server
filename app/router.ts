import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/shop', controller.shop.index);
  router.post('/shop', controller.shop.createShop);
};
