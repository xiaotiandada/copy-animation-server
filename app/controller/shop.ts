import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.shop.list();
  }
  public async createShop() {
    const { ctx } = this;
    const { title = '', src = '', iframe = '' } = ctx.request.body;
    ctx.body = await ctx.service.shop.createShop({ title, src, iframe });
  }
}
