const { createCustomerRef, listProductsRef, updateProductStockRef, listOrdersForCustomerRef } = require('../');
const { DataConnect, CallerSdkTypeEnum } = require('@angular/fire/data-connect');
const { injectDataConnectQuery, injectDataConnectMutation } = require('@tanstack-query-firebase/angular/data-connect');
const { inject, EnvironmentInjector } = require('@angular/core');

exports.injectCreateCustomer = function injectCreateCustomer(args, injector) {
  return injectDataConnectMutation(createCustomerRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectListProducts = function injectListProducts(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  listProductsRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectUpdateProductStock = function injectUpdateProductStock(args, injector) {
  return injectDataConnectMutation(updateProductStockRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectListOrdersForCustomer = function injectListOrdersForCustomer(args, options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  const varsFactoryFn = (typeof args === 'function') ? args : () => args;
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  listOrdersForCustomerRef(dc, varsFactoryFn()),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

