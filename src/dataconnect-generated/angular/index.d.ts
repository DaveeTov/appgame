import { CreateCustomerData, ListProductsData, UpdateProductStockData, UpdateProductStockVariables, ListOrdersForCustomerData, ListOrdersForCustomerVariables } from '../';
import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise} from '@angular/fire/data-connect';
import { CreateQueryResult, CreateMutationResult} from '@tanstack/angular-query-experimental';
import { CreateDataConnectQueryResult, CreateDataConnectQueryOptions, CreateDataConnectMutationResult, DataConnectMutationOptionsUndefinedMutationFn } from '@tanstack-query-firebase/angular/data-connect';
import { FirebaseError } from 'firebase/app';
import { Injector } from '@angular/core';

type CreateCustomerOptions = DataConnectMutationOptionsUndefinedMutationFn<CreateCustomerData, FirebaseError, undefined>;
export function injectCreateCustomer(options?: CreateCustomerOptions, injector?: Injector): CreateDataConnectMutationResult<CreateCustomerData, undefined, >;

export type ListProductsOptions = () => Omit<CreateDataConnectQueryOptions<ListProductsData, undefined>, 'queryFn'>;
export function injectListProducts(options?: ListProductsOptions, injector?: Injector): CreateDataConnectQueryResult<ListProductsData, undefined>;

type UpdateProductStockOptions = DataConnectMutationOptionsUndefinedMutationFn<UpdateProductStockData, FirebaseError, UpdateProductStockVariables>;
export function injectUpdateProductStock(options?: UpdateProductStockOptions, injector?: Injector): CreateDataConnectMutationResult<UpdateProductStockData, UpdateProductStockVariables, UpdateProductStockVariables>;

type ListOrdersForCustomerArgs = ListOrdersForCustomerVariables | (() => ListOrdersForCustomerVariables);
export type ListOrdersForCustomerOptions = () => Omit<CreateDataConnectQueryOptions<ListOrdersForCustomerData, ListOrdersForCustomerVariables>, 'queryFn'>;
export function injectListOrdersForCustomer(args: ListOrdersForCustomerArgs, options?: ListOrdersForCustomerOptions, injector?: Injector): CreateDataConnectQueryResult<ListOrdersForCustomerData, ListOrdersForCustomerVariables>;
