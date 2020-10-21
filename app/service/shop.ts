import { Service } from 'egg';
import { shopInterface } from '../type';
import * as moment from 'moment';

/**
 * Shop Service
 */
export default class Shop extends Service {
  /**
   * get all shop list
   */
  public async list() {
    try {
      const results = await this.app.mysql.select('shop');
      return {
        code: 0,
        data: {
          count: 0,
          list: results,
        },
        message: 'success',
      };
    } catch (e) {
      this.logger.error('shop list error', e);
      return {
        code: -1,
        message: 'faild',
      };
    }
  }
  /**
   * create shop
   * @param param0 { title, src, iframe }
   */
  public async createShop({ title, src, iframe }: shopInterface) {
    try {
      const time = moment().format('YYYY-MM-DD HH:mm:ss');
      this.logger.info('title, src, iframe, time', title, src, iframe, time);
      const result = await this.app.mysql.insert('shop', {
        title,
        src,
        iframe,
        create_time: time,
        update_time: time,
      });
      const insertSuccess = result.affectedRows === 1;
      if (insertSuccess) {
        return {
          code: 0,
          message: 'success',
        };
      }
      this.logger.error(`createShop faild ${result}`);
      return {
        code: -1,
        message: 'faild',
      };
    } catch (e) {
      this.logger.error('create shop error', e);
      return {
        code: -1,
        message: 'faild',
      };
    }
  }
}
