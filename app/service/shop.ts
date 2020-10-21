import { Service } from 'egg';

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
      return results;
    } catch (e) {
      this.logger.error('shop list error', e);
      return [];
    }
  }
}
