import {request} from "./request";

export function getdetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export class goods {
  constructor(iteminfo,columns,services) {
    this.title=iteminfo.title;
    this.desc=iteminfo.desc;
    this.newprice = iteminfo.price;
    this.oldprice= iteminfo.oldPrice;
    this.discount = iteminfo.discountDesc;
    this.columns =columns;
    this.services=services;
    this.realprice=iteminfo.lowNowPrice

  }
}
export class shop {
  constructor(shopinfo) {
    this.logo=shopinfo.shopLogo;
    this.name=shopinfo.name;
    this.fans=shopinfo.cFans;
    this.sells=shopinfo.cSells;
    this.score = shopinfo.score;
    this.goodscount = shopinfo.cGoods;
  }
}
export class goodsparams {
  constructor(info,rule) {
    this.image=info.images ? info.images[0]:'';
    this.infos=info.set;
    this.sizes = rule.tables
  }
}
export function getrecommend() {
  return request({
    url:'/recommend'
  })
}
