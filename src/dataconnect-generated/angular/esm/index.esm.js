import { createCustomerRef, listProductsRef, updateProductStockRef, listOrdersForCustomerRef } from '../../';
import { DataConnect, CallerSdkTypeEnum } from '@angular/fire/data-connect';
import { injectDataConnectQuery, injectDataConnectMutation } from '@tanstack-query-firebase/angular/data-connect';
import { inject, EnvironmentInjector } from '@angular/core';
export function injectCreateCustomer(args, injector) {
  return injectDataConnectMutation(createCustomerRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectListProducts(options, injector) {
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

export function injectUpdateProductStock(args, injector) {
  return injectDataConnectMutation(updateProductStockRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectListOrdersForCustomer(args, options, injector) {
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

