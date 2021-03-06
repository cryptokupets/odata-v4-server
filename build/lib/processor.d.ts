/// <reference types="node" />
import { Transform } from "stream";
import { ODataResult } from "./result";
export declare type GeneratorAction = (value?: any) => any;
export declare type PromiseGeneratorHandler = Promise<any> | void;
export declare namespace ODataGeneratorHandlers {
    function PromiseHandler(request: any, next: GeneratorAction): PromiseGeneratorHandler;
    function StreamHandler(request: any, next: GeneratorAction): PromiseGeneratorHandler;
    function GeneratorHandler(request: any, next: GeneratorAction): PromiseGeneratorHandler;
}
export declare enum ODataMetadataType {
    minimal = 0,
    full = 1,
    none = 2
}
export interface ODataProcessorOptions {
    disableEntityConversion: boolean;
    metadata: ODataMetadataType;
    objectMode: boolean;
}
export declare class ODataProcessor extends Transform {
    private serverType;
    private options;
    private ctrl;
    private prevCtrl;
    private instance;
    private resourcePath;
    private workflow;
    private context;
    private method;
    private url;
    private query;
    private entitySets;
    private odataContext;
    private body;
    private streamStart;
    private streamEnabled;
    private streamObject;
    private streamEnd;
    private streamInlineCount;
    private elementType;
    private resultCount;
    constructor(context: any, server: any, options?: ODataProcessorOptions);
    _transform(chunk: any, _: string, done: Function): any;
    public _flush(done?: Function): void;
    private __qualifiedTypeName;
    private __EntityCollectionNavigationProperty;
    private __EntityNavigationProperty;
    private __PrimitiveProperty;
    private __read;
    private __deserialize;
    private __stripOData;
    private __EntitySetName;
    private __actionOrFunctionImport;
    private __actionOrFunction;
    private __appendLinks;
    private __appendODataContext;
    private __resolveAsync;
    private __setODataType;
    private __convertEntity;
    private __include;
    private __enableStreaming;
    private __applyParams;
    execute(body?: any): Promise<ODataResult>;
}
